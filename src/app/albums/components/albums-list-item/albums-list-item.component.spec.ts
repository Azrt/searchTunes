import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsListItemComponent } from './albums-list-item.component';

describe('AlbumsListItemComponent', () => {
  let component: AlbumsListItemComponent;
  let fixture: ComponentFixture<AlbumsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
