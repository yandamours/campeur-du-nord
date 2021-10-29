import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  public teamMembersUrlList = [
    'assets/images/equipe.jpg',
    'assets/images/contact.jpg',
    'assets/images/hero-accueil-2.jpg'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
