import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NzIconModule
  ],
  exports: [
    CountryListComponent,
  ],
  declarations: [CountryListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CountryListModule {}
