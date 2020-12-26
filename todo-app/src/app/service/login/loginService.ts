import { Todo } from 'src/app/models/todo';
import { HOST } from '../todo.api'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class LoginService{
  constructor(public http: HttpClient) {}


  async login(nome_usuario: String, senha: String){
    return this.http.post(HOST+`login`,{nome_usuario: nome_usuario, senha: senha},{})
    .toPromise()
    .catch(erro => alert(erro));
  }

  async cadastrar(nome_usuario: String, senha: String){
    return this.http.post(HOST+`cadastrar`,{nome_usuario: nome_usuario, senha: senha},{})
    .toPromise()
    .catch(erro => alert(erro));
  }

}
