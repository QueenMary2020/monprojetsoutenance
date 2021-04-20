import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { DetailSecteurComponent } from './detail-secteur/detail-secteur.component';
import { HomeComponent } from './home/home.component';
import { ListeSecteurComponent } from './liste-secteur/liste-secteur.component';




export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent, data: {breadcrumb: "aboutus"}},
    { path: 'liste-secteur', component: ListeSecteurComponent, data: {breadcrumb: "liste-secteur"}},
    { path: 'liste-secteur/:id' , component: DetailSecteurComponent},
    { path: 'contact', component: ContactComponent, data: {breadcrumb: "contact"}},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
