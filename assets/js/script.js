var buttonE1 =  document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

createTaskHandler = function(){
    var listItemE1 = document.createElement("li");
    listItemE1.textContent = "This is a new task.";
    listItemE1.className = "task-item";
    tasksToDoEl.append(listItemE1);
};

buttonE1.addEventListener("click", createTaskHandler);