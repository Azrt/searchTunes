
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromAlbums from './albums.reducer';

export interface State {
  albums: fromAlbums.State;
  router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  albums: fromAlbums.reducer,
  router: fromRouter.routerReducer,
};
