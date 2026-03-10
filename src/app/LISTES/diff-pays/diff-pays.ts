import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrieService } from './../../Services/countrie-service';
import { Country } from '../Interface_app/country.interface';

@Component({
  selector: 'app-diff-pays',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diff-pays.html',
  styleUrl: './diff-pays.scss',
})
export class DiffPays implements OnInit {

  countries: Country[] = [];
  loading = true;
  error: string | null = null;

  constructor(
    private CountrieService: CountrieService,
    private cdr: ChangeDetectorRef  // pour corrigé l'affichages
  ) {}

  ngOnInit(): void {
    console.log('🟢 Début chargement');

    this.CountrieService.getAllCountries().subscribe({
      next: (data) => {
        console.log('✅ Données reçues', data.length);
        
        this.countries = data.sort((a, b) => 
          a.name.common.localeCompare(b.name.common)
        );

        this.loading = false;
        
        // 👇 FORCE LA MISE À JOUR IMMÉDIATE
        this.cdr.detectChanges(); // pour corrigé l'affichages
        
      },
      error: (err) => {
        console.error('❌ Erreur', err);
        this.loading = false;
        this.cdr.detectChanges();  // ← Aussi en cas d'erreur
      }
    });
  }
}