var formE1 =  document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event){
    event.preventDefault();

    var listItemE1 = document.createElement("li");
    listItemE1.textContent = "This is a new task.";
    listItemE1.className = "task-item";
    tasksToDoEl.append(listItemE1);
};

formE1.addEventListener("click", createTaskHandler);