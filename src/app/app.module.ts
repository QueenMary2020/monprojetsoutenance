import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailMetierComponent } from './detail-metier/detail-metier.component';
import { SecteurEmploiComponent } from './secteur-emploi/secteur-emploi.component';
import { DetailSecteurComponent } from './detail-secteur/detail-secteur.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailMetierComponent,
    SecteurEmploiComponent,
    DetailSecteurComponent,
    AccueilComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
