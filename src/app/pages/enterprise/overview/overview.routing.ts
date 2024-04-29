import { Routes } from '@angular/router';
import { OverviewEntComponent } from './overview.component';

export const OverviewEntRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'overview-ent',
        component: OverviewEntComponent,
      },
    ],
  },
];
