function enviarContato(event) {

    event.preventDefault();

    alert(
        "Mensagem enviada com sucesso! " +
        "A Senca Contábil entrará em contato."
    );

    event.target.reset();
}


function enviarOrcamento(event) {

    event.preventDefault();

    alert(
        "Solicitação de orçamento enviada com sucesso!"
    );

    const modal =
        bootstrap.Modal.getInstance(
            document.getElementById("modalOrcamento")
        );

    if (modal) {
        modal.hide();
    }

    event.target.reset();
}
