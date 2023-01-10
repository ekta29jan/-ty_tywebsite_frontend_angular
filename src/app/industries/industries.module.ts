import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustriesRoutingModule } from './industries-routing.module';
import { RetailEcommerceComponent } from './retail-ecommerce/retail-ecommerce.component';
import { MediaEntertainmentComponent } from './media-entertainment/media-entertainment.component';
import { BankingComponent } from './banking/banking.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { EducationComponent } from './education/education.component';
import { EnergyUtilitiesComponent } from './energy-utilities/energy-utilities.component';
import { CommunicationsComponent } from './communications/communications.component';


@NgModule({
  declarations: [RetailEcommerceComponent, MediaEntertainmentComponent, BankingComponent, InsuranceComponent, EducationComponent, EnergyUtilitiesComponent, CommunicationsComponent],
  imports: [
    CommonModule,
    IndustriesRoutingModule
  ]
})
export class IndustriesModule { }
