const test = require('tape');
const supertest = require('supertest');
const server = require('../server');

test('POST /loginUsuario', (t)=>{
  supertest(server)
    .post({"nome_usuario": "usertest1", "senha": "senhateste"})
    .expect('Content-Type', /json/)
    .expect(200)
    .end((erro, res)=>{
      console.log('\n\n\n\n\n')
      console.log(erro)
      console.log('\n\n\n\n\n')
      t.error(erro,'erro')
      t.assert(res.body.autenticado === true, "Usuario logado")
    })
});
