import { Component, Input, OnInit, EventEmitter, Output,  } from '@angular/core';
import { NgClass } from '@angular/common';


import { Todo } from '../../Todo';



@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent implements OnInit {
[x: string]: any;
  @Input() todo: Todo;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheakbox: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('on click has been triggerd');
  }
  onCheckboxClick(todo:Todo){
    console.log(todo)
    this.todoCheakbox.emit(todo);
  }

}
