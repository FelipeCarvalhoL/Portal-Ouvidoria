const titulo = document.getElementById("titulo");
const tipo = document.getElementById("tipo");
const descricao = document.getElementById("descricao");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const protocolo = document.getElementById("protocolo");
const statusTexto = document.getElementById("status");
const botao = document.getElementById("btnResposta");

const protocoloConsulta =
localStorage.getItem("protocoloConsulta");

const demandas =
JSON.parse(localStorage.getItem("demandas")) || [];

const demanda =
demandas.find(
    item => item.protocolo == protocoloConsulta
);

if(demanda){

    titulo.innerText = demanda.titulo;

    tipo.innerText = demanda.tipo;

    descricao.innerText = demanda.descricao;

    nome.innerText = demanda.nome;

    email.innerText = demanda.email;

    telefone.innerText = demanda.telefone;

    protocolo.innerText = demanda.protocolo;

    statusTexto.innerText = demanda.status;

    if(demanda.status === "Respondido"){

        botao.style.backgroundColor = "#ff6600";
        botao.style.color = "#fff";
        botao.disabled = false;
        botao.style.cursor = "pointer";

    }else{

        botao.style.backgroundColor = "#bdbdbd";
        botao.style.color = "#fff";
        botao.disabled = true;
        botao.style.cursor = "not-allowed";

    }

}else{

    alert("Demanda não encontrada.");

}