const express = require('express');
const server = express()

server.use(express.json())

let usuarios = [
    { id: 1, nome: 'Heloisa' },
    { id: 2, nome: 'Jose' },
    { id: 3, nome: 'Pedro' },
    { id: 4, nome: 'Gabriel' }
]

server.get("/", (req, res) => {
    //res.json("Ola mundo")
    res.send('Ola mundo');
})

server.get('/usuarios', (req, res) => {
    res.send(usuarios)
});

server.get('/cadastro', (req, res) => {
    const nome = req.query.nome
    const senha = req.query.senha

    res.send(nome)
})


server.get('/cadastro_pessoa/:nome', (req, res) => {
    const nome = req.params.nome
    res.send(nome)
})

server.post('/usuarios', (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome

    let usuario = {
        id: id,
        nome: nome
    }

    usuarios.push(usuario)

    res.status(200).json("usuario Cadastrado");
})

server.listen(5000);


