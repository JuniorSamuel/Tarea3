import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YoutubeViewPage } from './youtube-view.page';

const routes: Routes = [
  {
    path: '',
    component: YoutubeViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeViewPageRoutingModule {}
