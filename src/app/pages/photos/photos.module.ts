import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotosPageRoutingModule } from './photos-routing.module';

import { PhotosPage } from './photos.page';
import { BtnEmergencyComponent } from 'src/app/settings/components/btn-emergency/btn-emergency.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotosPageRoutingModule,
    BtnEmergencyComponent
  ],
  declarations: [PhotosPage]
})
export class PhotosPageModule {}
