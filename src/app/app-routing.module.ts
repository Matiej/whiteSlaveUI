import { ArchCheckReponseReportComponent } from './arch-check-reponse-report/arch-check-reponse-report.component';
import { Page404Component } from './page404/page404.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchReport } from './model/searchreport';
import { SearchReportComponent } from './search-report/search-report.component';


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
    path: 'searchreport',
    component: SearchReportComponent
  },
  {
    path: 'archCheckReports',
    component: ArchCheckReponseReportComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
