import { GovSearchComponent } from './gov-report/gov-search/gov-search.component';
import { SearchResultComponent } from './gov-report/gov-search/search-result/search-result.component';
import { ArchSearchReportComponent } from './arch-report/arch-search-report/arch-search-report.component';
import { ArchCheckReportListComponent } from './arch-report/arch-check-report/arch-check-report-list/arch-check-report-list.component';
import { ArchCheckReportComponent } from './arch-report/arch-check-report/arch-check-report.component';
import { ArchReportComponent } from './arch-report/arch-report.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { Page404Component } from './page404/page404.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchReport } from './model/searchreport';
import { ArchCheckReportDetailsComponent } from './arch-report/arch-check-report/arch-check-report-details/arch-check-report-details.component';
import { GovCheckComponent } from './gov-report/gov-check/gov-check.component';


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
    component: GovSearchComponent
  },

  {
    path: 'checkreport',
    component: GovCheckComponent

  },

  {
    path: 'archcheckreports',
    component: ArchCheckReportComponent,
    children: [
      {
        path: ':requestId', 
        component: ArchCheckReportDetailsComponent
      }
    ]
  },
  {
    path: 'archsearchreports',
    component: ArchSearchReportComponent
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
