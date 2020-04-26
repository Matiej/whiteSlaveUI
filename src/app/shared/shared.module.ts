import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
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
import { YesNoDirective } from './yes-no.directive';
import { LineLightDirective } from './line-light.directive';
import { ReportTypeAndResultTranslPipe } from './report-type-and-result-transl.pipe';
import { EmptyValuePipe } from './empty-value.pipe';
import { ReportListPipe } from './report-list.pipe';
import { VirtualAccountPipe } from './virtual-account.pipe';
import { BsDatepickerModule, AlertModule } from 'ngx-bootstrap';

@NgModule({
    declarations: [
        YesNoDirective,
        LineLightDirective,
        ReportTypeAndResultTranslPipe,
        EmptyValuePipe,
        ReportListPipe,
        VirtualAccountPipe,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BsDatepickerModule.forRoot(), AlertModule.forRoot(), //to jest do daty aby ladnie sie wyswietlala
    ],
    exports: [
        YesNoDirective,
        LineLightDirective,
        ReportTypeAndResultTranslPipe,
        EmptyValuePipe,
        ReportListPipe,
        VirtualAccountPipe,
        FormsModule,
        ReactiveFormsModule,
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
        MatStepperModule,
        ReactiveFormsModule,
        BsDatepickerModule,
        AlertModule //to jest do daty aby ladnie sie wyswietlala
    ]
})

export class SharedModule {
}