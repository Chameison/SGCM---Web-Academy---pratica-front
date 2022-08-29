
window.onload = function() {
    let botoes = document.querySelectorAll("a.excluir");
    botoes.forEach(item => {
        item.addEventListener("click", () => {
            if(confirm("Deseja realmente excluir ?")){
                item.parentNode.parentNode.remove(); //Manipulação de DOM - fazer alterações no htm /css 
            }
        })
    });//pegar cada elemento dentro dos botoes e executar o bloco de codigos que vou estar fazendo
    //funcoes anonimas
    //funcoes lambda -- hero functions 
}
