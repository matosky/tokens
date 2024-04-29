import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PersonalLayoutComponent } from './layouts/personal/personal-layout.component';
import { EnterpriseLayoutComponent } from './layouts/enterprise/enterprise-layout.component';
import { OverviewComponent } from './pages/personal/overview/overview.component';
import { SettingsComponent } from './pages/personal/settings/settings.component';
import { ProfileDetailsComponent } from './pages/personal/profile-details/profile-details.component';
import { ChangePasswordComponent } from './pages/personal/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/personal/overview/overview.module').then(
            (m) => m.OverviewModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/enterprise/overview/overview.module').then(
            (m) => m.OverviewEntModule
          ),
      },
      {
        path: 'wallet',
        loadChildren: () =>
          import('./pages/personal/wallet/wallet.module').then(
            (m) => m.WalletModule
          ),
      },
      {
        path: 'gift-logs',
        loadChildren: () =>
          import('./pages/personal/gift-logs/gift-logs.module').then(
            (m) => m.GiftLogsModule
          ),
      },
      {
        path: 'win-history',
        loadChildren: () =>
          import('./pages/personal/win-history/win-history.module').then(
            (m) => m.WinHistoryModule
          ),
      },
      {
        path: 'support',
        loadChildren: () =>
          import('./pages/personal/support/support.module').then(
            (m) => m.SupportModule
          ),
      },
      {
        path: 'referrals',
        loadChildren: () =>
          import('./pages/personal/referrals/referrals.module').then(
            (m) => m.ReferralsModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./pages/personal/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
