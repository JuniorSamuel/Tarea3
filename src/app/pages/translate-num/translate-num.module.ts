import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateNumPageRoutingModule } from './translate-num-routing.module';

import { TranslateNumPage } from './translate-num.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateNumPageRoutingModule
  ],
  declarations: [TranslateNumPage]
})
export class TranslateNumPageModule {}
