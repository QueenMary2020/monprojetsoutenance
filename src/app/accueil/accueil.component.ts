import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profils';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

   
  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {
    console.log("uhbyb"),
  this.affichProfile();
  }

  affichProfile() {
    this.profileService.getProfil().subscribe((data: Profile[])=>
    console.log(data),
  )}
}
