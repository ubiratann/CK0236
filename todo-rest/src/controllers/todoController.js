const db = require('../database/database');

module.exports = {

    async criarTodo(req,res,next){
        let sql = `INSERT INTO todo VALUES (?,?,?,?,?,?,?);`;

        let parametros = [  null,
                        req.body.codigo_usuario,
                        req.body.titulo,
                        req.body.codigo_estado,
                        req.body.descricao,
                        req.body.data_criacao,
                        req.body.data_finalizacao,
                    ];

        db.run(sql,parametros,(erro,resultado)=>{
            if(erro){
                res.status(400).json({"codigo_erro" : erro.errno , "mensagem_erro": erro.message});
                return;
            }else{
                res.json({
                    "mensagem": "Todo cadastrado com sucesso"
                });
            }
        });

    },


    async excluirTodo(req,res,next){
        let sql = `DELTE FROM todo WHERE codigo_todo = ?`;
        let parametros = [req.params.codigo_todo]

        bd.run(sql,parametros,(erro,resultado)=>{
          if(erro){
            res.status(400).json({"codigo_erro" : erro.errno , "mensagem_erro": erro.message});
            return;
          }else{
            res.json({
              "mensagem_sucesso": `Todo de id: ${req.body.codigo_todo} foi excluído.`
            })
          }
        });
    },

    async pesquisarTodos(req,res,next){
        let sql = `SELECT * FROM todo WHERE codigo_usuario = ?`;

        let parametros = [req.params.codigo_usuario];

        db.all(sql,parametros,(erro,resultado)=>{
            if(erro){
              res.status(400).json({"codigo_erro" : erro.errno , "mensagem_erro": erro.message});
              return;
            }else{
                let lista_a_fazer = [];
                let lista_fazendo = [];
                let lista_concluidos= [];
                resultado.forEach((todo, i) => {
                  if(todo.codigo_estado == 1 || todo.codigo_estado == null) lista_a_fazer.push(todo);
                  if(todo.codigo_estado == 2) lista_fazendo.push(todo);
                  if(todo.codigo_estado == 3) lista_concluidos.push(todo);
                });

                res.json({
                  "mensagem_sucesso": "pesquisa realizada com sucesso.",
                    "lista_a_fazer": lista_a_fazer,
                    "lista_fazendo": lista_fazendo,
                    "lista_concluidos":lista_concluidos
                });
            }
        });
    },

    async executarTodo(req,res,next){
        let sql = `UPDATE todo SET codigo_estado = 2 WHERE codigo_todo= ?`;
        let parametros = [req.body.codigo_todo];

        db.run(sql,parametros,(erro,resultado)=>{
          if(erro){
            res.status(400).json({"codigo_erro" : erro.errno , "mensagem_erro": erro.message});
            return;
          }else{
            res.json({
              "mensagem_sucesso": `Execuntando tarefa de id ${req.body.codigo_todo}`
            });
          }
        });
    },


    async pausarTodo(req,res,next){
      let sql = `UPDATE todo SET codigo_estado = 1 WHERE codigo_todo= ?`;
      let parametros = [req.body.codigo_todo];

      db.run(sql,parametros,(erro,resultado)=>{
        if(erro){
          res.status(400).json({"codigo_erro" : erro.errno , "mensagem_erro": erro.message});
          return;
        }else{
          res.json({
            "mensagem_sucesso": `Tarefa de id ${req.body.codigo_todo} foi pausada`
          });
        }
      });
    },


    async concluirTodo(req,res,next){
      let sql = `UPDATE todo SET codigo_estado = 3 WHERE codigo_todo= ?`;
      let parametros = [req.body.codigo_todo];

      db.run(sql,parametros,(erro,resultado)=>{
        if(erro){
          res.status(400).json({"codigo_erro" : erro.errno , "mensagem_erro": erro.message});
          return;
        }else{
          res.json({
            "mensagem_sucesso": `Tarefa de id ${req.body.codigo_todo} concluída`
          });
        }
      });
    },

}
