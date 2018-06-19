import { Component, OnInit } from '@angular/core';
//import { AuthserviceService} from '../authservice.service';
//import { Http, Headers,Response } from '@angular/http';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    login={}
    public user;
  constructor(private log: ServiceService,private _router: Router) { }
  public errorMsg ={};
  ngOnInit() {
  }
 loginuser(login){
     debugger;
  var credentials = "username=" + login.username + "&password=" + login.password;
  this.log.login(credentials)  
  .subscribe(
    res=>{
      debugger;
      this.user = res.json();
      // if(res.status == 200){
      debugger;
      alert('ok........');
      
       this._router.navigate(['/allusers'])
         console.log(this.user)
         //console.log(this.user.user.id)
        localStorage.setItem('userid', this.user.user.id)
      // }
    })
    ;   
}

}
