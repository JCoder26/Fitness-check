import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BmrCalculatorComponent } from './bmr-calculator/bmr-calculator.component';

const routes: Routes = [
  { path: '', component: BmrCalculatorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BmrCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }