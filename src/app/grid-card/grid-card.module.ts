import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridCardPageRoutingModule } from './grid-card-routing.module';

import { GridCardPage } from './grid-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridCardPageRoutingModule
  ],
  declarations: [GridCardPage]
})
export class GridCardPageModule {}
