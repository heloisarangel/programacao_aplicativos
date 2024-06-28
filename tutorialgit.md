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



