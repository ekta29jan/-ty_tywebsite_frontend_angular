import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegressionComponent } from './regression/regression.component';
import { CompatibilityComponent } from './compatibility/compatibility.component';
import { UsabilityComponent } from './usability/usability.component';
import { UatComponent } from './uat/uat.component';
import { RouterModule, Routes } from '@angular/router';
import { ExploratoryComponent } from './exploratory/exploratory.component';
import { FistComponent } from './fist/fist.component';

const routes: Routes = [
  { path: 'regression', component: RegressionComponent },
  { path: 'compatibility', component: CompatibilityComponent },
  { path: 'usability', component: UsabilityComponent },
  { path: 'uat', component: UatComponent },
  { path: 'exploratory', component: ExploratoryComponent },
  { path: 'fist', component: FistComponent }
];

@NgModule({
  declarations: [
    RegressionComponent,
    CompatibilityComponent,
    UsabilityComponent,
    UatComponent,
    ExploratoryComponent,
    FistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreQaModule { }
