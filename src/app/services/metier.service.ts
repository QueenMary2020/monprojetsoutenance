import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Metier } from '../models/metier';


@Injectable({
    providedIn: 'root'
  })
  export class MetierService {
  
   metierUrl: string = 'http://localhost:3000/profil';
  
    constructor(private http: HttpClient) { }
  
    getMetier(profil_id: string){
        return this.http.get(this.metierUrl+"/"+profil_id);
      }

  }