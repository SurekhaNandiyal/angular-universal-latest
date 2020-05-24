import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private _http: HttpClient) {}

  public getContactUsData() {
    return this._http.get(`https://jsonplaceholder.typicode.com/posts/2`).pipe(retry(2));
  }
}
