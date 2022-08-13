import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://localhost:7209/apiRest/Users';

  constructor(private http: HttpClient) { }

  addUser(userInfo: any): Observable<any>{
    return this.http.post<any>(this.url, userInfo);
  }

  editUser(userInfo: any): Observable<any>{
    return this.http.put<any>(this.url, userInfo);
  }

  deleteUser(userInfo: any): Observable<any>{
    return this.http.patch<any>(this.url, userInfo);
  }

  getUser(userInfo: any): Observable<any>{
    return this.http.get<any>(this.url, userInfo);
  }
}
