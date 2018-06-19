import { Component, OnInit } from '@angular/core';
// import { Http, Headers,Response } from '@angular/http';
import{ Router} from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private log: ServiceService,private _router: Router) {
    this.getuserprofile();
    }
    userD ={}
  ngOnInit() {
  }
 getuserprofile(){
    var uid = localStorage.getItem('userid');
     debugger;
   return this.log.userProfile(uid)
   .subscribe(
	    res=>{ 
	    	this.userD = res.json()
        alert("User profile");
	      console.log(res)
	    });	   
	}
}


