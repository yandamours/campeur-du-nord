import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tabs = [
    {
      label:"Notre campeur",
      lien:"/notre-campeur"
    },
    {
      label:"Notre équipe",
      lien:"/equipe"
    },
    {
      label:"Contact",
      lien:"/contact"
    },
  ]

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true); 
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
}

  scroll() {
    const lastKnownScrollPosition = window.scrollY;
    const navElt = document.querySelector('.main-nav');
    lastKnownScrollPosition > 150 ? navElt?.classList.add('white') : navElt?.classList.remove('white');
  }

}
