import { Routes } from '@angular/router';
import { OverviewComponent } from './overview.component';

export const OverviewRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: OverviewComponent,
      },
    ],
  },
];
