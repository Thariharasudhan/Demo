import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { OtpScreenComponent } from './otp-screen/otp-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import { NgOtpInputModule } from 'ng-otp-input';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    CompanyDetailsComponent,
    OtpScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    SelectButtonModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    CheckboxModule,
    NgOtpInputModule,
    MessagesModule,
    MessageModule ,
    ToastModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
