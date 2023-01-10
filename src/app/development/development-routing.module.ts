import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path: 'software-development', component: SoftwareDevelopmentComponent },
  { path: 'datascience', component: DatascienceMachinelearningComponent },
  { path: 'devops', component: DevopsComponent },
  { path: 'mobile-app-development', component: MobileAppDevelopmentComponent },
  { path: 'web-solution', component: WebSolutionComponent },
  { path: 'cloud-solution', component: CloudSolutionComponent },
  { path: 'eCommerce', component: EcommerceDevelopmentComponent },
  { path: 'middleware-integration', component: MiddlewareIntegrationComponent },
  { path: 'migration-and-re-engineering', component: ReEngineeringMigrationComponent },
  { path: 'full-stack-development', component: FullStackDevelopmentComponent },
  { path: 'it-consulting', component: ItConsultingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopmentRoutingModule { }
