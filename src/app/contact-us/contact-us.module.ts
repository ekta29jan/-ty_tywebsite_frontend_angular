import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalPresenceComponent } from './global-presence/global-presence.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha'
import { SharedModule } from '../shared/shared.module';
import { MeetingComponent } from './meeting/meeting.component';

@NgModule({
  declarations: [GlobalPresenceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'global-presence', component: GlobalPresenceComponent },
      { path: 'meeting', component: MeetingComponent }
    ]),
    FormsModule,
    RecaptchaModule,
    SharedModule
  ]
})
export class ContactUsModule { }
