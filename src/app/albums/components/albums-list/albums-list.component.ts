import { Component, OnInit, OnChanges, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { CommonList } from '@core/models/utils';
import { AlbumsFeed, AlbumEntry } from '@core/models/albums.models';

import { slideToggleAnimaion } from '@shared/animations/list.animations';

@Component({
  selector: 'app-albums-list',
  animations: [ slideToggleAnimaion ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit, OnChanges {
  @Input() albums: CommonList<AlbumsFeed>;

  albumEntries: AlbumEntry[];
  selectedAlbum: AlbumEntry = null;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    if (
      !change.albums.firstChange &&
      !change.albums.currentValue.isFetching
    ) {
      this.albumEntries = this.albums.data.feed.entry;
    }
  }

  onAlbumSelect(album: AlbumEntry): void {
    this.selectedAlbum = album;
  }

  isItemSelected(album: AlbumEntry): boolean {
    return this.selectedAlbum && this.selectedAlbum.id.label === album.id.label;
  }

  onAlbumDetailsHide(): void {
    this.selectedAlbum = null;
  }

}
