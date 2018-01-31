import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { PordataComponent } from './components/pordata/pordata.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    PordataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
