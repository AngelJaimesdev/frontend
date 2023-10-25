import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class tableService {
  // backendUrl = 'http://localhost:3000/table/';

  constructor(private _httpClient: HttpClient) {}

  // getProducts(): Observable<ResponseType> {
  //   return this._httpClient.get<ResponseType>('http://localhost:3000/table/');
  // }

  getProducts(): Observable<ResponseType> {
    return this._httpClient.get<ResponseType>(
      'https://fakestoreapi.com/products'
    );
  }
}
