import { TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { FormsModule } from '@angular/forms';

describe('TodoListComponent', () => {
  let component: TodoListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TodoListComponent, FormsModule] // TodoListComponent hier importieren
    });

    const fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
  });
  
  it('sollte die Komponente erstellen', () => {
    expect(component).toBeTruthy();
  });

  it('sollte eine Aufgabe löschen', () => {
    // Arrange
    component.tasks = ['Aufgabe 1', 'Aufgabe 2'];
  
    // Act
    component.deleteTask(0);
  
    // Assert
    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0]).toBe('Aufgabe 2');
  });

  it('sollte keine leeren Aufgaben hinzufügen', () => {
    // Arrange
    component.newTask = '   '; 
  
    // Act
    component.addTask();
  
    // Assert
    expect(component.tasks.length).toBe(0);
  });

  it('sollte eine Aufgabe löschen', () => {
    component.tasks = ['Aufgabe 1', 'Aufgabe 2'];
    component.deleteTask(0);
    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0]).toBe('Aufgabe 2');
  });
});