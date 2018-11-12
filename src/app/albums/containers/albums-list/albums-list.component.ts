import { Component, OnInit } from '@angular/core';
import { AlbumsActions } from '@core/actions';
import * as fromRoot from '@core/reducers';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {
  ngUnsubscribe: Subject<any> = new Subject();

  albums$: Observable<any>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.albums$ = this.store.pipe(select(fromRoot.selectAlbumsState));
  }

  ngOnInit(): void {
    this.store.dispatch(new AlbumsActions.GetAlbumsRequest());
  }

}
