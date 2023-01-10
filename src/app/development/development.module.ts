import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopmentRoutingModule } from './development-routing.module';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { DatascienceMachinelearningComponent } from './datascience-machinelearning/datascience-machinelearning.component';
import { DevopsComponent } from './devops/devops.component';
import { MobileAppDevelopmentComponent } from './mobile-app-development/mobile-app-development.component';
import { WebSolutionComponent } from './web-solution/web-solution.component';
import { CloudSolutionComponent } from './cloud-solution/cloud-solution.component';
import { EcommerceDevelopmentComponent } from './ecommerce-development/ecommerce-development.component';
import { MiddlewareIntegrationComponent } from './middleware-integration/middleware-integration.component';
import { ReEngineeringMigrationComponent } from './re-engineering-migration/re-engineering-migration.component';
import { FullStackDevelopmentComponent } from './full-stack-development/full-stack-development.component';
import { ItConsultingComponent } from './it-consulting/it-consulting.component';


@NgModule({
  declarations: [
    SoftwareDevelopmentComponent,
    DatascienceMachinelearningComponent,
    DevopsComponent,
    MobileAppDevelopmentComponent,
    WebSolutionComponent,
    CloudSolutionComponent,
    EcommerceDevelopmentComponent,
    MiddlewareIntegrationComponent,
    ReEngineeringMigrationComponent,
    FullStackDevelopmentComponent,
    ItConsultingComponent
  ],
  imports: [
    CommonModule,
    DevelopmentRoutingModule
  ]
})
export class DevelopmentModule { }
