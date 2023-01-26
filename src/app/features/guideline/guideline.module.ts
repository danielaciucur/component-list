import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuidelineOverviewComponent } from './components/guideline-overview/guideline-overview.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GuidelineOverviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [
    GuidelineOverviewComponent
  ]
})
export class GuidelineModule { }
