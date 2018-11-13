import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlbumEntry, AlbumsFeed } from '@core/models/albums.models';
import { CommonList } from '@core/models/utils';
import { slideToggleAnimaion } from '@shared/animations/list.animations';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-albums-list',
  animations: [ slideToggleAnimaion ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit, OnChanges {
  @Input() albums: CommonList<AlbumsFeed>;
  @Input() limit: number;
  @Output() limitChange: EventEmitter<number> = new EventEmitter();

  albumEntries: Array<AlbumEntry>;
  selectedAlbum: AlbumEntry = null;
  searchForm: FormGroup;

  albumLimitOptions: Array<number> = [10, 50, 100, 200];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      title: '',
      limit: this.limit,
    });

    this.searchForm
      .get('title')
      .valueChanges
      .subscribe(change => {
        this.albumEntries = this.albums.data.feed.entry
          .filter(entry => entry.title.label.toLowerCase().includes(change.trim().toLowerCase()));
      });

    this.searchForm
      .get('limit')
      .valueChanges
      .subscribe(change => {
        this.searchForm.get('title').patchValue('');
        this.limitChange.emit(change);
      });
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
