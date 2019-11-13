import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Levelone1Component } from './levelone1/levelone1.component';
import { Levelone2Component } from './levelone2/levelone2.component';
import { Leveltwo1Component } from './leveltwo1/leveltwo1.component';
import { Leveltwo2Component } from './leveltwo2/leveltwo2.component';

@NgModule({
  declarations: [
    AppComponent,
    Levelone1Component,
    Levelone2Component,
    Leveltwo1Component,
    Leveltwo2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
