
#### Create To Do List with Objects
#### _**by Suzi Rubino — September 5th, 2019**_
<br>

## Description
Web program a allows users to add tasks to create a list of things to do and to indicate a task is done.

Uses jQuery to remove the task from the list.

Behavior — plain English	Input	Output
Program contains a constructor that creates a TaskList object containing a key value that is an array for tasks		function TaskList(task) {this.tasks=[]}
Program contains a constructor that creates a Task object containing a string representing the task	function Task(newTask) {this.task};
var testTask = new Task (task) {this.task=“”};
console.log(testTask);
	testTask = Task{this.task=“Make List”}
Program contains global variable representing new TaskList object	var testTaskList = new TaskList();	testTaskList = TaskList{tasks: Array(0)};
Program contains a method prototype on this TaskList object that adds tasks as strings to the TaskList object’s tasks array	var testTask = Task{this.task=“Make List”};
TaskList.prototype.addTask = function(task) {this.tasks.push(task);}
testTaskList.addTask(testTask);	testTaskList = TaskList{tasks: Array(1)}
Multiple tasks can be pushed to this new TaskList object;	var testTask = Task{this.task=“Make List”};
testTaskList.addTask(testTask);
var testTask2 = new Task(“Program list”);
testTaskList.addTask(testTask2);
console.log(testTaskList);	testTaskList = TaskList{tasks: Array(2)}
Program assigns a unique id to each task by using a new TaskList key value of this.currentId to the TaskList constructor and using a prototype method on the TaskList to assign an ID to the key value of id to the Task object and steps up in incrementing steps as each task is added	TaskList.prototype.assignId = function(){this.currentId += 1; return this.currentId;}
function TaskList(task) {this.tasks=[], this.currentId = 0}
var testTask = “Make list”;
testTaskList.addTask(testTask);
console.log(testTaskList);
console.log(testTask);	testTaskList = TaskList{tasks: Array(1) currentId=0}; testTask = Task{this.task = “Make list”, this.id = 1}
Multiple tasks can be pushed to this new TaskList object and each will have a unique key value id for the task;	var testTask = Task{this.task=“Make List”};
testTaskList.addTask(testTask);
var testTask2 = new Task(“Program list”);
testTaskList.addTask(testTask2);
console.log(testTaskList);	testTaskList = TaskList{tasks: Array(2) currentId=0}; testTask = Task{this.task = “Make list”, this.id = 1} testTask2 = Task{this.task = “Program list”}
Program contains prototype method to find task by id in the tasks array and return the task	TaskList.prototype.findTask = function(id){ for(var… return task
Program contains prototype method for deleting the task once it is found	TaskList.protoype.deleteTask = function(id) {
Program contains user interface logic to display task list and option for deleting		


<br>

## Objectives
- [] JavaScript business logic and user interface logic are separate.
- [] Variable names are descriptive and use lower camel case (e.g. myVariableExample).
- [] Code is clean, well-refactored, and easy-to-read. This includes correct indendation, spacing, and including only necessary comments and debugging tools.
- [] Application implements a for loop and works as expected.
All previous objectives have been met.
- [] Project is broken down into "plain English" specs, listed in README.
- [] Project is in a presentable, portfolio-quality state.
- [] Practice styling with imagery and fonts

<br>

## Current Screenshot for Reference
<br>

![alt text](https://raw.githubusercontent.com/rerun1/shoppingList/master/img/screenShot8-10-19.png)
<br>
<br>

## Setup/Installation Requirements
* Clone this github repository
* Open index.html in a browser
<br>

## Known Bugs
 There are no known bugs.
 <br>

## Support and Contact Details
Please contact Suzi Rubino at suzirubino@gmail.com or contribute your solution to code. Thank you!
<br>

## Technologies Used
1. html
2. CSS and Bootstrap
3. github
4. javascript and Jquery library

<br>

### License
MIT License

Copyright (c) 2019 Suzi Rubino

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
