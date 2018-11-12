import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumsEffects } from '@core/effects';
import { EffectsModule } from '@ngrx/effects';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { AlbumsListPageComponent } from './containers/albums-list-page/albums-list-page.component';
import { SingleAlbumComponent } from './components/single-album/single-album.component';
import { MaterialModule } from '@shared/material/material.module';

@NgModule({
  declarations: [
    AlbumsListPageComponent,
    AlbumsListComponent,
    SingleAlbumComponent,
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    EffectsModule.forFeature([
      AlbumsEffects,
    ]),
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AlbumsModule { }
