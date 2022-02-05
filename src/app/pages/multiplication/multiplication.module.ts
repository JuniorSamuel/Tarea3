import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiplicationPageRoutingModule } from './multiplication-routing.module';

import { MultiplicationPage } from './multiplication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiplicationPageRoutingModule
  ],
  declarations: [MultiplicationPage]
})
export class MultiplicationPageModule {}
