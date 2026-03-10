import { Injectable } from '@angular/core';
import { Country } from './../LISTES/Interface_app/country.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PaysModel } from '../Modèles/pays_models'; 

@Injectable({ providedIn: 'root' })

export class CountrieService {

  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<PaysModel[]> {

    const url = `${this.apiUrl}/all?fields=name,capital,population,flags`;
    
    return this.http.get<Country[]>(url).pipe(

      // TRANSFORMATION : chaque Country → nouveau PaysModel

      map((donneesBrutes: Country[]) => {
        
        return donneesBrutes.map(paysBrut => new PaysModel(paysBrut));
      })
    );
  }
}