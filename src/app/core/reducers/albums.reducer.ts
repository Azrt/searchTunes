import { AlbumsActions } from '@core/actions';
import { initialListReducer } from './common';
import { CommonList } from '@core/models/utils';
import { AlbumsAction } from 'src/app/core/actions/albums.actions';

export interface State {
  list: CommonList<any>;
}

const initialState: State = {
  list: initialListReducer,
};

export function reducer(
  state: State = initialState,
  action: AlbumsActions.AlbumsActionTypes,
): State {
  switch (action.type) {
    case AlbumsActions.AlbumsAction.GetAlbumsRequest:
      return {
        ...state,
        list: {
          ...state.list,
          isFetching: true,
          errors: {},
        },
      };

    case AlbumsActions.AlbumsAction.GetAlbumsSuccess:
      return {
        ...state,
        list: {
          ...state.list,
          isFetching: false,
          data: action.payload,
        },
      };

    case AlbumsActions.AlbumsAction.GetAlbumsError:
      return {
        ...state,
        list: {
          ...state.list,
          isFetching: false,
          errors: action.payload,
        },
      };

    default:
      return state;
  }
}

export const getAlbumsList = (state: State) => state.list;
