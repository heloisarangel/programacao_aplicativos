comecando novo projeto
git init 

//Como clonar um repositorio 
git clone  https://github.com/RamonNew/programacao_aplicativo.git

//Configurando
git config user.email "exemplo@gmail.com"
git config user.name "Heloisa rangel"

//Selecionando branch 
git branch -M main
git remote add origin https://github.com/RamonNew/programacao_aplicativo.git

// adicionando arquivos
git add .

//colocando comentario do commit "comitar"
git commit -m "o que foi realizado"

//Subindo alteracoes
git push -u origin main

