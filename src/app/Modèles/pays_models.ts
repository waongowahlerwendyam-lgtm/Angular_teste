export class PaysModel {
    name: { common: string; official: string };
    capital: string[];
    population: number;
    flags: { png: string; svg: string };
  
    constructor(data: any) {
      this.name = data.name;
      this.capital = data.capital;
      this.population = data.population;
      this.flags = data.flags;
    }
    get displayName(): string {
      return `${this.name.common} (${this.capital?.[0] ?? 'inconnue'})`;
    }
  }
  