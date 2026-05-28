const form = document.getElementById("form-cadastro");

const senhaInput = document.getElementById("senha");

const botaoOlho = document.getElementById("mostrarSenha");

botaoOlho.addEventListener("click", function() {

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
    } else {
        senhaInput.type = "password";
    }

});

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;

    if (cpf === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExiste = usuarios.find(usuario => usuario.cpf === cpf);

    if (usuarioExiste) {
        alert("CPF já cadastrado.");
        return;
    }

    const novoUsuario = {
        cpf: cpf,
        senha: senha
    };

    usuarios.push(novoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");

    window.location.href = "../index.html";

});