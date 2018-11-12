import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumsEffects } from '@core/effects';
import { EffectsModule } from '@ngrx/effects';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsListComponent } from './containers/albums-list/albums-list.component';

@NgModule({
  declarations: [AlbumsListComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    EffectsModule.forFeature([
      AlbumsEffects,
    ]),
  ]
})
export class AlbumsModule { }
