import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { AlbumsService } from '@core/services';

import {
  AlbumsActions,
} from '@core/actions';

@Injectable()
export class AlbumsEffects {
  constructor(
    private actions$: Actions,
    private albumsService: AlbumsService,
  ) {}

  @Effect()
  getAlbums$: Observable<Action> = this.actions$.pipe(
    ofType(AlbumsActions.AlbumsAction.GetAlbumsRequest),
    map((action: AlbumsActions.GetAlbumsRequest) => action.payload),
    switchMap((payload: any) => {
      return this.albumsService.getAlbumsList(payload).pipe(
        map(albums => new AlbumsActions.GetAlbumsSuccess(albums)),
        catchError(error => of(new AlbumsActions.GetAlbumsError(error))),
      );
    }),
  )
}
