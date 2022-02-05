import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranslateNumPage } from './translate-num.page';

const routes: Routes = [
  {
    path: '',
    component: TranslateNumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranslateNumPageRoutingModule {}
