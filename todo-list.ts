'use strict';

import { Todo } from "./todo";

export class TodoList {
  private _todoList: Todo [];

  constructor() {
    this._todoList = [];
  }

  addTodo(todo: Todo): void {
    this._todoList.push(todo);
  }

  getList(): Todo[] {
    return this._todoList;
  }

  printList(): string {
    return this._todoList
      .map((todo, index) => `${index + 1}. ${todo.todo()}`)
      .join('\n');
  }
  
}