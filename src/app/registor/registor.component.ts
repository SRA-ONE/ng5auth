import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Http, Headers,Response } from '@angular/http';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-registor',
  templateUrl: './registor.component.html',
  styleUrls: ['./registor.component.css']
})
export class RegistorComponent implements OnInit {
 registorUserData={}
  constructor(private reg: ServiceService,private _router: Router) { }

  ngOnInit() {
  }  
   rigesteruser(registorUserData){ 
     debugger;
   this.reg.registration(registorUserData)
  .subscribe(
    res=>{ 
      this._router.navigate(['/login'])
      alert("ok");
      console.log(res)
    });
   // err => this.errorMsg = err)
}
 
}
