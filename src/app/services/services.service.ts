import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/user';
import { ApiResponse } from '../Model/api-response';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl: string = 'http://localhost/AngularProysalud';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/insert.php', user);
  }
}
