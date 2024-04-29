import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { OverviewComponent } from './overview.component';
import { OverviewRoutes } from './overview.routing';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { LayoutModule } from '../../../layouts/layout.module';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { StatusComponent } from '../../../shared/components/common/status/status.component';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OverviewRoutes),
    SharedModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    NzSelectModule,
    LayoutModule,
    NzProgressModule,
    NzIconModule
  ],
  declarations: [OverviewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OverviewModule {}
