import { AlbumsActions } from '@core/actions';
import { initialListReducer } from './common';
import { CommonList } from '@core/models/utils';
import { AlbumsAction } from 'src/app/core/actions/albums.actions';

export interface State {
  albums: CommonList<any>;
}

const initialState: State = {
  albums: initialListReducer,
};

export function reducer(
  state: State = initialState,
  action: AlbumsActions.AlbumsActionTypes,
): State {
  switch (action.type) {
    case AlbumsActions.AlbumsAction.GetAlbumsRequest:
      return {
        ...state,
        albums: {
          ...state.albums,
          isFetching: true,
          errors: {},
        },
      };

    case AlbumsActions.AlbumsAction.GetAlbumsSuccess:
      return {
        ...state,
        albums: {
          ...state.albums,
          isFetching: false,
          data: action.payload,
        },
      };

    case AlbumsActions.AlbumsAction.GetAlbumsError:
      return {
        ...state,
        albums: {
          ...state.albums,
          isFetching: false,
          errors: action.payload,
        },
      };

    default:
      return state;
  }
}

export const getAlbumsList = (state: State) => state.albums;
