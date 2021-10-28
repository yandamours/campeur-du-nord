import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { CampeurComponent } from './campeur/campeur.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component'
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    CampeurComponent,
    EquipeComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
