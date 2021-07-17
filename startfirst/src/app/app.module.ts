

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


//import {DragDropModule} from '@angular/cdk/drag-drop';
/******************************/
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
/******************************/



//import {MatGridListModule} from '@angular/material/grid-list';
//
//import {MatButtonModule} from '@angular/material/button';
//import {MatButtonToggleModule} from '@angular/material/button-toggle';
//import {MatCardModule} from '@angular/material/card';
//import {MatCheckboxModule} from '@angular/material/checkbox';
//import {MatChipsModule} from '@angular/material/chips';
//
////date pickup
//import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatInputModule} from '@angular/material/input';
//import {MatDatepickerModule} from '@angular/material/datepicker';
//import {MatNativeDateModule} from '@angular/material/core';
//
////Dialog
//import {MatDialogModule} from '@angular/material/dialog';
//import {MatListModule} from '@angular/material/list';
//import {MatIconModule} from '@angular/material/icon';
//
//
//
//
//import {MatSliderModule} from '@angular/material/slider';

import { CheckboxOverviewExampleComponent } from './checkbox-overview-example/checkbox-overview-example.component';
import { CardFancyExampleComponent } from './card-fancy-example/card-fancy-example.component';
import { ChipsDragDropExampleComponent } from './chips-drag-drop-example/chips-drag-drop-example.component';
import { DateRangePickerFormsExampleComponent } from './date-range-picker-forms-example/date-range-picker-forms-example.component';
import { DialogOverviewExampleComponent, DialogOverviewExampleDialog } from './dialog-overview-example/dialog-overview-example.component';
import { DividerOverviewExampleComponent } from './divider-overview-example/divider-overview-example.component';
import { ExpansionExpandCollapseAllExampleComponent } from './expansion-expand-collapse-all-example/expansion-expand-collapse-all-example.component';
import { FormFieldAppearanceExampleComponent } from './form-field-appearance-example/form-field-appearance-example.component';
import { GridListDynamicExampleComponent } from './grid-list-dynamic-example/grid-list-dynamic-example.component';
import { InputFormExampleComponent } from './input-form-example/input-form-example.component';
import { ListSelectionExampleComponent } from './list-selection-example/list-selection-example.component';
import { ListSingleSelectionExampleComponent } from './list-single-selection-example/list-single-selection-example.component';
import { MenuPositionExampleComponent } from './menu-position-example/menu-position-example.component';
import { SidenavAutosizeExampleComponent } from './sidenav-autosize-example/sidenav-autosize-example.component';
import { SnackBarOverviewExampleComponent } from './snack-bar-overview-example/snack-bar-overview-example.component';
import { TableExpandableRowsExampleComponent } from './table-expandable-rows-example/table-expandable-rows-example.component';
import { TableStickyComplexFlexExampleComponent } from './table-sticky-complex-flex-example/table-sticky-complex-flex-example.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckboxOverviewExampleComponent,
    CardFancyExampleComponent,
    ChipsDragDropExampleComponent,
    DateRangePickerFormsExampleComponent,
    DialogOverviewExampleComponent,
       DialogOverviewExampleDialog,
       DividerOverviewExampleComponent,
       ExpansionExpandCollapseAllExampleComponent,
       FormFieldAppearanceExampleComponent,
       GridListDynamicExampleComponent,
       InputFormExampleComponent,
       ListSelectionExampleComponent,
       ListSingleSelectionExampleComponent,
       MenuPositionExampleComponent,
       SidenavAutosizeExampleComponent,
       SnackBarOverviewExampleComponent,
       TableExpandableRowsExampleComponent,
       TableStickyComplexFlexExampleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,            // cdk
    //    MatGridListModule,
    //    MatButtonModule,
    //    MatButtonToggleModule,
    //    MatCardModule,
    //    MatCheckboxModule,
    //    MatChipsModule,
    //    MatListModule,
    //    MatIconModule,
    //    MatDatepickerModule,
    //    MatFormFieldModule,
    //    MatInputModule,
    //    MatNativeDateModule,

    //MatDialogModule,

    //MatSliderModule,

    A11yModule,

    ClipboardModule,

    CdkStepperModule,

    CdkTableModule,

    CdkTreeModule,

    DragDropModule,

    MatAutocompleteModule,

    MatBadgeModule,

    MatBottomSheetModule,

    MatButtonModule,

    MatButtonToggleModule,

    MatCardModule,

    MatCheckboxModule,

    MatChipsModule,

    MatStepperModule,

    MatDatepickerModule,

    MatDialogModule,

    MatDividerModule,

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

    MatTreeModule,

    OverlayModule,

    PortalModule,

    ScrollingModule,
  ],
  /*
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,            // cdk
    MatGridListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,

    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,

    MatDialogModule,

    MatSliderModule
  ],
  */

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

