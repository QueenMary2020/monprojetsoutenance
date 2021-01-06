import { Injectable } from '@angular/core';
import { Profile } from '../models/profils';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

   profileUrl:string = 'http://localhost:3000/profil';

  constructor(private http: HttpClient) { }

  getProfil(){
    return this.http.get<Profile[]>(this.profileUrl);
  }
}
