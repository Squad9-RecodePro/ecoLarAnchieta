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
            clearInterval(timer)
        }
    }, 20)
    console.log(total)
})