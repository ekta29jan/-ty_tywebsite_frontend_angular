import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcoeComponent } from './tcoe/tcoe.component';
import { RouterModule, Routes } from '@angular/router';
import { ScaledAgileSafeComponent } from './scaled-agile-safe/scaled-agile-safe.component';
import { FullTestLifeCycleComponent } from './full-test-life-cycle/full-test-life-cycle.component';
import { ConsultingAdvisoryComponent } from './consulting-advisory/consulting-advisory.component';
import { DevopsComponent } from './devops/devops.component';

const routes: Routes = [
  { path: 'tcoe', component: TcoeComponent },
  { path: 'scaled-agile-safe', component: ScaledAgileSafeComponent },
  { path: 'full-test-life-cycle', component: FullTestLifeCycleComponent },
  { path: 'technology', component: ConsultingAdvisoryComponent },
  { path: 'devops', component: DevopsComponent }
]

@NgModule({
  declarations: [
    TcoeComponent,
    ScaledAgileSafeComponent,
    FullTestLifeCycleComponent,
    ConsultingAdvisoryComponent,
    DevopsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StrategicQaModule { }
