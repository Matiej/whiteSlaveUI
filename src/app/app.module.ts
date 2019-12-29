import { SearchService } from './service/search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchReportComponent } from './search-report/search-report.component';
import { ResultSearchComponent } from './search-report/result-search/result-search.component';
import { FormSearchComponent } from './search-report/form-search/form-search.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SearchReportComponent,
    ResultSearchComponent,
    FormSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(), AlertModule.forRoot(),
    BrowserAnimationsModule,NoopAnimationsModule
  ],
  providers: [SearchService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
