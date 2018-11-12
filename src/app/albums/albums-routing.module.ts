import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsListPageComponent } from './containers/albums-list-page/albums-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumsListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
