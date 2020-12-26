import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/service/todo/todoService';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home-logado',
  templateUrl: './home-logado.page.html',
  styleUrls: ['./home-logado.page.scss'],
})
export class HomeLogadoPage implements OnInit {

  //atividade que vai ser usada para submit no banco
  atividade: Todo = new Todo();

  codigo_usuario: Number;
  //lista com as atividades renderizadas
  lista_a_fazer: Todo[] = new Array<Todo>();
  lista_fazendo: Todo[] = new Array<Todo>();
  lista_concluidos: Todo[] = new Array<Todo>();

  constructor(  private todoService : TodoService,
                private activatedRoute: ActivatedRoute,
                private loadingController: LoadingController) {
   }

  async ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.codigo_usuario = res.codigo_usuario;
    });
    this.codigo_usuario = 1;

    await this.atualizar();
  }

  async atualizar(){
    await this.iniciarCarregamento();
    let response: any = await this.todoService.pesquisarAtividades(this.codigo_usuario);
    this.lista_a_fazer = response.lista_a_fazer;
    this.lista_fazendo = response.lista_fazendo;
    this.lista_concluidos = response.lista_concluidos;
    await this.finalizarCarregamento();
  }

  converterData(data: Date){
      let d = new Date(data);
      data = d;
      return data.toLocaleDateString('pt-br');
  }

  async submitAtividade(){
    console.log(this.atividade);
    this.atividade.codigo_estado= 1;
    this.atividade.data_criacao = new Date(new Date().getDate());
    this.atividade.codigo_usuario =  this.codigo_usuario; //hard coded
    await this.todoService.criarAtividade(this.atividade);
    await this.atualizar();
  }

  async fazerAtividade(atividade:Todo){
    atividade.codigo_estado = 2;
    await this.todoService.fazerAtividade(atividade);
    await this.atualizar();
  }

  async pausarAtividade(atividade:Todo){
    atividade.codigo_estado = 1;
    await this.todoService.pausarAtividade(atividade);
    await this.atualizar();
  }

  async concluirAtividade(atividade: Todo){
    atividade.codigo_estado = 3;
    atividade.data_finalizacao = new Date(new Date().getDate());

    await this.todoService.concluirAtividade(atividade);
    await this.atualizar();
  }

  async excluirAtividade(atividade: Todo){
    await this.todoService.removerAtividade(atividade);
    await this.atualizar();
  }

  async iniciarCarregamento() {
    const carregando = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Recarregando',
    });
    await carregando.present();

  }

  async finalizarCarregamento() {
    const loading = await this.loadingController.dismiss();
  }

}
