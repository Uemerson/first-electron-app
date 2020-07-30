onload = () => {
  let taskList = [];

  document.getElementById("task").onkeypress = (e) => {
    if (e.keyCode === 13) {
      newTask();
    }
  };

  document.getElementById("add").onclick = () => {
    newTask();
  };

  newTask = () => {
    let task = document.getElementById("task").value;

    task = task.replace(/\s\s+/g, " ");

    if (task === "" || task === " ") {
      alert("Task empty or null.");
      return;
    }

    const checkTaskExits = taskList.find((taskFind) => taskFind === task);

    if (!checkTaskExits) {
      taskList.push(task);

      updateTask();

      document.getElementById("task").value = null;
    } else {
      alert("Task already created.");
    }
  };

  updateTask = () => {
    document.getElementById("taskList").innerHTML = "";

    taskList.map((task) => {
      document.getElementById("taskList").innerHTML += `
          <li>
            <span>${task}</span>
              <button type="button" class="btn-transparent" id="remove" onClick="deleteTask('${task}')">
                <i class="fa fa-trash-o fa-lg" id="remove"></i>
              </button>
          </li>
        `;
    });
  };

  deleteTask = (taskRemove) => {
    taskList = taskList.filter((task) => {
      return task !== taskRemove;
    });

    updateTask();
  };
};
