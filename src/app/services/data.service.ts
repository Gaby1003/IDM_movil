import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessInfo } from '../models/accessInfo';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'https://localhost:7209/apiRest/Access';

  constructor(private http: HttpClient) { }

  access(accessInfo: AccessInfo): Observable<AccessInfo>{
    return this.http.post<AccessInfo>(this.url, accessInfo);
  }
}
