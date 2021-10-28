import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CampeurComponent } from './campeur/campeur.component';
import { ContactComponent } from './contact/contact.component';
import { EquipeComponent } from './equipe/equipe.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent, },
  { path: 'notre-campeur', component: CampeurComponent, },
  { path: 'equipe', component: EquipeComponent, },
  { path: 'contact', component: ContactComponent, },
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
