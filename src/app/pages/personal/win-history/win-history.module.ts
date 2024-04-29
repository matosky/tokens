import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';
import { WinHistoryComponent } from './win-history.component';
import { WinHistoryRoute } from './win-history-routing.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LayoutModule } from '../../../layouts/layout.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WinHistoryRoute),
    SharedModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    ReactiveFormsModule,
    NzDropDownModule,
    NzTableModule,
    NzIconModule,
    LayoutModule
  ],
  declarations: [WinHistoryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WinHistoryModule {}