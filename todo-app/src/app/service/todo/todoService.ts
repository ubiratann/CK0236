import { Todo } from 'src/app/models/todo';
import { HOST } from '../todo.api'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class TodoService{


  constructor(private http: HttpClient) {}

  async pesquisarAtividades(idUsuario:Number){
    return this.http.get(`${HOST}pesquisarTodos/${idUsuario}`)
    .toPromise()
    .catch((erro)=>{
      console.log(erro);
    });
  }

  async criarAtividade(atividade: Todo){
    return this.http.put(HOST+`criarTodo`, atividade)
    .toPromise()
    .catch((erro)=>{
      console.log(erro);
    });
  }

  async fazerAtividade(atividade: Todo){
    return this.http.post(`${HOST}executarTodo`, atividade)
    .toPromise()
    .catch((erro)=>{
      console.log(erro);
    });
  }

  async pausarAtividade(atividade: Todo){
    return this.http.post(`${HOST}pausarTodo`, atividade)
    .toPromise()
    .catch((erro)=>{
      console.log(erro);
    });
  }

  async removerAtividade(atividade: Todo){
    return this.http.delete(`${HOST}excluirTodo/${atividade.codigo_todo}`)
    .toPromise()
    .catch((erro)=>{
      console.log(erro);
    });
  }

  async concluirAtividade(atividade: Todo){
    return this.http.post(`${HOST}concluirTodo`, atividade)
    .toPromise()
    .catch((erro)=>{
      console.log(erro);
    });
  }



}
