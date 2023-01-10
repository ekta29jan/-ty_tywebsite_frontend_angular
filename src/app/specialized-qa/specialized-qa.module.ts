import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutomationComponent } from '../specialized-qa/automation/automation.component';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from '../specialized-qa/security/security.component';
import { PerformanceComponent } from './performance/performance.component';
import { IotComponent } from './iot/iot.component';
import { ApplicationReengineeringComponent } from './application-reengineering/application-reengineering.component';
import { IotServicesComponent } from './iot-services/iot-services.component';
import { InfrastructureSupportComponent } from './infrastructure-support/infrastructure-support.component';
import { ApplicationSupportComponent } from './application-support/application-support.component';

const routes: Routes = [
  { path: 'managed-service', component: AutomationComponent },
  { path: 'support-services', component: SecurityComponent },
  { path: 'professional-services', component: PerformanceComponent },
  { path: 'industry-4.0', component: IotComponent },
  { path: 're-engineering', component: ApplicationReengineeringComponent },
  { path: 'iot-services', component: IotServicesComponent },
  { path: 'infrastructure-support', component:InfrastructureSupportComponent },
  { path: 'application-support', component:ApplicationSupportComponent },
]

@NgModule({
  declarations: [
    AutomationComponent,
    SecurityComponent,
    PerformanceComponent,
    IotComponent,
    ApplicationReengineeringComponent,
    IotServicesComponent,
    InfrastructureSupportComponent,
    ApplicationSupportComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SpecializedQaModule { }
