import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePhonenumberComponent } from './change-phonenumber.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NgOtpInputModule } from 'ng-otp-input';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule,
    NgOtpInputModule
  ],
  exports: [ChangePhonenumberComponent],
  declarations: [ChangePhonenumberComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChangePhonenumberModule {}
