import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MetierComponent } from './metier/metier.component';
import { TestorientationComponent } from './testorientation/testorientation.component';
import { ProfileService } from './services/profile.service';
import { DetailMetierComponent } from './detail-metier/detail-metier.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AboutusComponent,
    ContactusComponent,
    MetierComponent,
    TestorientationComponent,
    DetailMetierComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,    
    AppRoutingModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
