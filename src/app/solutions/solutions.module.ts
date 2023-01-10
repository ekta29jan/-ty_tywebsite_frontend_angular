import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionsRoutingModule } from './solutions-routing.module';
import { CrowdBetaTestersComponent } from './crowd-beta-testers/crowd-beta-testers.component';
import { TestOptimizeComponent } from './test-optimize/test-optimize.component';


@NgModule({
  declarations: [CrowdBetaTestersComponent, TestOptimizeComponent],
  imports: [
    CommonModule,
    SolutionsRoutingModule
  ]
})
export class SolutionsModule { }
