import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page'
import { BtnEmergencyComponent } from 'src/app/settings/components/btn-emergency/btn-emergency.component';
import { ImageModalComponent } from 'src/app/settings/components/image-modal/image-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    BtnEmergencyComponent,
    ImageModalComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
