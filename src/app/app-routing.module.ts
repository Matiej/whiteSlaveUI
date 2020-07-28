import { UserComponent } from './user/user.component';
import { Page404Component } from './page404/page404.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  //lazy loading include - aby wylaczyc to trzebe importy porobic
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },

  {
    path: 'archcheckreports',
    loadChildren: './arch-report/arch-report.module#ArchCheckReportModule'
  },

  {
    path: 'archsearchreports',
    loadChildren: './arch-report/arch-report.module#ArchSearchReportModule'
  },

  {
    path: 'searchreport',
    loadChildren: './gov-report/gov-search/gov-search.module#GovSearchReportModule'
  },
  {
    path: 'checkreport',
    loadChildren: './gov-report/gov-check/gov-check.module#GovCheckReportModule'
  },
  {
    path: 'login',
    component: UserComponent
  },

  {
    path: '**',
    component: Page404Component
  }
];

//jak nie chcemy lazy loading to musimy sobie te moduły wrzucić w importy. 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),// preloading dociaga po kolei moduly. Fajnie by bylo zeby mozna wskazac, ktore ma dociagnac a ktore zostawic. 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
