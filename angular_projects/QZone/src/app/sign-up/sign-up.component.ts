import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  showLogin: boolean = false;
  authError: string = "you have loged-in"
  signUp(data: any) {

  }


  LogIn(data: any) {
    this.showLogin = !this.showLogin;
  }
  openLogin() {
    this.showLogin = !this.showLogin;
  }


}
