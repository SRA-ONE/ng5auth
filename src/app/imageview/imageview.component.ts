import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-imageview',
  templateUrl: './imageview.component.html',
  styleUrls: ['./imageview.component.css']
})
export class ImageviewComponent implements OnInit {
  imid;
  constructor(private log: ServiceService,private _router: Router, private route: ActivatedRoute) { 
    //this.imagegt(this.imid);
    this.imagegt(this.route.snapshot.params['imid']);
  }
  imageget1;
  public file1_data;
  ngOnInit() {
  }
  imagegt(imid){
       debugger;
     return this.log.imageget(imid)
     .subscribe(
       data=>{ 
         this.imageget1 = data
        
        console.log(this.imageget1.file1_data);
         alert("ok1");
       },
       )
   }
}
