import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-listes-services',
  standalone: true,
  imports: [RouterLink,RouterOutlet], 
  templateUrl: './listes-services.html',
  styleUrl: './listes-services.scss',
})
export class ListesServices { 



  constructor(private location: Location) {}  
  fermer(): void {
    this.location.back();
  }
}
