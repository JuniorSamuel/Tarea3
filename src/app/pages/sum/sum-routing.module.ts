import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SumPage } from './sum.page';

const routes: Routes = [
  {
    path: '',
    component: SumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SumPageRoutingModule {}
