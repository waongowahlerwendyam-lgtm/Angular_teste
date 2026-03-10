import { Component, input, InputSignal } from '@angular/core';
import { carts, carts2 } from '../../Modèles/modèle_carte';

@Component({
  selector: 'app-listes',
  standalone : true,
  imports: [],
  templateUrl: './listes.html',
  styleUrl: './listes.scss',
})
export class Listes {

 Carte: InputSignal<carts> =input( new carts ())


 models :InputSignal<carts2 >=input(new carts2 () )





  card_title: string = "LEDUCATION ( cliquez pour changer le titre)";
   
  card__title(event: any) {

    console.log("Titre de la carte cliqué !", event);
    const nouveauTitre = prompt("Entrez un nouveau titre pour la carte :");
    if (nouveauTitre) {
      this.card_title = nouveauTitre;
    }
  }
  
  
}
