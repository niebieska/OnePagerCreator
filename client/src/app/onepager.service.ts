import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CV } from 'src/models/cv';

@Injectable({
  providedIn: 'root'
})
export class OnepagerService {

  constructor(private http: HttpClient) { }

  sendCV(json: CV) {
    console.log(json);
  }

  fetchJson(): Observable<Record<string, any>> {
    return this.http.get('assets/JSONMockup.json');
  }


}
