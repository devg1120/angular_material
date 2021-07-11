

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


import {DragDropModule} from '@angular/cdk/drag-drop';

import {MatGridListModule} from '@angular/material/grid-list';

import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';

//date pickup
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

//Dialog
import {MatDialogModule} from '@angular/material/dialog';



import {MatSliderModule} from '@angular/material/slider';
import { CheckboxOverviewExampleComponent } from './checkbox-overview-example/checkbox-overview-example.component';
import { CardFancyExampleComponent } from './card-fancy-example/card-fancy-example.component';
import { ChipsDragDropExampleComponent } from './chips-drag-drop-example/chips-drag-drop-example.component';
import { DateRangePickerFormsExampleComponent } from './date-range-picker-forms-example/date-range-picker-forms-example.component';
import { DialogOverviewExampleComponent, DialogOverviewExampleDialog } from './dialog-overview-example/dialog-overview-example.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckboxOverviewExampleComponent,
    CardFancyExampleComponent,
    ChipsDragDropExampleComponent,
    DateRangePickerFormsExampleComponent,
    DialogOverviewExampleComponent,
       DialogOverviewExampleDialog,
  ],
  imports: [
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

