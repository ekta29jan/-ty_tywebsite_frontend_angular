import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OnHoverDirective } from './shared/on-hover.directive';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { CompanyComponent } from './components/company/company.component';
import { JobComponent } from './job/job.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { CaseStudiesModule } from './case-studies/case-studies.module';
import { HttpClientModule } from '@angular/common/http';
// import { RecaptchaFormsModule, RecaptchaModule } from "ng-recaptcha";
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";
import { MeetingComponent } from './contact-us/meeting/meeting.component';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    OnHoverDirective,
    LoadingSpinnerComponent,
    CompanyComponent,
    JobComponent,
    ApplicationFormComponent,
    MeetingComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    FormsModule,
   SharedModule,
   CaseStudiesModule,
   HttpClientModule,
   RecaptchaModule,
   RecaptchaFormsModule,
   MatDatepickerModule,
   MatCardModule,
   MatNativeDateModule


  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
