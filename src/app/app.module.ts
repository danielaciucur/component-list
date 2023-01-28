import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GuidelineModule } from './features/guideline/guideline.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { MedicalComponentsModule } from './features/medical-components/medical-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    GuidelineModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    AppRoutingModule,
    MedicalComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
