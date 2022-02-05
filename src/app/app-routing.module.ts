import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'suma',
    loadChildren: () => import('./pages/sum/sum.module').then( m => m.SumPageModule)
  },
  {
    path: 'translate-num',
    loadChildren: () => import('./pages/translate-num/translate-num.module').then( m => m.TranslateNumPageModule)
  },
  {
    path: 'multiplication',
    loadChildren: () => import('./pages/multiplication/multiplication.module').then( m => m.MultiplicationPageModule)
  },
  {
    path: 'youtube-view',
    loadChildren: () => import('./pages/youtube-view/youtube-view.module').then( m => m.YoutubeViewPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
