import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AboutusComponent } from './aboutus/aboutus.component';
import { ProfileService } from './services/profile.service';
import { DetailMetierComponent } from './detail-metier/detail-metier.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ListeSecteurComponent } from './liste-secteur/liste-secteur.component';
import { DetailSecteurComponent } from './detail-secteur/detail-secteur.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    DetailMetierComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    ListeSecteurComponent,
    DetailSecteurComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,  
    CommonModule,  
    AppRoutingModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
