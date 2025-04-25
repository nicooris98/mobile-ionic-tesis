import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageAPI } from 'src/app/models/image-api.model';
import { ImageService } from 'src/app/services/image.service';
import { ImageModalComponent } from 'src/app/settings/components/image-modal/image-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  imageUrls: ImageAPI[] = [];

  mockImageAPI: ImageAPI = {
    filename: "test.jpg",
    personDetected: true,
    timestamp: Date.now().toString(),
    url: "src\assets\images\noperson.jpg"
  }

  constructor(private imageService: ImageService, private modalCtrl: ModalController) { }

  ngOnInit() {
    // Solicitar las URLs de las últimas imágenes
    this.imageService.getLatestImages().subscribe(response => {
      this.imageUrls = response
    },
  err => {
    console.log(err)
    this.imageUrls = [this.mockImageAPI]
  });
  }

  formatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Formato local automático
  }

  async openModal(image: string, personDetected: boolean) {
    const modal = await this.modalCtrl.create({
      component: ImageModalComponent,
      componentProps: {
        imageUrl: image,
        isDetected: personDetected
      }
    });
    await modal.present();
  }

}
