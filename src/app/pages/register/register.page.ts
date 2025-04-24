import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

  username: string = ''
  password: string = ''
  passwordRep: string = ''

  constructor(private authService: AuthService, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.username, this.password, this.passwordRep).subscribe(async res => {
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
    this.passwordRep = ""
  }

  goToLogin() {
    this.router.navigate(["/login"])
  }

}
