import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TreetableModule } from 'ng-material-treetable';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TreetableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
