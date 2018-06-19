import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private log: ServiceService,private _router: Router) {
    this.addminreportget();
   }
   adminreportget1;
   data1;
  ngOnInit() {
  }
  
  addminreportget(){
    //var userid =localStorage.getItem('userid');
        debugger;
      
     return this.log.admindashboard()
     .subscribe(
       data=>{
        debugger;
         this.adminreportget1 = data.json()
       
         console.log("......................................")
          console.log(this.adminreportget1);

       }
       )
       
   }
}
