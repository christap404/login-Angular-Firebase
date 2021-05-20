import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService],
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authSvc: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  async onRegister() {
    const { email, password } = this.registerForm.value;
    try {
      const register = await this.authSvc.register(email, password);
      if (register) {
        this.router.navigate(['/home'])
      }
    } catch (error) {

    }

  }

}
