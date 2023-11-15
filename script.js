window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const tableBody = document.querySelector("#task-table-body");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${generateTaskID()}</td>
            <td><span class="task-text">${task}</span><input type="text" class="edit-input" style="display:none;"></td>
            <td>
                <span class="task-status">Todo</span>
                <select class="status-select" style="display:none;">
                    <option value="Todo">Todo</option>
                    <option value="Inprogress">Inprogress</option>
                    <option value="Completed">Completed</option>
                </select>
            </td>
            <td>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
                <button class="save-button" style="display:none;">Save</button>
            </td>
        `;

        tableBody.appendChild(newRow);

        input.value = "";

        const editButton = newRow.querySelector(".edit-button");
        const deleteButton = newRow.querySelector(".delete-button");
        const taskText = newRow.querySelector(".task-text");
        const editInput = newRow.querySelector(".edit-input");
        const taskStatus = newRow.querySelector(".task-status");
        const statusSelect = newRow.querySelector(".status-select");
        const saveButton = newRow.querySelector(".save-button");

        editButton.addEventListener('click', () => {
            
            taskText.style.display = 'none';
            editInput.style.display = 'block';
            editInput.value = taskText.textContent;
            editInput.focus();

            
            taskStatus.style.display = 'none';
            statusSelect.style.display = 'block';

            
            saveButton.style.display = 'block';
        });

        saveButton.addEventListener('click', () => {
        
            taskText.style.display = 'block';
            editInput.style.display = 'none';
            taskText.textContent = editInput.value;

            
            taskStatus.style.display = 'block';
            statusSelect.style.display = 'none';
            taskStatus.textContent = statusSelect.value;

            
            saveButton.style.display = 'none';
        });

        deleteButton.addEventListener('click', () => {
            if (confirm("Are you sure you want to delete this task?")) {
                newRow.remove();
            }
        });
    });

    function generateTaskID() {
        return Math.floor(Math.random() * 1000);
    }
});
