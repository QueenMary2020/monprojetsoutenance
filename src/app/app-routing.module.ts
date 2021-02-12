import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DetailMetierComponent } from './detail-metier/detail-metier.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'aboutus', component: AboutusComponent},
    { path: 'liste-secteur-emploi/:id' , component: DetailMetierComponent},
    { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
    { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
