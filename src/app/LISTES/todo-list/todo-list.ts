import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TodoService } from '../../Services/todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.html', // adapte le nom si nécessaire
})
export class TodoList implements OnInit {
  todos: any[] = [];
  loading = true;

  constructor(
    private todoService: TodoService,
    private cdr: ChangeDetectorRef ) {} // ← Solution magique) 

  ngOnInit(): void {
    console.log('ngOnInit exécuté');
    this.todoService.getTodos().subscribe({
      next: (data: any[]) => {
        console.log('Données reçues', data);
        this.todos = data;
        this.loading = false;   // ← crucial
        console.log('loading passé à false');
      },
      error: (err: any) => {
        console.error(err);
        this.loading = false;
        this.cdr.detectChanges(); // ← Aussi en cas d'erreur
      }
    });
  }
}