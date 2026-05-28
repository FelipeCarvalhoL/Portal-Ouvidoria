const botao =
document.getElementById("btnConsultar");

botao.addEventListener("click", function(){

    const protocoloDigitado =
    document.getElementById("campoProtocolo").value;

    const demandas =
    JSON.parse(localStorage.getItem("demandas")) || [];

    const demandaEncontrada =
    demandas.find(
        item => item.protocolo == protocoloDigitado
    );

    if(demandaEncontrada){

        localStorage.setItem(
            "protocoloConsulta",
            protocoloDigitado
        );

        window.location.href =
        "../resumo-demanda/resumo.html";

    }else{

        alert("Protocolo não encontrado.");

    }

});