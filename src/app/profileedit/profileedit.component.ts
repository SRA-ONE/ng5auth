import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
//import { Http, Headers,Response } from '@angular/http';
import{ ActivatedRoute,Router} from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.component.html',
  styleUrls: ['./profileedit.component.css']
})
export class ProfileeditComponent implements OnInit {
public userD={}
  constructor(private log: ServiceService,private _router: Router, private route: ActivatedRoute) { 
  	this.getprofileedit()}

  ngOnInit() {
  }
   getprofileedit(){
    var uid = localStorage.getItem('userid');
     debugger;
   return this.log.profileeditget(uid)
   .subscribe(
	    res=>{ 
	    	this.userD = res.json();
	      
	      alert("ok3");
	      console.log("ok3")
	      console.log(this.userD)
	    });
	  
  }
  public userD1;
 profileedit(){ 
 	 var uid = localStorage.getItem('userid');
 //this.userD1 = this.userD;
     debugger;
 return this.log.profileeditput(uid,this.userD)
   
  .subscribe(
    res=>{ 
    	this.userD = res.json();
    	 alert("ok3232");
    	console.log(this.userD);
      this._router.navigate(['/Userprofile'])
     
      console.log(res)
    });
   
}
}



 