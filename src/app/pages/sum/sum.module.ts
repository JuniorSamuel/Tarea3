import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SumPageRoutingModule } from './sum-routing.module';

import { SumPage } from './sum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SumPageRoutingModule
  ],
  declarations: [SumPage]
})
export class SumPageModule {}
