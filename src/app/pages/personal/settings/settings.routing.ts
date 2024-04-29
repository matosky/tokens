import { Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { ProfileDetailsComponent } from '../profile-details/profile-details.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { CountryListComponent } from '../country-list/country-list.component';
import { ChangePhonenumberComponent } from '../change-phonenumber/change-phonenumber.component';

export const SettingsRoutes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' }, // Redirect to 'profile'
      {
        path: 'profile',
        component: ProfileDetailsComponent,
        title: 'routing: profile',
      },
      {
        path: 'password',
        component: ChangePasswordComponent,
        title: 'routing: password',
      },
      {
        path: 'country',
        component: CountryListComponent,
        title: 'routing: country',
      },
      {
        path: 'phone-number',
        component: ChangePhonenumberComponent,
        title: 'routing: phone-number',
      },

      // Add more child routes for other components
    ],
  },
];
