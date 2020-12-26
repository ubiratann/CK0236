const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "./db.sqlite3";

let db = new sqlite3.Database(DBSOURCE ,(err)=>{
    if(err){
        // return console.log("Falha de conexao com banco :(");
    }else{
        // console.log("Conectado com o banco");
        db.run( `CREATE TABLE IF NOT EXISTS usuario(
            codigo_usuario integer PRIMARY KEY  AUTOINCREMENT,
            nome_usuario text UNIQUE,
            senha text
        );`),(err)=>{
            // console.log(err);
        }

        db.run(`CREATE TABLE IF NOT EXISTS todo(
            codigo_todo integer PRIMARY KEY AUTOINCREMENT,
            codigo_usuario integer,
            titulo text,
            codigo_estado integer,
            descricao text,
            data_criacao integer,
            data_finalizacao integer,
            FOREIGN KEY(codigo_usuario) REFERENCES usuario(codigo_usuario)
        ) `)
    }

})

module.exports = db;
