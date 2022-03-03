import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './InterFace/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get('https://my-json-server.typicode.com/Uxtrendz/apis/videoList');
  }

}
