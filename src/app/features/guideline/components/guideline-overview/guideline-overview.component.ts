import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicalComponentsService } from 'src/app/core/services/medical-components.service';
import { MedicalComponent } from 'src/assets/mock-data/medical-components-mock-data';

@Component({
  selector: 'app-guideline-overview',
  templateUrl: './guideline-overview.component.html',
  styleUrls: ['./guideline-overview.component.scss']
})
export class GuidelineOverviewComponent {

  medicalComponentList$: Observable<MedicalComponent[]>;

  constructor(private medicalComponentsService: MedicalComponentsService) {
    this.medicalComponentList$ = this.medicalComponentsService.getMedicalComponents();
  }

}
