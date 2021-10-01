import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private authServ:AuthService) { }
  canActivate():Observable<boolean>{
    return this.authServ.AppUser$.pipe(map((appUser:any)=>appUser.isAdmin));
  }
}