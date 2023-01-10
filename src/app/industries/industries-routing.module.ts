import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankingComponent } from './banking/banking.component';
import { EducationComponent } from './education/education.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { MediaEntertainmentComponent } from './media-entertainment/media-entertainment.component';
import { RetailEcommerceComponent } from './retail-ecommerce/retail-ecommerce.component';
import { EnergyUtilitiesComponent } from './energy-utilities/energy-utilities.component';
import { CommunicationsComponent } from './communications/communications.component';


const routes: Routes = [
  { path: 'banking', component: BankingComponent},
  { path: 'education', component: EducationComponent},
  { path: 'insurance', component: InsuranceComponent},
  { path: 'retail', component: MediaEntertainmentComponent},
  { path: 'retail-ecommerce', component: RetailEcommerceComponent},
  { path: 'health-care', component: EnergyUtilitiesComponent },
  { path: 'telecom', component: CommunicationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustriesRoutingModule { }
