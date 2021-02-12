import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Secteur } from '../models/secteur';

@Injectable({
  providedIn: 'root'
})
export class MesservicesService {
  API_URL: string = "http://localhost:3000/secteuremploi";

  constructor(private httpClient: HttpClient) { }

  getAllSecteurs() {
    return this.httpClient.get<Secteur[]>(this.API_URL)
  }

  getsecteur(secteurId) {
    return this.httpClient.get<Secteur[]>(`${this.API_URL}/${secteurId}`)
  }
}
