
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent{

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Fotos', url: '/photos', icon: 'images' }
  ]

  public labels = ['Perfil']

  constructor(public authService: AuthService, private toastController: ToastController, private socket: Socket) {
    this.socket.connect()

    this.socket.fromEvent('message').subscribe(async(message) => {
      this.playAlarmSound()
      const toast = await this.toastController.create({
        message: "¡Persona Detectada!",
        duration: 1500,
        position: "top",
        color: "danger"
      })
      await toast.present()
    })
  }

  logout() {
    this.authService.logout()
  }

  // Función para reproducir el sonido
  playAlarmSound() {
    const audio = new Audio('assets/sounds/noti.mp3');
    audio.play();
  }
}
