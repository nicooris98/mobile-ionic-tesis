import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';


@Component({
  selector: 'image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
  imports: [IonicModule]
})
export class ImageModalComponent  implements OnInit {

  imageUrl: string = "assets/images/noperson.jpg"

  isDetected: boolean = false

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
