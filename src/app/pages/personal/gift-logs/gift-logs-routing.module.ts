import { Routes } from '@angular/router';
import { GiftsLogComponent } from './gift-logs.component';

export const GiftLogsRoute: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GiftsLogComponent,
      },
    ],
  },
];