import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService],
  
})
export class NavbarComponent  {

  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService) { }

  onLogout(){
    this.authSvc.logout();
  }
}
