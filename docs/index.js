const form =
document.getElementById("form-login");

const botaoOlho =
document.getElementById("mostrarSenha");

const senhaInput =
document.getElementById("senha");

botaoOlho.addEventListener("click", function(){

    if(senhaInput.type === "password"){

        senhaInput.type = "text";

    }else{

        senhaInput.type = "password";

    }

});

form.addEventListener("submit", function(event){

    event.preventDefault();

    const cpf =
    document.getElementById("cpf").value;

    const senha =
    document.getElementById("senha").value;

    const usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado =
    usuarios.find(usuario =>
        usuario.cpf === cpf &&
        usuario.senha === senha
    );

    if(usuarioEncontrado){

        localStorage.setItem(
            "usuarioLogado",
            cpf
        );

        window.location.href =
        "tela-boas-vindas/boas_vindas.html";

    }else{

        alert("CPF ou senha inválidos.");

    }

});