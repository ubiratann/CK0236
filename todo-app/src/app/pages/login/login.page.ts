import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login/loginService'
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: String;
  senha: String;
  constructor(  private loginService: LoginService,
                private router: Router,
                private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async logar(){

    if(this.usuario != undefined && this.senha != undefined) {
      let response :any = await this.loginService.login(this.usuario, this.senha);
      if(response.autenticado){
          this.router.navigate(['/home'],{
            queryParams:{
              codigo_usuario: response.codigo_usuario
            }
          });
      }

    }else{
      const alerta = await this.alertController.create({
      header: 'Erro',
      message: 'Preencha todos os campos para efetuar login !!',
      buttons: ['OK']
    });

    await alerta.present();
    }
  }



}
