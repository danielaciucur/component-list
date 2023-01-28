import { NgModule } from '@angular/core';
import { GuidelineOverviewComponent } from './components/guideline-overview/guideline-overview.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    GuidelineOverviewComponent
  ],
  imports: [MatCardModule, MatButtonModule], exports: [
    GuidelineOverviewComponent
  ]
})
export class GuidelineModule { }
