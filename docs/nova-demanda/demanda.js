const form = document.getElementById("form-demanda");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const tipo =
    document.querySelector('input[name="tipo"]:checked').value;

    const titulo =
    document.getElementById("titulo").value;

    const descricao =
    document.getElementById("descricao").value;

    const nome =
    document.getElementById("nome").value;

    const email =
    document.getElementById("email").value;

    const telefone =
    document.getElementById("telefone").value;

    let protocolo;

    let demandas =
    JSON.parse(localStorage.getItem("demandas")) || [];

    do{

        protocolo =
        Math.floor(100000 + Math.random() * 900000);

    }while(
        demandas.some(
            demanda => demanda.protocolo == protocolo
        )
    );

    const novaDemanda = {

        protocolo: protocolo,
        tipo: tipo,
        titulo: titulo,
        descricao: descricao,
        nome: nome,
        email: email,
        telefone: telefone,
        status: "Em análise"

    };

    demandas.push(novaDemanda);

    localStorage.setItem(
        "demandas",
        JSON.stringify(demandas)
    );

    localStorage.setItem(
        "protocoloConsulta",
        protocolo
    );

    window.location.href =
    "../resumo-demanda/resumo.html";

});