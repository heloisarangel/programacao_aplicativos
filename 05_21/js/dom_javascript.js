//Quando a pagina Web e carregada o navegador cria um Document Object Model (DOM)
// O DOM possui uma arvore de objetos

document.getElementById("saudacao").innerHTML = " Boa Tarde Terça-feira"
//Adicionando uma saudacao a uma div 

let h1s = document.getElementsByTagName("h1")// Pegando um array com todos os elementos h1

h1s[0].innerText="Introduçao"
h1s[1].innerText="SENAI Porto"

let descricao = document.getElementsByClassName("descricao") // Pegando um array com cada elemento  com tag descricao

for (let i = 0;i < descricao.length;i++){
    descricao[i].innerText = "Div"+i
}

function alterandoClasse(){
    let conteudo = document.getElementById("conteudo")
    conteudo.className = "alterada"
}

function adicionandoClasse(){
    let texto = document.getElementById("texto")
    texto.classList.add("vermelho")
}

function removendoClasse(){
  let texto = document.getElementById("texto")
  texto.classList.remove("vermelho")
}


