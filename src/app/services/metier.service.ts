import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Metier } from '../models/metier';


@Injectable({
    providedIn: 'root'
  })
  export class MetierService {
  
   metierUrl: string = 'http://localhost:3000/profil';
   nivo_etude_url: string = 'http://localhost:3000/nivoetude';
   diplome_url: string = 'http://localhost:3000/diplome';
  
    constructor(private http: HttpClient) { }
  
    getMetier(profil_id: string){
        return this.http.get(this.metierUrl+"/"+profil_id);
      }

    getNivoetude(profil_id: string){
        return this.http.get(this.nivo_etude_url+ "/"+profil_id);
    }

    getDiplome(nivoetude_id: string){
      return this.http.get(this.diplome_url+"/"+nivoetude_id);
    }

  }