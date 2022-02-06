import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YoutubeViewPageRoutingModule } from './youtube-view-routing.module';

import { YoutubeViewPage } from './youtube-view.page';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YouTubePlayerModule,
    YoutubeViewPageRoutingModule
  ],
  declarations: [YoutubeViewPage]
})
export class YoutubeViewPageModule {}
