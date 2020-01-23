import { Component } from '@angular/core';
import { ITodo } from './todo/todo.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab-1';
  hideTitle = true;


  todos: ITodo[] = [];

  addTask(newTask = "") {
    if (newTask) {
      this.todos.push({ completed: false, task: newTask });
    }
  }
  onDeleted(index: number) {
    console.log('deleting', index)
    this.todos.splice(index, 1);
    this.todos = [...this.todos];
  }

}
