import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute,Router} from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-adminimageview',
  templateUrl: './adminimageview.component.html',
  styleUrls: ['./adminimageview.component.css']
})
export class AdminimageviewComponent implements OnInit {
  imid;
  constructor(private log: ServiceService,private _router: Router, private route: ActivatedRoute) { 
    this.adminimg(this.route.snapshot.params['imid1']);
  }

  ngOnInit() {
  }
  adminimg1
  data;
  adminimg(imid1){
   
     return this.log.adminimageview(imid1)
     .subscribe(
       data=>{ 
         this.adminimg1 = data.json()
        
         console.log(this.adminimg1);
       },
      // err => this.errorMsg = err
       )
   }
}
