import { Action } from '@ngrx/store';

export enum AlbumsAction {
  GetAlbumsRequest = '[Albums] Get Albums Request',
  GetAlbumsSuccess = '[Albums] Get Albums Success',
  GetAlbumsError = '[Albums] Get Albums Error',
}

export class GetAlbumsRequest implements Action {
  readonly type = AlbumsAction.GetAlbumsRequest;

  constructor(public payload?: number) {}
}

export class GetAlbumsSuccess implements Action {
  readonly type = AlbumsAction.GetAlbumsSuccess;

  constructor(public payload: any) {}
}

export class GetAlbumsError implements Action {
  readonly type = AlbumsAction.GetAlbumsError;

  constructor(public payload: any) {}
}

export type AlbumsActionTypes
 = GetAlbumsRequest
 | GetAlbumsSuccess
 | GetAlbumsError
;
