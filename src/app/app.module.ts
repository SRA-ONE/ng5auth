import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
//import { AuthserviceService} from './authservice.service';
import { AppComponent } from './app.component';
import { RegistorComponent } from './registor/registor.component';
import { LoginComponent } from './login/login.component';
//import { EventsComponent } from './events/events.component';
//import { SpecialEventsComponent } from './special-events/special-events.component';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { ReportissueComponent } from './reportissue/reportissue.component';
import { AllusersComponent } from './allusers/allusers.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HeaderComponent } from './header/header.component';
import { ImageUploadModule } from "angular2-image-upload";
import { ProfileeditComponent } from './profileedit/profileedit.component';
import { ServiceService } from './service.service';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ImageviewComponent } from './imageview/imageview.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminimageviewComponent } from './adminimageview/adminimageview.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistorComponent,
    LoginComponent,
    //EventsComponent,
    //SpecialEventsComponent,
    ReportissueComponent,
    AllusersComponent,
    UserprofileComponent,
    HeaderComponent,
    ProfileeditComponent,
    DasboardComponent,
    ImageviewComponent,
    AdmindashboardComponent,
    AdminimageviewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HttpClientModule,
    FormsModule,
    HttpModule,
    ImageUploadModule.forRoot(),
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
