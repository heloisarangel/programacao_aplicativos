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
