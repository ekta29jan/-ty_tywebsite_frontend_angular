import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrowdBetaTestersComponent } from './crowd-beta-testers/crowd-beta-testers.component';
import { TestOptimizeComponent } from './test-optimize/test-optimize.component';


const routes: Routes = [
  { path: 'crowd-beta-testers', component: CrowdBetaTestersComponent },
  { path: 'test-optimize', component: TestOptimizeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionsRoutingModule { }
