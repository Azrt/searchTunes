import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumsEffects } from '@core/effects';
import { EffectsModule } from '@ngrx/effects';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { AlbumsListPageComponent } from './containers/albums-list-page/albums-list-page.component';
import { MaterialModule } from '@shared/material/material.module';
import { AlbumsListItemComponent } from './components/albums-list-item/albums-list-item.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';

@NgModule({
  declarations: [
    AlbumsListPageComponent,
    AlbumsListComponent,
    AlbumsListItemComponent,
    AlbumDetailsComponent,
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
