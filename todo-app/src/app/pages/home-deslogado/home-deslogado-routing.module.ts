import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeDeslogadoPage } from './home-deslogado.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDeslogadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDeslogadoPageRoutingModule {}
