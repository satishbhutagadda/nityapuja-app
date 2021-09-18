import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialPujaPage } from './special-puja.page';


const routes: Routes = [
  {
    path: '',
    component: SpecialPujaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPageRoutingModule {}
