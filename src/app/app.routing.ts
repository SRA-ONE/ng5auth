import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistorComponent } from './registor/registor.component';
import { LoginComponent } from './login/login.component';
import { AllusersComponent } from './allusers/allusers.component';


import { ReportissueComponent } from './reportissue/reportissue.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ProfileeditComponent } from './profileedit/profileedit.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ImageviewComponent } from './imageview/imageview.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminimageviewComponent } from './adminimageview/adminimageview.component';
const routes: Routes =[

	{
		path:"",
		redirectTo:'/login',
		pathMatch:'full'
	},
	{
		path: "allusers",
		component: AllusersComponent
	},
	{
		path: "login",
		component: LoginComponent
	},
	{
		path: "register",
		component: RegistorComponent
	},
	{
		path: "Report",
		component: ReportissueComponent
	},
	{
		path: "Userprofile",
		component: UserprofileComponent,
	},
	{
		path: "profileedit",
		component: ProfileeditComponent
	},
	{
		path: "dashboard",
		component: DasboardComponent
	},
	{
		path: "imageview/:imid",
		component: ImageviewComponent
	},
	{
		path: "Admindashboard",
		component: AdmindashboardComponent
	},
	{
		path:"Adminimageview/:imid1",
		component:AdminimageviewComponent
	}



];
@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})
export class AppRoutingModule {}