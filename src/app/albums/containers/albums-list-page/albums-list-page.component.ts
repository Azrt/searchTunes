import { Component, OnInit } from '@angular/core';
import { AlbumsActions } from '@core/actions';
import { AlbumsFeed } from '@core/models/albums.models';
import { CommonList } from '@core/models/utils';
import * as fromRoot from '@core/reducers';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

@Component({
  templateUrl: './albums-list-page.component.html',
  styleUrls: ['./albums-list-page.component.scss']
})
export class AlbumsListPageComponent implements OnInit {
  ngUnsubscribe: Subject<any> = new Subject();

  albums$: Observable<CommonList<AlbumsFeed>>;
  LIMIT: number = 100;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.albums$ = this.store.pipe(select(fromRoot.selectAlbumsListState));
  }

  ngOnInit(): void {
    this.store.dispatch(new AlbumsActions.GetAlbumsRequest());
  }

  onLimitChange(number: number): void {
    this.LIMIT = number;
    this.store.dispatch(new AlbumsActions.GetAlbumsRequest(number));
  }
}
