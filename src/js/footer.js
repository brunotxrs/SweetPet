const form = document.querySelector("#my-form");
const inputEmail = document.querySelector("#email");

// Pega os elementos da animação
const btnEnviar = document.getElementById('btnEnviar');
const elementoOriginal = document.getElementById('elementoOriginal');
const elementoEnviando = document.getElementById('elementoEnviando');

// Função que valida o email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Função que executa a animação de envio
function sendEmail(callback) {
    // 1. Adiciona as classes para a animação
    elementoOriginal.classList.add('enviando');
    elementoEnviando.classList.add('aparecendo');

    // 2. Depois de 2 segundos (tempo da animação), reverte e executa o callback
    setTimeout(() => {
        elementoOriginal.classList.remove('enviando');
        elementoEnviando.classList.remove('aparecendo');

        // Se tiver um callback, executa (ex: mostrar um alerta)
        if (callback) callback();
    }, 2000); // 2 segundos
}

// Função que lida com o envio do formulário
function listingForm() {
    form.addEventListener("submit", function(evento) {
        evento.preventDefault(); // Impede o recarregamento da página

        const valorEmail = inputEmail.value.trim();

        // 1. Validação: Se estiver vazio
        if (valorEmail === "") {
            btnEnviar.innerHTML = "Por favor, digite um e-mail.";
            btnEnviar.classList.toggle('messageError');
            setTimeout(() => {
                btnEnviar.innerHTML = "Enviar";
                btnEnviar.classList.toggle('messageError');
            }, 2000);
            inputEmail.focus();
            return; // Para a execução aqui
        }

        // 2. Validação: Se não for um e-mail válido
        if (!validarEmail(valorEmail)) {
            btnEnviar.innerHTML = "Digite um e-mail válido.";
            btnEnviar.classList.toggle('messageError');
            setTimeout(() => {
                btnEnviar.innerHTML = "Enviar";
                btnEnviar.classList.toggle('messageError');
            }, 2000)
            inputEmail.value = ''; // Limpa o campo
            inputEmail.focus();
            return; // Para a execução aqui
        }

        // 3. Se passar por todas as validações, executa a animação
        sendEmail();

        // 4. Limpa o campo após o envio bem-sucedido
        inputEmail.value = '';
    });
}

export { listingForm };