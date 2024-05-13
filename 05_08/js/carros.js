class Carro {
    constructor(marca, placa, cor, ano) {
        this.marca = marca
        this.placa = placa
        this.cor = cor
        this.ano = ano
    }
}
//A função pop remove apenas o ultimo elemento
/*function removerCarro(arraycarro){
arrayCarro.pop()
console.log(arrayCarro)
}*/

function removerCarro(index){
// o remoto splice altera o conteudo de uma lista podendo adicionar enquanto remove elemento
// abaixo vamos remover um elemento especifico

carros.splice(index,1)
//index preenta a posicao do array e o numero a quantidade de itens 
carregarCarros()
}

// inicializando um array vazio 
let carros = []
// criando um carro uno 
let uno = new Carro("fiat", "xxy-4502", "vermelho", 2012)
carros.push(uno) // acrescentar no array de carros 
console.log(carros)

 // criando um carro fusca
 let fusca = new Carro("Volkswagen", "uuu-8978", "branco", 1980)
carros.push(fusca) // acrescentar no array de carros 
console.log(carros)

 // criando um carro starda
 let strada = new Carro("fiat", "xxx-2020", "branco", 2014)
carros.push(strada) // acrescentar no array de carros 

// criando um carro onix
let onix = new Carro("chevrolet", "xxx-2020", "branco", 2023)
carros.push(onix) // acrescentar no array de carros 





function carregarCarros() {
    let html = "<tr><th>Index</th>"
        html+= "<th>Marca</th>"
        html+= "<th>Placa</th>"
        html+="<th>Cor</th>"
        html+="<th>Ano</th>"
        html+="<th>Deletar</th></tr>"


    for (let i = 0; i < carros.length; i++) {
        html += "<tr>"
        html += "<td>"+ i + "</td>"
        html += "<td>" + carros[i].marca + "</td>"
        html += "<td>" + carros[i].placa + "</td>"
        html += "<td>" + carros[i].cor + "</td>"
        html += "<td>" + carros[i].ano + "</td>"
        html += '<td><button onclick = "removerCarro('+i+')">Deletar</button></td>'
        html += "</tr>"
    }
    document.getElementById("listaCarros").innerHTML = html
}
function cadastrarCarro() {
    let marca = document.getElementById("marca").value
    let placa = document.getElementById("placa").value
    let cor = document.getElementById("cor").value
    let ano = parseInt(document.getElementById("ano").value)

    let carro = new Carro(marca, placa, cor, ano)

    carros.push(carro)
    carregarCarros()
}

//removerCarro(carros)