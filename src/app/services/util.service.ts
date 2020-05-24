import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FaqTemplate } from '../containers/model/template.model';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private _http: HttpClient) {}

  public getTemplateData(): Observable<FaqTemplate[]> {
    return this._http.get(`./assets/data/faq.json`).pipe(
      retry(2),
      map((response: FaqTemplate[]) => response)
    );
  }
}
