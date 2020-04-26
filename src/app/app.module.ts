import { CheckService } from './service/check.service';
import { ArchiveService } from './service/archive.service';
import { SearchService } from './service/search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import { Page404Component } from './page404/page404.component';
import localePl from '@angular/common/locales/pl';
import { SharedModule } from './shared/shared.module';
import { ArchReportRoutingModule } from './arch-report/arch-report.routing.module';
import { GovReportRoutingModule } from './gov-report/gov-report.routing.module';

//lokalna krajowa data
registerLocaleData(localePl); 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatIconModule,
    SharedModule,
    ArchReportRoutingModule,
    GovReportRoutingModule
  ],
  exports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatIconModule,
  ],
  providers: [
    SearchService,
    ArchiveService,
    CheckService,
    DatePipe,
    {provide: LOCALE_ID, useValue: 'pl-PL'} // to jest ta data wlasnie co wyzej  aby PL bylo. Chyba
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
