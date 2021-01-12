import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profils';
import { ProfileService } from '../services/profile.service';
import { NgForm } from '@angular/forms';
import { Niveauetude } from '../models/niveau_etude';
import { Diplome } from '../models/diplome';
import { Filiere } from '../models/filiere';
import { MetierService } from '../services/metier.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  profiles = [];
  niveauetude = [];
  diplomes = [];
  filieres = [];
  metiers = [];
  profil_id: string;
  formulaire: NgForm;

  constructor(private profileService: ProfileService,
    private metierService: MetierService) {
  }

  ngOnInit(): void {
  this.affichProfile();
  this.affichNiveau();
  this.affichDiplome();
  this.affichFiliere();
  this.affichMetierEnfonctionduprofil("5ffaf1802dd861238c6a5613");
  }

  affichProfile() {
    this.profileService.getProfil().subscribe((data: Profile[])=>{
      console.log(data);
      this.profiles = data;
    },
    
    )}

  affichNiveau(){
    this.profileService.getNivoetude().subscribe((data: Niveauetude[])=>{
      this.niveauetude = data;
    })
  }

  affichDiplome(){
    this.profileService.getDiplome().subscribe((data: Diplome[])=>{
      this.diplomes = data;
    })
  }

  affichFiliere(){
    this.profileService.getFiliere().subscribe((data: Filiere[])=>{
      this.filieres = data;
    })
  }

  affichMetierEnfonctionduprofil(id){
    this.metierService.getMetier(id).subscribe((data: any)=>{
     console.log(data);
     this.metiers = data[0].metier;
     console.log(this.metiers);
    })

  }
}
