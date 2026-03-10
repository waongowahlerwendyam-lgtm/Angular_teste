import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router'; 
import { Location } from '@angular/common';
import { SearchBar } from '../search-bar/search-bar';

@Component({
  selector: 'app-services',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive,SearchBar,],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

 search_count:number = 0;

 search_change:string= '';

 
  incrementation (){
    this.search_count+= 1;
  }

  constructor(private location: Location) {}  
  fermer(): void {
    this.location.back();
  }



}
