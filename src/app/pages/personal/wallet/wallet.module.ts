import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WalletComponent } from './wallet.component';
import { WalletRoutes } from './wallet.routing';
// import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LayoutModule } from '../../../layouts/layout.module';
// import { NzSelectModule } from 'ng-zorro-antd/select';
// import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WalletRoutes),
    SharedModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    ReactiveFormsModule,
    // NzDatePickerModule,
    NzDropDownModule,
    // NzSelectModule,
    // NzInputModule
    NzTableModule,
    NzIconModule,
    LayoutModule
  ],
  declarations: [WalletComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WalletModule {}