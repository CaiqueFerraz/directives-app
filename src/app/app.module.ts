import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgStyleComponent } from './ng-style/ng-style.component';
import {MatCardModule, MatSelectModule, MatRadioModule, MatCheckboxModule, MatInputModule, MatListModule } from '@angular/material/'
import{ FormsModule} from '@angular/forms';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIffComponent } from './ng-iff/ng-iff.component';
import { SubNgIffComponent } from './ng-iff/sub-ng-iff/sub-ng-iff.component';
import { NgForComponent } from './ng-for/ng-for.component';


@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIffComponent,
    SubNgIffComponent,
    NgForComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
