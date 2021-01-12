import { Injectable } from '@angular/core';
import { Profile } from '../models/profils';
import { Niveauetude } from '../models/niveau_etude';
import { Diplome } from '../models/diplome';
import { Filiere } from '../models/filiere';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

   profileUrl: string = 'http://localhost:3000/profil';
   nivoetudeUrl: string = 'http://localhost:3000/nivoetude';
   diplomeUrl: string = 'http://localhost:3000/diplome';
   filiereUrl: string = 'http://localhost:3000/filiere';

  constructor(private http: HttpClient) { }

  getProfil(){
    return this.http.get<Profile[]>(this.profileUrl);
  }

  getNivoetude(){
    return this.http.get<Niveauetude[]>(this.nivoetudeUrl);
  }

  getDiplome(){
    return this.http.get<Diplome[]>(this.diplomeUrl);
  }

  getFiliere(){
    return this.http.get<Filiere[]>(this.filiereUrl);
  }
}
