import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeralService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get('url');
  }
}
