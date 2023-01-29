import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { MedicalComponentsService } from 'src/app/medical-components.service';
import { MedicalComponent } from 'src/assets/mock-data/medical-components-mock-data';

@Component({
  selector: 'app-medical-component-detail',
  templateUrl: './medical-component-detail.component.html',
  styleUrls: ['./medical-component-detail.component.scss'],
})
export class MedicalComponentDetailsComponent implements OnInit {
  medicalComponent$!: Observable<MedicalComponent>;

  routeState = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MedicalComponentsService
  ) {
    const state = this.router.getCurrentNavigation().extras.state as {
      data: string;
    };
    if (state) {
      this.routeState = state.data;
    }
  }

  ngOnInit() {
    this.medicalComponent$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getMedicalComponent(params.get('id'))
      )
    );
  }

  backToComponentList() {
    this.router.navigate(['/medical-components']);
  }

  backToOverview() {
    this.router.navigate(['/guideline-overview']);
  }
}
