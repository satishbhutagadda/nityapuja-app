import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormPageRoutingModule } from './special-puja-routing.module';
import { SpecialPujaPage } from './special-puja.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPageRoutingModule
  ],
  declarations: [SpecialPujaPage]
})
export class SpecialPujaPageModule {}
