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

 
 todos : ITodo[] = [
    {
      completed: false,
      task: 'take out trash'
    },
    {
      completed: true,
      task:'walk the dog'
    },
    {
      completed: false,
      task: 'Do the dishes'
    },
    {
      completed: true,
      task: 'buy new car!'
    }

  ];
}
