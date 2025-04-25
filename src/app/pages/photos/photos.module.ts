import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotosPageRoutingModule } from './photos-routing.module';

import { PhotosPage } from './photos.page';
import { BtnEmergencyComponent } from 'src/app/settings/components/btn-emergency/btn-emergency.component';
import { ImageModalComponent } from 'src/app/settings/components/image-modal/image-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotosPageRoutingModule,
    BtnEmergencyComponent,
    ImageModalComponent
  ],
  declarations: [PhotosPage]
})
export class PhotosPageModule {}
