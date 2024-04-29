import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { SupportComponent } from './support.component';
import { SupportRoutes } from './support.routing';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { LayoutModule } from '../../../layouts/layout.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SupportRoutes),
    SharedModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    NzSelectModule,
    NzCollapseModule,
    NzCheckboxModule,
    LayoutModule
  ],
  declarations: [SupportComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SupportModule {}
