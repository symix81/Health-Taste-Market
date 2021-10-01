import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import firebase from 'firebase/app'
import { UserInfo } from './userInfo';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user$ : Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth , private authSvr : UserService , private router : Router) {
      this.user$ = afAuth.authState;
  }

   login(){
   this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
   this.router.navigateByUrl('fpage');
  }
  
  logout(){

    this.afAuth.signOut();
  }
  get AppUser$(): Observable<UserInfo> {
    return this.user$.pipe(
      switchMap(user => user
        ? this.authSvr.getUser(user.uid).valueChanges()
        : of(null)
      )
    )
  }
}
