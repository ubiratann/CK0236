import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDeslogadoPageRoutingModule } from './home-deslogado-routing.module';

import { HomeDeslogadoPage } from './home-deslogado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDeslogadoPageRoutingModule
  ],
  declarations: [HomeDeslogadoPage]
})
export class HomeDeslogadoPageModule {}
