import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password.component';
import { SharedModule } from '../../../shared/shared.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ChangePasswordComponent],
  declarations: [ChangePasswordComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChangePasswordModule {}
