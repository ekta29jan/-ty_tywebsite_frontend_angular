import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobilityComponent } from './mobility/mobility.component';
import { DigitalAssuranceRoutingModule } from './digital-assurance-routing.module';
import { CloudComponent } from './cloud/cloud.component';

@NgModule({
  declarations: [MobilityComponent, CloudComponent],
  imports: [
    CommonModule,
    DigitalAssuranceRoutingModule
  ]
})
export class DigitalAssuranceModule { }
