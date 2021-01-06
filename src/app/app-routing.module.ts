import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MetierComponent } from './metier/metier.component';
import { TestorientationComponent } from './testorientation/testorientation.component';


const routes: Routes = [
    { path: '', component: AccueilComponent},
    { path: 'aboutus', component: AboutusComponent},
    { path: 'contactus', component: ContactusComponent},
    { path: 'testorientation', component: TestorientationComponent},
    { path: 'metier', component: MetierComponent},
    { path: '*', component: AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
