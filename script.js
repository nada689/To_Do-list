var taskInput = document.getElementById("todo-input");
var searchInput = document.getElementById("search");
var TasksList;
if (localStorage.getItem("theTasks") == null) {
  TasksList = [];
} else {
  TasksList = JSON.parse(localStorage.getItem("theTasks"));
  displayTasks(TasksList);
}

function addTasks() {
  var Tasks = {
    name: taskInput.value,
  };
  if (taskInput.value != "") {
    TasksList.push(Tasks);
    displayTasks(TasksList);
    localStorage.setItem("theTasks", JSON.stringify(TasksList));
    clearForm();
  }
}
function displayTasks(anArray) {
  var cart = "";
  for (var i = 0; i < anArray.length; i++) {
    cart += `<tr>
               <td>${i + 1}</td>
               <td>${anArray[i].name}</td>
               <td><input type="checkbox" name="done" id="done"></td>
               <td><button onclick="updateTasks(${i})" class="warning"> Update</button></td>
               <td><button onclick="deleteTasks(${i})" class="danger"> Delete</button></td>
            </tr>`;
  }
  document.getElementById("tableTasks").innerHTML = cart;
}

function clearForm() {
  taskInput.value = "";
}
function deleteTasks(i) {
  TasksList.splice(i, 1);
  localStorage.setItem("theTasks", JSON.stringify(TasksList));
  displayTasks(TasksList);
}

function searchTasks() {
  var word = searchInput.value;
  var newTaskss = [];
  for (var i = 0; i < TasksList.length; i++) {
    if (TasksList[i].name.toLowerCase().includes(word.toLowerCase())) {
      newTaskss.push(TasksList[i]);
    }
  }
  displayTasks(newTaskss);
}
function updateTasks(i) {
  taskInput.value = TasksList[i].name;
  deleteTasks(i);
  localStorage.setItem("theTasks", JSON.stringify(TasksList));
  document.getElementById("Add Tasks").innerHTML = "Save";
}
