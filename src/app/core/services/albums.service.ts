import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private readonly ROOT = 'https://itunes.apple.com/us/rss/topalbums/';

  constructor(
    private http: HttpClient,
  ) { }

  getAlbumsList(limit: number = 100): Observable<any> {
    return this.http
    .get(`${this.ROOT}limit=${limit}/json`)
    .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
