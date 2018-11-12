import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromAlbums from './albums.reducer';


export interface State {
  albums: fromAlbums.State;
  router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  albums: fromAlbums.reducer,
  router: fromRouter.routerReducer,
};

export const selectCoreState = createFeatureSelector<State>('core');

export const selectAlbumsListState = createSelector(
  selectCoreState,
  (state: State) => state.albums.list,
)
