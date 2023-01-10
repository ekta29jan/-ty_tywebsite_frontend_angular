import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestFactoryComponent } from './test-factory/test-factory.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'test-factory', component: TestFactoryComponent }
]

@NgModule({
  declarations: [TestFactoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class JustInTimeQaModule { }
