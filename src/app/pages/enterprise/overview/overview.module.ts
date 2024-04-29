import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { OverviewEntComponent } from './overview.component';
import { OverviewEntRoutes } from './overview.routing';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OverviewEntRoutes),
    SharedModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    NzSelectModule
  ],
  declarations: [OverviewEntComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OverviewEntModule {}
