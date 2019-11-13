import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ConnService {

  constructor( private http: Http )  { }

  get(url: string ) {
    return this.http.get(url);
  }
}
