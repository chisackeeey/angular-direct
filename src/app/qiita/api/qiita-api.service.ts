import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class QiitaApiService {
  private baseUrl = 'https://qiita.com/api/v2/items';

  constructor(private http: HttpClient) {}

  getItem() {
    return this.http.get(`${this.baseUrl}`, {
      responseType: 'text',
      headers: {
        Authorization: 'Bearer 0f5e01a628d8052965daa93095b79e08f8b662e3',
      },
    });
  }
}
