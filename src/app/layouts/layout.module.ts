import { NgModule } from '@angular/core';

// Components

// Modules
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromLayout from './reducers/layout.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LayoutEffects } from './effects/layout.effects';
import { PageWrapComponent } from './page-wrap/page-wrap.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  
    PageWrapComponent
  ],
  exports: [PageWrapComponent],
  imports: [
    RouterModule,
    StoreModule.forFeature('layout', fromLayout.reducer),
    EffectsModule.forFeature([LayoutEffects]),
    CommonModule
  ]
})
export class LayoutModule {}
