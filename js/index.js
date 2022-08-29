
window.onload = function() {
    let botoes = document.querySelectorAll("a.excluir");
    botoes.forEach(item => {
        item.addEventListener("click", () => {
            if(confirm("Deseja realmente excluir ?")){
                alert("excluir");
            };
        })
    });//pegar cada elemento dentro dos botoes e executar o bloco de codigos que vou estar fazendo
    //funcoes anonimas
    //funcoes lambda -- hero functions 
}
