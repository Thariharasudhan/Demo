import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { OtpScreenComponent } from './otp-screen/otp-screen.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

const routes: Routes = [
  { path: '', component: PersonalDetailsComponent },
  { path: 'Personal', component: PersonalDetailsComponent },
  { path: 'company', component: CompanyDetailsComponent },
  { path: 'otp', component: OtpScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
