import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'grid-card',
    loadChildren: () => import('./grid-card/grid-card.module').then( m => m.GridCardPageModule)
  },
  {
    path: 'multiple-choice',
    loadChildren: () => import('./multiple-choice/multiple-choice.module').then( m => m.MultipleChoicePageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./special-puja/special-puja.module').then( m => m.SpecialPujaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
