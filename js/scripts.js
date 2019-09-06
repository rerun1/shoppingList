// Business logic for TaskList object

function TaskList() {
  this.tasks = [];
  this.currentId = 0;
  this.completedTasks = [];
}
TaskList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}
TaskList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
TaskList.prototype.findTask = function(id) {
  for (var i = 0; i < this.tasks.length; i ++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        return this.tasks[i];
      }
    }
  };
  return false;
}

TaskList.prototype.deleteTask = function(id) {
  for (var i = 0; i < this.tasks.length; i ++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        this.completedTasks.push(this.tasks[i]);
        delete this.tasks[i];
        return true;
      }
    }
  };
  return false;
}


// Business logic for Task object
function TaskItem(string) {
  this.task = string
}


// User Interface logic
var taskList = new TaskList();

function displayTasks(taskListToDisplay){
  var taskListHtml = $("ul#displayTasks");
  var htmlForTaskItems = "";
  taskListToDisplay.tasks.forEach(function(taskItem){
    htmlForTaskItems += "<li id=" + taskItem.id + ">" + taskItem.task +"</li>";
  });
  taskListToDisplay.completedTasks.forEach(function(taskItem){
    htmlForTaskItems += "<li id=" + taskItem.id + "> Done!" + taskItem.task +"</li>";
  });
  taskListHtml.html(htmlForTaskItems);
};
function showTaskToMarkComplete(taskId) {
  var taskItem = taskList.findTask(taskId);
  $("#userTaskToMarkComplete").show();
  $(".task").html(taskItem.task);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='markComplete' id="+ taskItem.id + ">Mark Complete</button>");
};
function markTaskComplete(taskId) {
  taskList.deleteTask(taskId);
  $("#userTaskToMarkComplete").hide();
  displayTasks(taskList);
};
function attachTaskListeners() {
  $("ul#displayTasks").on("click", "li", function() {
    showTaskToMarkComplete(this.id);
  });
  $("#buttons").on("click", ".markComplete", function() {
    markTaskComplete(this.id);
  });
};
function resetForm(){
  $("input#inputTask").val("");
}
$(document).ready(function(){
  attachTaskListeners();
  $("form#taskForm").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#inputTask").val();

    var newTask = new TaskItem(inputtedTask);

    taskList.addTask(newTask);

    displayTasks(taskList);

    console.log(taskList);


    resetForm();

  });

});
