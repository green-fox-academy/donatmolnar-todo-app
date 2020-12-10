'use strict';

const fs = require('fs');

if (process.argv[2] === '-l') {
  //list all the tasks
  console.log('list the tasks');
  

} else if (process.argv[2] === '-a') {
  //adds a new task
  console.log('adds a new task');
  let newTask: string = process.argv[3];
  console.log(newTask);
  

} else if (process.argv[2] === '-r') {
  //removes a task
  console.log('removes a task');
  let removeTask: string = process.argv[3];
  console.log(removeTask);
  

} else if (process.argv[2] === '-c') {
  //completes a task
  console.log('completes a task');
  let completedTask = process.argv[3];
  console.log(completedTask);
  
  

} else {  
console.log('\nCommand Line Todo application\n=============================\n');
console.log('Command line arguments:');
console.log('-l   Lists all the tasks');
console.log('-a   Adds a new task');
console.log('-r   Removes a task');
console.log('-c   Completes a task');
}


//let userData = fs.readFileSync('./userdata', 'utf-8');
//console.log(userData);