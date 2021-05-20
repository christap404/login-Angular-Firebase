import { first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
//import { auth } from "firebase/app";
//import {User} from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable()

export class AuthService {

  //public user:User;

  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    }
    catch {
      console.log('error');
    }
  }


  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
    }

    catch {
      console.log('error')
    }
}

  async logout() {
    try {
      await this.afAuth.signOut();
    }
    catch {
      console.log('error')
    }
  }

  getCurrentUser() {
    try {
      return this.afAuth.authState.pipe(first()).toPromise();

    }
    catch {
      console.log('error')
    }
  }

}
