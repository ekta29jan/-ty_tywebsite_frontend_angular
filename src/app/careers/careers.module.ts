import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersComponent } from './careers/careers.component';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { CareerDetailsComponent } from './career-details/career-details.component';
import { MeetingComponent } from '../contact-us/meeting/meeting.component';

@NgModule({
  declarations: [CareersComponent, CareerDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CareersComponent,
      },
      {
        path: 'career-details',
        component: CareerDetailsComponent,
      },
    ]),
    MatExpansionModule,
  ],
})
export class CareersModule {}
