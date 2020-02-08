import { ArchiveService } from './service/archive.service';
import { SearchService } from './service/search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { BsDatepickerModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmptyValuePipe } from './shared/empty-value.pipe';
import { ReportListPipe } from './shared/report-list.pipe';
import { VirtualAccountPipe } from './shared/virtual-account.pipe';
import { HomeComponent } from './home/home.component';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from "@angular/material";
import { Page404Component } from './page404/page404.component';
import { YesNoDirective } from './shared/yes-no.directive';
import { LineLightDirective } from './shared/line-light.directive';
import { ReportTypeAndResultTranslPipe } from './shared/report-type-and-result-transl.pipe';
import { ArchReportComponent } from './arch-report/arch-report.component';
import { ArchCheckReportComponent } from './arch-report/arch-check-report/arch-check-report.component';
import { ArchCheckReportDetailsComponent } from './arch-report/arch-check-report/arch-check-report-details/arch-check-report-details.component';
import { ArchCheckReportListComponent } from './arch-report/arch-check-report/arch-check-report-list/arch-check-report-list.component';
import { ArchSearchReportComponent } from './arch-report/arch-search-report/arch-search-report.component';
import { GovReportComponent } from './gov-report/gov-report.component';
import { GovSearchComponent } from './gov-report/gov-search/gov-search.component';
import { GovCheckComponent } from './gov-report/gov-check/gov-check.component';
import { SearchFormComponent } from './gov-report/gov-search/search-form/search-form.component';
import { SearchResultComponent } from './gov-report/gov-search/search-result/search-result.component';
import { CheckFormComponent } from './gov-report/gov-check/check-form/check-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyValuePipe,
    ReportListPipe,
    VirtualAccountPipe,
    HomeComponent,
    Page404Component,
    YesNoDirective,
    LineLightDirective,
    ReportTypeAndResultTranslPipe,
    ArchReportComponent,
    ArchCheckReportComponent,
    ArchCheckReportDetailsComponent,
    ArchCheckReportListComponent,
    ArchSearchReportComponent,
    GovReportComponent,
    GovSearchComponent,
    GovCheckComponent,
    SearchFormComponent,
    SearchResultComponent,
    CheckFormComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(), AlertModule.forRoot(),
    BrowserAnimationsModule, NoopAnimationsModule,
    HttpClientModule,

    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule

  ],
  exports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule
  ],
  providers: [SearchService, ArchiveService,
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
