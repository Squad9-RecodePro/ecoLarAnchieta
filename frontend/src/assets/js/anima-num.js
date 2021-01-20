function animaNumeros() {
    const numeros = document.querySelectorAll('.statistics-value');

    numeros.forEach((numero) => {
        const total = numero.innerText;
        const incremento = Math.floor(total / 100);
        let start = 0;
        const timer = setInterval(() => {
            start = start + incremento;
            numero.innerText = `${start} +`;
            if(start > total){
                numero.innerText = `${total} +`;
                clearInterval(timer);
            }
        }, 25 * Math.random());
    });
}



// Ativa quando tem mutação
function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('ativo')) {
        observer.disconnect();
        animaNumeros();
    }
}
// Observar sempre a seção statistics-section
const observerTarget = document.querySelector('.statistics-section')
const observer = new MutationObserver(handleMutation);

observer.observe(observerTarget, {attributes: true});