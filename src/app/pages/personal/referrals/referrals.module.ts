import { ReferralsComponent } from './referrals.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReferralsRoutes } from './referrals.routing';
// import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LayoutModule } from '../../../layouts/layout.module';

// import { NzSelectModule } from 'ng-zorro-antd/select';
// import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ReferralsRoutes),
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
    NzInputModule,
    LayoutModule,
  ],
  declarations: [ReferralsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReferralsModule {}
