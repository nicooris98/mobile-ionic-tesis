import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  username: string = ''
  password: string = ''

  constructor(private authService: AuthService, private toastController: ToastController) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(async res => {
      const toast = await this.toastController.create({
        message: "Permiso concedido",
        duration: 1500,
        position: "top",
        color: "success"
      });

      await toast.present()
    }, async err => {
      const toast = await this.toastController.create({
        message: err.error.error ?? "Error al iniciar sesión",
        duration: 1500,
        position: "top",
        color: "danger"
      });

      await toast.present()
    })
    this.username = ""
    this.password = ""
  }

}
