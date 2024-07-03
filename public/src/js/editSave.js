document.getElementById("editarBotao").addEventListener("click", function() {
    let inputs = document.querySelectorAll("#meuFormulario input");
    inputs.forEach(input => input.removeAttribute("readonly"));
    document.getElementById("salvarBotao").disabled = false;
});

document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário para o servidor
    
    let formData = new FormData(event.target);
    let formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    console.log("Dados do formulário salvos:", formObject);
    alert("Dados salvos com sucesso!");
});
