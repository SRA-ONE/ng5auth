import { Component, OnInit } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import { ServiceService } from '../service.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-reportissue',
  templateUrl: './reportissue.component.html',
  styleUrls: ['./reportissue.component.css']
})
export class ReportissueComponent implements OnInit {
 report={}
 reportData;
formData={}
  constructor(private http: Http,private fileUploadService: ServiceService) { }

  ngOnInit() {
  }


    fileToUpload: File = null;
    handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
     //this.append = this.report;
  }
  fileToUpload1: File = null;
  handleFileInput1(files: FileList) {
  this.fileToUpload1 = files.item(0);
   //this.append = this.report;
}
fileToUpload2: File = null;
handleFileInput2(files: FileList) {
this.fileToUpload2 = files.item(0);
 //this.append = this.report;
}
fileToUpload3: File = null;
handleFileInput3(files: FileList) {
this.fileToUpload2 = files.item(0);
 //this.append = this.report;
}

reportissue(report) {
debugger;
     var uid = localStorage.getItem('userid');
     var data = new FormData(); 
     data.append('img1', this.fileToUpload, this.fileToUpload.name);
     data.append('img2', this.fileToUpload1, this.fileToUpload.name);
     data.append('img3', this.fileToUpload2, this.fileToUpload.name);
     data.append('img4', this.fileToUpload2, this.fileToUpload.name);
     data.append('vehicleNum',report.vehicleNum);
     data.append('offenceCategory',report.offenceCategory);
     data.append('vehicleType',report.vehicleType);
     data.append('location',report.location);
     data.append('description',report.description);
    this.fileUploadService.postFile(uid,data)
    .map((res: Response) => res.json())  
    .subscribe(data => {
      this.reportData = data
      alert("reportData");
      console.log(this.reportData);
      }, error => {
        console.log(error);
      });
  }
}
