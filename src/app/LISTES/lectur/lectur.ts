import { Component } from '@angular/core';
import { RouterLink} from "@angular/router";
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-lectur',
  standalone: true,
  imports: [],
  templateUrl: './lectur.html',
  styleUrl: './lectur.scss',
})
export class Lectur {

  constructor(private location: Location) {}
  fermer(): void {
    this.location.back();
  }

}
