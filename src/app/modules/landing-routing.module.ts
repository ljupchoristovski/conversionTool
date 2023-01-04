import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'currency',
        loadChildren: (): Promise<any> =>
          import('./currency/currency.module').then((m) => m.CurrencyModule),
      },
      {
        path: 'length',
        loadChildren: (): Promise<any> =>
          import('./length/length.module').then((m) => m.LengthModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/currency',
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'currency',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
