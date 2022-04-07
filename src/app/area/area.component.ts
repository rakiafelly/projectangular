import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  // template:`<input type="text" id="calcul">
  // <button type="sbmit">calculer cercle</button>
  // <button type="submit">calculer carre</button>`,
  styleUrls: ['./area.component.css'],
})
export class AreaComponent implements OnInit {
  affichage = '';
  constructor() { }

  ngOnInit(): void {
  }

  cercle(x:any): void {
    let resultat = (3.14 * x);
    this.affichage = `pour la valeur de ${x}, le cercle est ${resultat}`
  }

  carre(x:any): void {

    let resultat = (x * x);
    this.affichage = `pour la valeur de ${x}, le carre est ${resultat}`
  }
}
