import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true, // AppComponent ist ebenfalls Stand-alone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [TodoListComponent] // Hier muss die To-Do-Komponente hinzugefügt werden
})
export class AppComponent {
  title = 'angular-todo-app';
}