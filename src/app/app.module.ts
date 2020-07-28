import { UserService } from './service/user.service';
import { UserComponent } from './user/user.component';
import { GovSearchReportRoutingModule } from './gov-report/gov-search/gov-serach.routing.module';
import { GovCheckReportRoutingModule } from './gov-report/gov-check/gov.check.routing.module';
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
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import { Page404Component } from './page404/page404.component';
import localePl from '@angular/common/locales/pl';
import { SharedModule } from './shared/shared.module';
import { RegisterFormComponent } from './user/register-form/register-form.component';

//lokalna krajowa data
registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    UserComponent,
    RegisterFormComponent
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
    { provide: LOCALE_ID, useValue: 'pl-PL' },  // to jest ta data wlasnie co wyzej  aby PL bylo. Chyba
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
