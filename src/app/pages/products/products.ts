import { carts, carts2 } from './../../Modèles/modèle_carte';
import { Component } from '@angular/core';
import { RouterLinkActive,RouterLink } from "@angular/router";
import{RouterOutlet} from "@angular/router"; 
import { Listes } from '../../LISTES/listes/listes'; 
import { TodoList } from '../../LISTES/todo-list/todo-list';

@Component({
  selector: 'app-products',
  imports: [RouterLinkActive,RouterLink,RouterOutlet,Listes,TodoList],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  Ncarte2:carts2
  Ncarte1: carts


  constructor(){
    this.Ncarte1= new carts()
    this.Ncarte1.idem='BF';
    this.Ncarte1.i2='ou'
    this.Ncarte1.i3='comment'

// Pour l'autre modèle de cartes dans production  
    this.Ncarte2= new carts2()
    this.Ncarte2.titre1='le changement au BF'
    this.Ncarte2.titre2='leducation au burkina faso est inportant' 
  }
}
