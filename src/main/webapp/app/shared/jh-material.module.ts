import {NgModule} from '@angular/core';
import {
    MatAutocompleteModule,
    MatButtonModule, MatButtonToggleModule, MatCardModule,
    MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule,
    MatFormFieldModule, MatGridListModule, MatIconModule,
    MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSnackBarModule, MatTabsModule, MatTooltipModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatTabsModule,
        MatDialogModule,
        MatChipsModule,
        MatSelectModule,
        MatProgressBarModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatGridListModule,
        MatExpansionModule,
        MatAutocompleteModule,
        MatRadioModule,
        MatListModule,
        MatIconModule],
    exports: [MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatTabsModule,
        MatDialogModule,
        MatChipsModule,
        MatSelectModule,
        MatProgressBarModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatGridListModule,
        MatExpansionModule,
        MatAutocompleteModule,
        MatRadioModule,
        MatListModule,
        MatIconModule],
})
export class JhMaterialModule {
}