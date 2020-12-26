const db = require('../database/database');

module.exports = {

    loginUsuario(req,res,next){
        let sql = `SELECT * FROM usuario WHERE nome_usuario = ? AND senha = ?`;

        let parametros = [req.body.nome_usuario, req.body.senha]
        db.get(sql,parametros,(erro,resultado)=>{
            if(erro){
                // console.log(erro);
            }else{

                let flag = false;
                let mensagem;
                let codigo_usuario = resultado ? resultado.codigo_usuario : -1;

                // console.log(resultado)
                if(resultado == undefined){
                    mensagem = "Usuário não encontrado";
                }
                else if(resultado.senha == req.body.senha){
                    mensagem = "Login realizado com sucesso";
                    flag = true;
                }else{
                    mensagem = "Senha incorreta";
                }
                res.json({
                    "autenticado": flag,
                    "codigo_usuario": codigo_usuario,
                    "mensagem" : mensagem
                });
            }
        });
    },

    inserirUsuario(req,res,next){
        let sql = `INSERT INTO usuario VALUES (?,?,?);`;
        let parametros = [ null,req.body.nome_usuario, req.body.senha ];
        db.run(sql,parametros,(erro,resultado)=>{
            if(erro){
                res.status(400).json({"codigo_erro" : erro.errno , "mensagem_erro": erro.message});
                return;
            }else{
                res.json({
                    "mensagem": "Usuário cadastrado com sucesso"
                });
            }
        });
    }


}
