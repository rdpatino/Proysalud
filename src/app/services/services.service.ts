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
  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/getById.php?id=' + id);
  }
  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/list.php');
  }
  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/delete.php?id=' + id);
  }
  updateUser(user: User){
    return this.http.post<ApiResponse>(this.baseUrl + '/update.php', user);
  }
  login(loginData): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/login.php', loginData);
  }
}
