import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelecomComponent } from './telecom/telecom.component';
import { RouterModule } from '@angular/router';
import { RetailComponent } from './retail/retail.component';
import { DevopsComponent } from './devops/devops.component';
import { SalesForceComponent } from './sales-force/sales-force.component';
import { HealthcareOrganisationComponent } from './healthcare-organisation/healthcare-organisation.component';
import { TechnologyComponent } from './technology/technology.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { EducationComponent } from './education/education.component';
import { BankingComponent } from './banking/banking.component';
import { TechnologyDvmsComponent } from './technology-dvms/technology-dvms.component';



@NgModule({
  declarations: [TelecomComponent, RetailComponent, DevopsComponent, SalesForceComponent, HealthcareOrganisationComponent, TechnologyComponent, ECommerceComponent, EducationComponent, BankingComponent, TechnologyDvmsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'telecom', component: TelecomComponent },
      { path: 'retail', component: RetailComponent },
      { path: 'devops', component: DevopsComponent },
      { path: 'salesforce', component: SalesForceComponent },
      { path: 'healthcare', component: HealthcareOrganisationComponent },
      { path: 'technology', component: TechnologyComponent },
      { path: 'e-commerce', component:ECommerceComponent },
      { path: 'education', component:EducationComponent },
      { path: 'banking', component:BankingComponent },
      { path: 'tech-dvms', component:TechnologyDvmsComponent },
    ])
  ]
})
export class CaseStudiesModule { }
