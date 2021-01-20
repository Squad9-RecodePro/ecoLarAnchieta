function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length) {
        //60% da altura da tela do usuario
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                // distancia da sessão para o topo da pagina
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if(isSectionVisible) {
                    // adiciona a palavra ativo para o css fazer a animação
                    section.classList.add('ativo');
                }
                else if(section.classList.contains('ativo')) {
                    section.classList.remove('ativo');
                }
            })
        }
        animaScroll();
        // aciona a função animaScroll conforme é utilizado o scroll da pagina
        window.addEventListener('scroll', animaScroll);
    }
}

initAnimacaoScroll();