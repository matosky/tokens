import { Routes } from '@angular/router';
import { WinHistoryComponent } from './win-history.component';

export const WinHistoryRoute: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: WinHistoryComponent,
      },
    ],
  },
];