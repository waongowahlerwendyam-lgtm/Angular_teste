import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common'; // Ajoute ceci pour le @if et @for

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule], // Garde bien NgbCarouselModule ici
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {


}
