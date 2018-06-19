import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

  constructor(private log: ServiceService,private _router: Router) { 
    this.reportget();
  }
  reportget1;
  ngOnInit() {
  }

reportget(){
  var userid =localStorage.getItem('userid');
      debugger;
   return this.log.dashboard(userid)
 
   .subscribe(
     data=>{ 
       this.reportget1 = data.json()
       // this._router.navigate(['/Report'])
       alert("ok1");
       console.log(this.reportget1)
     },
    // err => this.errorMsg = err
     )
 }
}