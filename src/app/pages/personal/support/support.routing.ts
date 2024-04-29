import { Routes } from '@angular/router';
import { SupportComponent } from './support.component';

export const SupportRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SupportComponent,
      },
    ],
  },
];
