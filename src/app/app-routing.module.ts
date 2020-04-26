import { GovSearchComponent } from './gov-report/gov-search/gov-search.component';
import { Page404Component } from './page404/page404.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GovCheckComponent } from './gov-report/gov-check/gov-check.component';
import { ArchReportModule } from './arch-report/arch-report.module';
import { GovReportModule } from './gov-report/gov-report.module';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [
    ArchReportModule,
    GovReportModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
