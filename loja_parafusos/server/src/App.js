import express from 'express'; //Importando o express
import ParafusoController from './Controllers/ParafusoController.js';

const server = express(); //Iniciando o express

server.use(express.json()) // Configurando o json

server.get('/',(req,res)=>{
    res.status(200).json("Servidor Funcionando");
});

server.get('/parafusos',ParafusoController.read);
server.post('/parafusos',ParafusoController.create);
server.put('/parafusos/:id_parafuso',ParafusoController.update);
server.delete('/parafusos/:id_parafuso',ParafusoController.delete);

server.listen(5000);

