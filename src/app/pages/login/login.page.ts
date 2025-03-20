import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    if (!this.authService.login(this.username, this.password)) {
      this.errorMessage = 'Credenciales incorrectas';
    }
  }

}
