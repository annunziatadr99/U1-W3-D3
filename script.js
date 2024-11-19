const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value;
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "ELIMINA";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
      taskList.removeChild(li);
    };

    taskList.appendChild(li);
    li.appendChild(deleteBtn);

    taskInput.value = "";
  }
});

taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "li") {
    event.target.classList.toggle("completed");
  }
});
