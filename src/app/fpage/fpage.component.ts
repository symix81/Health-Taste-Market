import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProductsService } from '../services/products.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-fpage',
  templateUrl: './fpage.component.html',
  styleUrls: ['./fpage.component.css']
})
export class FpageComponent implements OnInit {

  constructor(private prodSrv : ProductsService , private route : ActivatedRoute , private AuthServ : AuthService , private userService : UserService , private router : Router , private db : AngularFireDatabase) {}

  ngOnInit(): void {
    
  }
  save(data){
    this.AuthServ.user$.subscribe(user=>{
      if(user){
        if(data.guest==="true"){
          this.userService.save(user,true);
        }
        else{
          this.userService.save(user,false);
        }
        this.prodSrv.setUsername(user.displayName);
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigateByUrl(returnUrl);
      }  
    })
  }

}
