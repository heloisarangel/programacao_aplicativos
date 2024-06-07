const express = require('express');
const server = express()

server.use(express.json())

//Criando um CRUD (Create, Read, Update,Delete)
/*Cada funcão em uma rota são definidos req e res, req faz referencia a requisicao do cliente 
(navegador,aplicacao,insominia,etc)o res e a resposta que sera exibida para a solicacao
res.status(codigo)o status e um numero que representa o resultado de uma requisicao
como exemplo 200 que representa OK e 404 elemento nao encontrado
res.status(codigo).json(mensagem) a mensagem e o que sera exibido para o cliente */


let usuarios = [
    {nome: 'Heloisa' },
    {nome: 'Jose' },
    {nome: 'Pedro' },
    {nome: 'Gabriel' }
]

server.get("/", (req, res) => {
    //res.json("Ola mundo")
    res.send('Ola mundo');
})

server.get('/usuarios', (req, res) => {// o verbo GET usado para o READ 
    res.send(usuarios)
});


server.post('/usuarios', (req, res) => {// o verbo POST usado para o CRATE
    const nome = req.body.nome; //Body corpo da requisição
   

    let usuario = {
        nome: nome
    }

    usuarios.push(usuario)

    res.status(201).json("Usuario Cadastrado");
})

server.put('/usuarios/:index',(req,res)=>{// o verbo PUT usado para o UPDATE 
  const index = req.params.index; //PArams e variavel  passada via URL
  const nome = req.body.nome

  let usuario={
    nome:nome
  }

  usuarios[index] = usuario

  res.status(200).json("Usuario atualizado")
})

server.delete('/usuarios/:index',(req,res)=>{// o verbo DELETE usado para o DELETE
    const index = req.params.index;

    usuarios.splice(index,1)

    res.status(204).json("Usuario Deletado")
})

server.listen(5000);


