 function validateForm() {
        const nomeInput = document.getElementById('nome');
        const senhaInput = document.getElementById('senha');
        const passwordError = document.getElementById('passwordError');
        const nome = nomeInput.value;
        const senha = senhaInput.value;

        // Funções de validação do Validator.js
        if (!validator.isLength(nome, { min: 1 }) || !validator.isAlphanumeric(nome)) {
            passwordError.textContent = "O nome é inválido. Deve conter caracteres alfanuméricos.";
            return false;
        }

        if (!validator.isLength(senha, { min: 6 })) {
            passwordError.textContent = "A senha deve conter pelo menos 6 caracteres.";
            return false;
        }

        passwordError.textContent = ""; // Limpa a mensagem de erro
        return true; // Permite o envio do formulário
    }