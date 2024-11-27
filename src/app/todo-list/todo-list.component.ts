import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class TodoListComponent {
  tasks: string[] = ['Einkaufen gehen', 'Angular lernen', 'Projekt starten'];
  newTask: string = 'Eingabe ....'; // Variable für das Eingabefeld

  addTask() {
    if (this.newTask.trim()) { // Verhindert leere Aufgaben
      this.tasks.push(this.newTask.trim());
      this.newTask = ''; // Eingabefeld zurücksetzen
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1); // Entfernt die Aufgabe an der angegebenen Position
  }
}