import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  declarations: [
    AppComponent,
    SchedulerComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
