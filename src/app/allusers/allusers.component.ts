import { Component, OnInit } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import{ ActivatedRoute,Router} from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  constructor(private log: ServiceService,private _router: Router, private route: ActivatedRoute) { 
  this.getuser()
  }
 public empList;
  ngOnInit() {
  }
     getuser(){
     debugger;
      return this.log.allusers()
      .subscribe(
        data=>{ 
          this.empList = data.json()
          alert("ok1");
          console.log(data)
        },
 
    )
}

}
