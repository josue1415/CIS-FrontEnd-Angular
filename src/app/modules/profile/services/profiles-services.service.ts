import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilesServicesService {

  private readonly URL = 'http://127.0.0.1:8000/api/public';

  constructor(private http: HttpClient) { }

  getOnlytwentyBecados(): Observable<any> {
    return this.http.get(`${this.URL}/getOnlytwentyBecados`)
  }
}
