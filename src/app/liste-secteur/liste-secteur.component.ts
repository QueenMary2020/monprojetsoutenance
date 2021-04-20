import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Secteur } from 'src/app/models/secteur';

@Component({
  selector: 'app-liste-secteur',
  templateUrl: './liste-secteur.component.html',
  styleUrls: ['./liste-secteur.component.css']
})
export class ListeSecteurComponent implements OnInit {

  secteurs: Secteur[] = [];

  constructor( private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  voirPlus(secteurid){
    this.router.navigate(['/liste-secteur', secteurid])
    console.log(secteurid);
  
  }
}
