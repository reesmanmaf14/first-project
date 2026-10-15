document.getElementById("addTaskBtn").addEventListener("click", function () {
    const taskName = document.getElementById("newTask").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;

    if (taskName.trim() === "") {
        alert("Please enter a task name.");
        return;
    }

    const taskRow = document.createElement("tr");
    taskRow.innerHTML = `
                <td>${taskName}</td>
                <td>${dueDate}</td>
                <td>${priority}</td>
                <td><span class="status">Not Started</span></td>
                 <td><button class="deleteTaskBtn">Delete</button></td>
            `;

    document.getElementById("taskList").appendChild(taskRow);

    document.getElementById("newTask").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("priority").value = "low";

    taskRow.querySelector(".deleteTaskBtn").addEventListener("click", function () {
        taskRow.remove();
    });
});