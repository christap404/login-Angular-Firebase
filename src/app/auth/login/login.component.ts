import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  
  constructor( private auuthSvc: AuthService, private router:Router) { }

  ngOnInit(): void {
    
  }

  async onLogin(){
    const{email, password} = this.loginForm.value;
    try {
      const login = await this.auuthSvc.login(email, password);
      if (login) {
        //Redireccionando a home
        this.router.navigate(['/home']);
      }
    } catch (error) {
      
    }
    
    
  }
}
