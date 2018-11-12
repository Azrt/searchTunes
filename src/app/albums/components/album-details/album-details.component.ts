import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlbumEntry } from '@core/models/albums.models';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {
  @Input() album: AlbumEntry;
  @Output() hide: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onHideButtonClick() {
    this.hide.emit();
  }

}
