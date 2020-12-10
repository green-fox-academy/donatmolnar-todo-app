'use strict';

import { Todo } from "./todo";

const fs = require('fs');

export class TodoList {
  private _todoList: Todo [];

  constructor() {
    this._todoList = [];
  }

  public addToTodoList(todo: Todo): void {
    this._todoList.push(todo);
  }

  public getList(): Todo [] {
    try {
      //read from file to print todo
      this._todoList = Object.values(fs.readFileSync('./user-data.txt', 'utf-8').split('\n'));
      return this._todoList;
    } catch (e) {
      console.log('Error at getList(): unable to read user-data.txt');
    }
  }

  public printList(): string {
    try {
      //read from file to print todo
     this._todoList = Object.values(fs.readFileSync('./user-data.txt', 'utf-8').split('\n'));
     //creates this format '1. [ ] Walk the dog  || 2. [x] Buy milk'
     return this._todoList
      .map((todo, index) => `${index + 1}. [${this._todoList[index].isCompleted ? 'x' : ' '}] ${this._todoList[index]}`)
      .join('\n');
    } catch (e) {
      console.log('Error at printList(): unable to read user-data.txt');
    }
  }

  public remove(input: string): void {
    try {
      this._todoList = Object.values(fs.readFileSync('./user-data.txt', 'utf-8').split('\n'));
      console.log(this._todoList.toString().replace(','+ input, '').replace(',', '\n'));
      fs.writeFileSync('./user-data.txt', this._todoList.toString().replace(','+ input, '').replace(',', '\n'));
  } catch (e) {
    console.log('Error at remove(): unable to read user-data.txt');
  }
  }

}