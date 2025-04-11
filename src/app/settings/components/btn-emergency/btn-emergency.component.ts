import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'btn-emergency',
  templateUrl: './btn-emergency.component.html',
  styleUrls: ['./btn-emergency.component.scss'],
  imports: [IonicModule]
})
export class BtnEmergencyComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  callEmergency() {
    window.open('tel:911', '_system');
  }

}
