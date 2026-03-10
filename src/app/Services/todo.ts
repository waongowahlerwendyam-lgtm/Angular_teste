import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
   
  constructor(private http: HttpClient){}

  getTodos(): Observable<any[]> {                 // ← retour explicite : tableau de any
    console.log('🟡 Appel API getTodos envoyé');
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
