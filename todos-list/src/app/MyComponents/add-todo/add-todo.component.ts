import { Component, Output,EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent{
title: string;
desc:string;
@Output() todoAdd : EventEmitter<Todo> = new EventEmitter
constructor(){

}
onSubmit(){
  const todo ={
    sno: 8,
    title : this.title ,
    description :this.desc,
   active: true
  }
  this.todoAdd.emit(todo);

}
}


