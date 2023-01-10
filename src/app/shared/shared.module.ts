import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactusFormComponent } from '../components/home/contactus-form/contactus-form.component';
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";




@NgModule({
  declarations: [
    ContactusFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  exports:[
    ContactusFormComponent,
    CommonModule,
  ]
})
export class SharedModule { }
