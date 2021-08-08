import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {
    // Inject service into another service.
  }

  getJSONFile(jsonURL: string): Observable<any> {
    // Use the httpClient.get() method to fetch data from a (API, JSON) server or local side.
    return this.httpClient.get<any>(jsonURL);
  } 

}
