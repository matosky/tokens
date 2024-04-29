import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SettingsRoutes } from './settings.routing';
import { SettingsComponent } from './settings.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { SharedModule } from '../../../shared/shared.module';
import { ProfileDetailsModule } from '../profile-details/profile-details.module';
import { ChangePasswordModule } from '../change-password/change-password.module';
import { ChangePhonenumberModule } from '../change-phonenumber/change-phonenumber.module';
import { CountryListModule } from '../country-list/country-list.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SettingsRoutes),
    LayoutModule,
    SharedModule,
    NzIconModule,
    ProfileDetailsModule,
    ChangePasswordModule,
    CountryListModule,
    ChangePhonenumberModule,
  ],
  declarations: [SettingsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SettingsModule {}
