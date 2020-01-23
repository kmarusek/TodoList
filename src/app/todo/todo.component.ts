import { Component, Input, EventEmitter, Output } from '@angular/core';

export interface ITodo {
  completed: boolean;
  task: string;
}

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements ITodo {

  @Input() completed : boolean;
 
  @Input() task : string;

  @Output() delete = new EventEmitter<boolean>();

  constructor() { }

   deleted() {
    this.delete.emit(true);
    }

   addLine(){
     this.completed = true
   }

  ngOnInit() {
  }

}
