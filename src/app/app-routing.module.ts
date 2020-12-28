import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SecteurEmploiComponent } from './secteur-emploi/secteur-emploi.component';

const routes: Routes = [
  { path: "", redirectTo: "/accueil", pathMatch: "full" },
    { path: "accueil", component: AccueilComponent },
    { path: "a propos", component: AboutusComponent },
    { path: "metier", component: SecteurEmploiComponent },
    { path: "contact", component: ContactusComponent  },
    { path: "*", component: AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
