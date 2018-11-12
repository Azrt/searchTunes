import { Component, OnInit, Input } from '@angular/core';
import { CommonList } from '@core/models/utils';
import { AlbumsFeed } from '@core/models/albums.models';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {
  @Input() albums: CommonList<AlbumsFeed>;

  constructor() { }

  ngOnInit() {
  }

}
