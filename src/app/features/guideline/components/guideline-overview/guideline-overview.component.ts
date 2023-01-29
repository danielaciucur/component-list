import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MedicalComponentsService } from 'src/app/medical-components.service';
import { MedicalComponent } from 'src/assets/mock-data/medical-components-mock-data';

@Component({
  selector: 'app-guideline-overview',
  templateUrl: './guideline-overview.component.html',
  styleUrls: ['./guideline-overview.component.scss']
})
export class GuidelineOverviewComponent implements OnDestroy {

  addComponentsClicked = false;
  selectedComponents: MedicalComponent[] = [];
  subscription: Subscription;

  constructor(private router: Router, private medicalService: MedicalComponentsService) {
    this.subscription = this.medicalService.getSelectedComponents().subscribe(value => this.selectedComponents = value);
    console.log(this.selectedComponents);
   }

  addComponents() {
    this.router.navigate(['/medical-components']);
  }

  onBackToOverviewClicked() {
    this.addComponentsClicked = !this.addComponentsClicked;
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
