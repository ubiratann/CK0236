const express = require('express');

const usuarioController = require('./controllers/usuarioController');
const todoController = require('./controllers/todoController');
const rotas = express.Router();


//rotas de usuário
rotas.post('/login', usuarioController.loginUsuario);
rotas.put('/cadastrar', usuarioController.inserirUsuario);

//rotas referentes as atividades
rotas.put('/criarTodo', todoController.criarTodo);
rotas.get('/pesquisarTodos/:codigo_usuario', todoController.pesquisarTodos);
rotas.post('/executarTodo', todoController.executarTodo);
rotas.post('/pausarTodo', todoController.pausarTodo);
rotas.post('/concluirTodo', todoController.concluirTodo);
rotas.delete('/excluirTodo/:codigo_todo', todoController.excluirTodo);

module.exports=rotas;
