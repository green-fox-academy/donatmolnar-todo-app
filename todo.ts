'use strict';

export class Todo {
  private _name: string;
  private _completed: boolean;

  constructor(name: string) {
    this._name = name;
  }

  public getTodo(): string {
    return this._name;
  }

  public complete(): void {
    this._completed = true;
  }

  public getCompleted(): boolean {
    return this._completed;
  }

  public todo(): string {
    return `[${this._completed ? 'x' : ' '}] ${this._name}`;
  }
}