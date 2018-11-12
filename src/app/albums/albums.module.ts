import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumsEffects } from '@core/effects';
import { EffectsModule } from '@ngrx/effects';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsListPageComponent } from './containers/albums-list-page/albums-list-page.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';

@NgModule({
  declarations: [
    AlbumsListPageComponent,
    AlbumsListComponent,
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    EffectsModule.forFeature([
      AlbumsEffects,
    ]),
  ]
})
export class AlbumsModule { }
