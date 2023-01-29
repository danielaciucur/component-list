import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GuidelineModule } from './features/guideline/guideline.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { MedicalComponentsModule } from './features/medical-components/medical-components.module';
import { MedicalComponentsService } from './medical-components.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GuidelineModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    AppRoutingModule,
    MedicalComponentsModule
  ],
  providers: [MedicalComponentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
