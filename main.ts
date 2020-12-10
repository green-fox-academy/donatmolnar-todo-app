'use strict';

import { TodoList } from './todo-list';
import { Todo } from './todo';

const fs = require('fs');

let todoList = new TodoList;

//todoList.getList()[0].complete();


if (process.argv[2] === '-l') {
  //list all the tasks
  console.log('\n' + todoList.printList());
  
} else if (process.argv[2] === '-a') {
  //adds a new task
  todoList.addToTodoList(new Todo (process.argv[3]));
  console.log('new task added successfully');
  console.log(todoList.printList());

} else if (process.argv[2] === '-r') {
  //removes a task
  todoList.remove(process.argv[3]);
  
  console.log(todoList.printList());
  

} else if (process.argv[2] === '-c') {
  //completes a task
  console.log('completes a task');
  let completedTask = process.argv[3];
  console.log(completedTask);
  
} else if (process.argv[2] !== undefined) {
 //invalid argument
  console.log('Unsupported argument');
  
} else {  
console.log('\nCommand Line Todo application\n=============================\n');
console.log('Command line arguments:');
console.log('-l   Lists all the tasks');
console.log('-a   Adds a new task');
console.log('-r   Removes a task');
console.log('-c   Completes a task');
}
