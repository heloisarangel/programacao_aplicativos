import mysql from "mysql2"
import config from "../Config.js";


class ParafusoModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db);
       
    }

    create(nome){
        let sql = `INSERT INTO parafusos (nome) VALUES("${nome}");`;

     return new Promise((resolve,reject)=>{
        this.conexao.query(sql,(erro,retorno)=>{
            if(erro){
                reject([400,erro])
            }
            resolve([201,"Parafuso Adicionado"])
        })
     });
    }
    read(){
        let sql = `select * from` ;

        return new Promise((resolve,reject)=>{
           this.conexao.query(sql,(erro,retorno)=>{
               if(erro){
                   reject([400,erro])
               }
               resolve([201,retorno])
           })
        })
       }
    
    update(index, nome){
        let parafuso = {
            nome:nome
        }
      this.parafusos[index]= parafuso;

    }
    delete(index){
        this.parafusos.splice(index,1);
    }
}

export default new ParafusoModel();