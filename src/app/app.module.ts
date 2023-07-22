import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HRPDFGenerationComponent } from './hr-pdf-generation/hr-pdf-generation.component';
import { PdfGenerationComponent } from './pdf-generation/pdf-generation.component';

@NgModule({
  declarations: [
    AppComponent,
    HRPDFGenerationComponent,
    PdfGenerationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
