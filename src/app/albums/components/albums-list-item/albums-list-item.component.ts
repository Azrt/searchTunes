import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AlbumEntry } from '@core/models/albums.models';

@Component({
  selector: 'app-albums-list-item',
  templateUrl: './albums-list-item.component.html',
  styleUrls: ['./albums-list-item.component.scss']
})
export class AlbumsListItemComponent implements OnInit {
  @Input() album: AlbumEntry;
  @Input() selected: boolean = false;
  @Output() albumSelect: EventEmitter<AlbumEntry> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onListItemClick(): void {
    this.albumSelect.emit(this.album);
  }

}
