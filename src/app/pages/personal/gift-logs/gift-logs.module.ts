import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GiftsLogComponent } from './gift-logs.component';
// import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';
import { GiftLogsRoute } from './gift-logs-routing.module';
// import { NzSelectModule } from 'ng-zorro-antd/select';
// import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LayoutModule } from '../../../layouts/layout.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GiftLogsRoute),
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
  declarations: [GiftsLogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GiftLogsModule {}