import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';  
import { Router } from '@angular/router'; 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http, Headers,Response } from '@angular/http';
import {HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/observable/throw';
@Injectable()
export class ServiceService {

  constructor(private _http: Http) { }

  postFile(id,fileToUpload){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
  	debugger;
    return this._http.post("/rest/report/addReport/"+id,fileToUpload,{headers: undefined})
        .catch(this.errorHandler);
}
registration(registorUserData){
  debugger;
  return this._http.post("rest/user/registration",registorUserData)
  .catch(this.errorHandler);
}
login(login){
  var headers = new Headers();
  debugger;
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this._http.post("rest/user/authenticate",login, {headers: headers})
  .catch(this.errorHandler);
}
dashboard(id){
  return this._http.get("rest/report/getDashboardDetailsByUserId/"+id)
  .catch(this.errorHandler);
}
imageget(id){
  return this._http.get("rest/report/getImageDetailsbyReportId/"+id)
  .catch(this.errorHandler);
}
admindashboard(){

  return this._http.get("rest/admin/reports_dashboard/2/5")
  .catch(this.errorHandler);
}
adminimageview(id){
   return this._http.get("rest/report/getImageDetailsbyReportId/"+id)
   .catch(this.errorHandler);
}
userProfile(uid){
  return this._http.get("rest/user/getUserByPrimeryKey/"+uid)
  .catch(this.errorHandler);  
}
profileeditget(pid){
  return this._http.get("rest/user/getUserByPrimeryKey/"+pid)
  .catch(this.errorHandler);
}
profileeditput(uid,used){
  return this._http.put("rest/user/getUserByPrimeryKey/"+uid,used)
  .catch(this.errorHandler);
}
allusers(){
  return this._http.get("rest/user/allUsers")
  .catch(this.errorHandler);
}
errorHandler(error: HttpErrorResponse){
  return Observable.throw(error.message || "Server Error");
}
}

