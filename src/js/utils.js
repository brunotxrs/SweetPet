function utilsCarousel(myItem, classActive, time, classMobile) {
    // Define o tempo padrão (se não for passado, usa 5000ms)
    time = time || 5000;
    
    var myIndex = 0;
    var paramItem = document.getElementsByClassName(myItem);

    var mobileItems = classMobile ? document.getElementsByClassName(classMobile) : null;

    // Se não tiver nenhum elemento, para
    if (paramItem.length === 0) return;

    function carousel() {
        var i;

        // 1. Esconde / Remove classe de TODOS os itens principais
        for (i = 0; i < paramItem.length; i++) {
            if (classActive === true || classActive === undefined) {
                paramItem[i].style.display = "none";
            } else {
                paramItem[i].classList.remove(classActive);
            }
        }

        // 2. Se existir itens móveis, esconde eles também
        if (mobileItems) {
            for (i = 0; i < mobileItems.length; i++) {
                mobileItems[i].style.display = "none";
                mobileItems[i].classList.remove(classActive);
            }
        }

        // 3. Avança o índice
        myIndex++;
        if (myIndex > paramItem.length) {
            myIndex = 1;
        }

        // 4. Mostra / Adiciona classe no item atual (principal)
        var itemAtual = paramItem[myIndex - 1];
        
        if (classActive === true || classActive === undefined) {
            itemAtual.style.display = "block";
        } else {
            itemAtual.classList.add(classActive);
        }

        // 5. Verifica se é celular e mostra o item extra
        if (mobileItems && window.innerWidth < 768) {
            var itemMobile = mobileItems[myIndex - 1];
            if (itemMobile) {
                itemMobile.style.display = "block";
                itemMobile.classList.add(classActive);
            }
        }

        // 6. Loop infinito
        setTimeout(carousel, time);
    }

    // Inicia o carrossel
    carousel();
}

function utilScroll(myItem, classActive) {
    // 1. Pega o botão
    const meuBotao = document.getElementById(myItem);
    if (!meuBotao) return; // Se o botão não existir, para

    // 2. Função que verifica a rolagem
    function verificarRolagem() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop > 20) {
            // Se rolou mais de 20px: mostra o botão
            if (classActive === true || classActive === undefined) {
                // Modo 1: Controla via display
                meuBotao.style.display = "block";
            } else {
                // Modo 2: Controla via classe
                meuBotao.classList.add(classActive);
            }
        } else {
            // Se está no topo: esconde o botão
            if (classActive === true || classActive === undefined) {
                meuBotao.style.display = "none";
            } else {
                meuBotao.classList.remove(classActive);
            }
        }
    }

    // 3. Adiciona o evento de scroll
    window.addEventListener("scroll", verificarRolagem);

    // 4. Adiciona o evento de clique (voltar ao topo) APENAS UMA VEZ
    meuBotao.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 5. Executa a verificação uma vez no carregamento da página
    verificarRolagem();
}

export { utilsCarousel,  utilScroll };