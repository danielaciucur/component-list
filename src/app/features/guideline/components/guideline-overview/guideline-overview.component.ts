import { Component, OnDestroy } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { MedicalComponentsService } from 'src/app/medical-components.service';
import { MedicalComponent } from 'src/assets/mock-data/medical-components-mock-data';

@Component({
  selector: 'app-guideline-overview',
  templateUrl: './guideline-overview.component.html',
  styleUrls: ['./guideline-overview.component.scss'],
})
export class GuidelineOverviewComponent implements OnDestroy {
  addComponentsClicked = false;
  selectedComponents?: MedicalComponent[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private medicalService: MedicalComponentsService
  ) {
    this.medicalService
      .getSelectedComponents()
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.selectedComponents = value;
      });
  }

  addComponents() {
    this.router.navigate(['/medical-components']);
  }

  onBackToOverviewClicked() {
    this.addComponentsClicked = !this.addComponentsClicked;
  }

  goToDetails(id: number) {
    const navigationExtras: NavigationExtras = { state: { data: 'overview' } };
    this.router.navigate(['/medical-components', id], navigationExtras);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
