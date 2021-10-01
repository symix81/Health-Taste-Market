import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$: any;
  data;
  constructor(private db: AngularFireDatabase) {}
   save(user: firebase.default.User,data : boolean) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
      isAdmin: Boolean(data),
    })
    this.data=data;
    this.db.list('/suppliers/'+user.displayName).set('name',user.displayName);
    this.db.list('/suppliers/'+user.displayName).set('email',user.email);
  }


  getUser(uid: string) {
    return this.db.object('/users/' + uid)
  }

}