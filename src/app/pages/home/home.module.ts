import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page'
import { BtnEmergencyComponent } from 'src/app/settings/components/btn-emergency/btn-emergency.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    BtnEmergencyComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
