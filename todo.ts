'use strict';

const fs = require('fs');

export class Todo {
  private _name: string;
  private _completed: boolean;

  constructor(name: string) {
    this._name = name;

    try {
      fs.appendFileSync('./user-data.txt', name + '\n');
    } catch (e) {
      console.log('Error: Unable to write in the file');
    }
  }

  public getTodo(): string {
    return this._name;
  }

  public complete(): void {
    this._completed = true;
  }

  public isCompleted(): boolean {
    return this._completed;
  }

  public todo(): string {
    return `[${this._completed ? 'x' : ' '}] ${this._name}`;
  }
}