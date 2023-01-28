import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidelineOverviewComponent } from './features/guideline/components/guideline-overview/guideline-overview.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'guideline-overview',
    component: GuidelineOverviewComponent,
    pathMatch: 'full',
  },
  {
    path: 'medical-components',
    loadChildren: () =>
      import('./features/medical-components/medical-components.module').then(
        (m) => m.MedicalComponentsModule
      ),
  },

  { path: '', redirectTo: '/guideline-overview', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
