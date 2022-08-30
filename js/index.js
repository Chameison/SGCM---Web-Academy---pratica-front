
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
let xhr = new XMLHttpRequest(); //
let botaoCarregar = document.querySelector("a#load");
if (botaoCarregar) {
    botaoCarregar.addEventListener("click", () => {
        let tabela = document.querySelector("table");
        let url = "http://my-json-server.typicode.com/danielnsilva/json/profissionais";
        xhr.open("GET", url); //metodos usamos quando queremos fazer certa funcção,  
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState == 4 && xhr.status == 200){
                let dados = JSON.parse(xhr.responseText);
                for(let item in dados) {
                    let linha = document.createElement("tr"); //criando a linha
                    let id = document.createElement("td"); 
                    let nome = document.createElement("td");
                    let registro = document.createElement("td");
                    let especialidade = document.createElement("td");
                    let unidade = document.createElement("td");
                    let telefone = document.createElement("td");
                    let email = document.createElement("td");
                    let acoes = document.createElement("td");
                }
            }
        });
    })
}