import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth'
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig) ,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
