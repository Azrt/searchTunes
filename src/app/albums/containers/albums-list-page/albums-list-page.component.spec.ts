import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsListPageComponent } from './albums-list-page.component';

describe('AlbumsListPageComponent', () => {
  let component: AlbumsListPageComponent;
  let fixture: ComponentFixture<AlbumsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
