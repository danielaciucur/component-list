import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuidelineOverviewComponent } from './components/guideline-overview/guideline-overview.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router'; // CLI imports router

@NgModule({
  declarations: [
    GuidelineOverviewComponent
  ],
  imports: [MatCardModule, MatButtonModule, RouterModule, CommonModule], exports: [
    GuidelineOverviewComponent
  ]
})
export class GuidelineModule { }
