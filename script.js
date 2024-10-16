const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value;
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  }
});

taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});
