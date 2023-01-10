import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CompanyComponent } from './components/company/company.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { MeetingComponent } from './contact-us/meeting/meeting.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 70]
};

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'about-us', component: CompanyComponent },
  { path: 'application-form', component: ApplicationFormComponent },
  {
    path: 'solutions',
    loadChildren: () => import('./solutions/solutions.module').then(m => m.SolutionsModule)
  },
  {
    path: 'development',
    loadChildren: () => import('./development/development.module').then(m => m.DevelopmentModule)
  },
  {
    path: 'industries',
    loadChildren: () => import('./industries/industries.module').then(m => m.IndustriesModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: 'digital-assurance',
    loadChildren: () => import('./digital-assurance/digital-assurance.module').then(m => m.DigitalAssuranceModule)
  },
  {
    path: 'core-qa',
    loadChildren: () => import('./core-qa/core-qa.module').then(m => m.CoreQaModule)
  },
  {
    path: 'strategic-qa',
    loadChildren: () => import('./strategic-qa/strategic-qa.module').then(m => m.StrategicQaModule)
  },
  {
    path: 'specialized-qa',
    loadChildren: () => import('./specialized-qa/specialized-qa.module').then(m => m.SpecializedQaModule)
  },
  {
    path: 'just-in-time-qa',
    loadChildren: () => import('./just-in-time-qa/just-in-time-qa.module').then(m => m.JustInTimeQaModule)
  },
  {
    path: 'case-studies',
    loadChildren: () => import('./case-studies/case-studies.module').then(m => m.CaseStudiesModule)
  },
  {
    path: 'careers',
    loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
