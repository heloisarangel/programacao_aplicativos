comecando novo projeto
git init 

//Como clonar um repositorio 
git clone  https://github.com/RamonNew/programacao_aplicativo.git

//Configurando
git config user.email "exemplo@gmail.com"
git config user.name "Heloisa rangel"

//Selecionando branch 
git branch -M main
git remote add origin 
https://github.com/RamonNew/programacao_aplicativo.git

// adicionando arquivos
git add .

//colocando comentario do commit "comitar"
git commit -m "o que foi realizado"

//Subindo alteracoes
git push -u origin main

create database loja_parafusos;

use loja_parafusos;

create table parafusos(
	id_doce int primary key auto_increment,
id_categoria
    nome_doce varchar(45)
nome_categoria
);

-- iniciando o CRUD
-- insert é o CREATE
insert into parafusos (nome categoria) values
("estrela"),
("frances"),
("máquina")
;

-- SELECT read
select * from parafusos;
-- UPDATE é update
update parafusos set nome="fenda" where id_parafuso=1;

-- DELETE é delete

delete from parafusos where id_parafuso=1;

npx nodemon src/App.js


cd 04_05 
cd server


// dia 
CREATE DATABASE loja_doces;

USE loja_doces;

CREATE TABLE doces(
id_doce int primary key AUTO_INCREMENT,
nome_doce VARCHAR (45),
nome_categoria VARCHAR (10)
);

INSERT INTO doces (nome) values
(" bolo"),
("doces tradicionais")
;

select*from doces;

UPDATE doce set nome = "bolo" WHERE id_doce=1;

-- drop database loja_doces;


delete from categoria where id_categoria=2;


// instalacoes

node -v

npm install express

npm install nodemon

npm install mysql2

dps que subir o node_modules

criar .gitignore escrever dentro do arquivo /node_modules



prova de amanha

CREATE DATABASE doces;

use doces;

CREATE TABLE categorias(
id_categoria INT PRIMARY KEY AUTO_INCREMENT,
nome_categoria VARCHAR (30) NOT NULL
);

INSERT INTO categorias (nome_categoria) VALUES
("Bolos"), ("Tortas"), ("Doces Finos"), ("Doces Tradicionais");

SELECT * FROM categorias;

CREATE TABLE doces (
id_doces INT PRIMARY KEY AUTO_INCREMENT,
nome_doce VARCHAR (40) NOT NULL,
id_categoria INT NOT NULL, 
FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

INSERT INTO doces (id_categoria,nome_doce) VALUES
(1,"Red Velvet"),
(2,"Bolo laranja"),
(3,"Torta de frango");

SELECT * FROM doces;


Controllers
Categoria Controller

import CategoriaModel from "../Models/CategoriaModel.js";

class CategoriaController{
    constructor(){

    }

    create(req,res){
        const nome_categoria = req.body.nome_categoria
        CategoriaModel.create(nome_categoria).then(
            resposta =>{
                console.debug("Cadastrando uma categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro cadastrando uma categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    read(req,res){
        CategoriaModel.read().then(
            resposta =>{
                console.debug("Exibindo categorias")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Exibindo categorias")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    update(req,res){
        const id_categoria = req.params.id_categoria
        const nome_categoria = req.body.nome_categoria
        CategoriaModel.update(id_categoria,nome_categoria).then(
            resposta =>{
                console.debug("Atualizando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Atualizando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_categoria = req.params.id_categoria
        CategoriaModel.delete(id_categoria).then(
            resposta =>{
                console.debug("Deletando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Deletando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

export default new CategoriaController()

DOCE CONTROLLER

import DoceModel from "../Models/DoceModel.js"

class DoceController{
    constructor(){

    }

    create(req,res){
        const nome_doce = req.body.nome_doce
        const id_categoria = req.body.id_categoria
        DoceModel.create(nome_doce,id_categoria).then(
            resposta =>{
                console.debug("Cadastrando um doce")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro cadastrando um doce")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    read(req,res){
        DoceModel.read().then(
            resposta =>{
                console.debug("Exibindo doces")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Exibindo doces")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    update(req,res){
        const id_doce = req.params.id_doce
        const nome_doce = req.body.nome_doce
        const id_categoria = req.body.id_categoria
        DoceModel.update(id_doce,nome_doce,id_categoria).then(
            resposta =>{
                console.debug("Atualizando doce")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Atualizando doce")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_doce = req.params.id_doce
        DoceModel.delete(id_doce).then(
            resposta =>{
                console.debug("Deletando doce")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Deletando doce")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

export default new DoceController()


MODEL.JS
DOCE MODEL

import mysql from "mysql2"
import config from "../Config.js"

class DoceModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }

    create(nome_doce, id_categoria){
        let sql = `INSERT INTO doces (nome_doce,id_categoria) VALUES("${nome_doce}","${id_categoria}");`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Doce inserido"])
            })
        });
    }

    read(){
        let sql = `SELECT * FROM doces;`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        });
    }
    update(id_doce,nome_doce,id_categoria){
        let sql = `UPDATE doces SET nome_doce="${nome_doce}", id_categoria="${id_categoria}" WHERE id_doce="${id_doce}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Doce Atualizado"])
            })
        });
    }
    delete(id_doce){
        let sql = `DELETE FROM doces WHERE id_doce="${id_doce}"`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Doce Deletado"])
            })
        });
    }
}

export default new DoceModel();

CATEGORIAMODEL

import mysql from "mysql2"
import config from "../Config.js"

class CategoriaModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }

    create(nome_categoria){
        let sql = `INSERT INTO categorias (nome_categoria) VALUES("${nome_categoria}");`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Categoria inserida"])
            })
        });
    }

    read(){
        let sql = `SELECT * FROM categorias;`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        });
    }
    update(id_categoria,nome_categoria){
        let sql = `UPDATE categorias SET nome_categoria="${nome_categoria}" WHERE id_categoria="${id_categoria}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Atualizado"])
            })
        });
    }
    delete(id_categoria){
        let sql = `DELETE FROM categorias WHERE id_categoria="${id_categoria}"`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Deletado"])
            })
        });
    }
}

export default new CategoriaModel();


CONFIG.JS

const config = {
    db:{
        host:"localhost",
        user:"root",
        password:"",
        database:"loja_doces"
    }
}

export default config


APP.JS

import express from "express"
import CategoriaController from "./Controllers/CategoriaController.js"
import DoceController from "./Controllers/DoceController.js"

const server = express()

server.use(express.json())

server.get("/",(req,res)=>{
    res.status(200).json("Servidor Funcionando")
})

server.post("/categorias",CategoriaController.create)
server.get("/categorias",CategoriaController.read)
server.put("/categorias/:id_categoria",CategoriaController.update)
server.delete("/categorias/:id_categoria",CategoriaController.delete)

server.post("/doces",DoceController.create)
server.get("/doces",DoceController.read)
server.put("/doces/:id_doce",DoceController.update)
server.delete("/doces/:id_doce",DoceController.delete)

server.listen(5000)

ADICIONAR .GITIGNORE
/node_modules


