import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLogadoPage } from './home-logado.page';

const routes: Routes = [
  {
    path: '',
    component: HomeLogadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeLogadoPageRoutingModule {}
