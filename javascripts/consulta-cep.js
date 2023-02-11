$(function () {
    const servico = "http://api.postmon.com.br/v1/cep/";

    function onCepDone(data) {
        $("#logradouro").val(data.logradouro);
        $("#complemento").val(data.complemento);
        $("#bairro").val(data.bairro);
        $("#cidade").val(data.cidade);
        $("#estado").val(data.estado_info.nome);
    }

    function onCepError(error) {
        alert("Error: " + error.statusText);
    }

    function onConsultarClick(event) {
        event.preventDefault();
        let cep = $("#cep").val();
        $.getJSON(servico + cep)
            .done(onCepDone)
            .error(onCepError);
    }

    $("#consultar").click(onConsultarClick);
});
