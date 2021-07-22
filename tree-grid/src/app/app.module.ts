import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { TreetableModule } from 'ng-material-treetable';
import { TreetableModule } from './treetable/treetable.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    TreetableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
