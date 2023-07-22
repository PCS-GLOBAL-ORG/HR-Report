import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HRPDFGenerationComponent } from './hr-pdf-generation/hr-pdf-generation.component';
import { PdfGenerationComponent } from './pdf-generation/pdf-generation.component';

const routes: Routes = [
  {path: "", redirectTo:"hr-pdf-generation", pathMatch:"full"},
  {path: "hr-pdf-generation", component: HRPDFGenerationComponent},
  {path:"pdf",component:PdfGenerationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
