import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridCardPage } from './grid-card.page';

const routes: Routes = [
  {
    path: '',
    component: GridCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridCardPageRoutingModule {}
