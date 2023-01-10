import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MobilityComponent } from './mobility/mobility.component';
import { CloudComponent } from './cloud/cloud.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'mobility', component: MobilityComponent },
      { path: 'cloud', component: CloudComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DigitalAssuranceRoutingModule { }
