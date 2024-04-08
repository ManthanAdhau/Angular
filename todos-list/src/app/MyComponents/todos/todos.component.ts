import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { AddTodoComponent } from "../add-todo/add-todo.component";
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css'],
    standalone: true,
    imports: [AddTodoComponent, TodoItemComponent, NgIf, NgFor]
})
export class TodosComponent implements OnInit {
  localItem: any;
  todos: Todo[] = [];

  constructor() {}

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      this.localItem = localStorage.getItem('todos') ;
      if (this.localItem === null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.localItem);
      }
    } else {
      console.error(
        "localStorage is not available. Make sure you're running in a browser environment."
      );
    }
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.saveTodosToLocalStorage();
    }
  }

  addTodos(todo: Todo) {
    this.todos.push(todo);
    this.saveTodosToLocalStorage();
  }

  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos[index].active = !this.todos[index].active;
      this.saveTodosToLocalStorage();
    }
  }

  private saveTodosToLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    } else {
      console.error(
        "localStorage is not available. Make sure you're running in a browser environment."
      );
    }
  }
}
