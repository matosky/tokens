import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetailsComponent } from './profile-details.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ProfileDetailsComponent,
  ],
  declarations: [ProfileDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileDetailsModule {}
