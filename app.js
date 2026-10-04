// 1. Select DOM Elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// 2. Main function to add a new task
function addTask() {
    const taskContent = taskInput.value.trim();

    // Prevent adding empty tasks
    if (taskContent === "") {
        alert("Please enter a valid task.");
        return;
    }

    // 3. Create structural wrapper (li element)
    const li = document.createElement('li');
    li.classList.add('task-item');

    // 4. Create the clickable task text container
    const textSpan = document.createElement('span');
    textSpan.classList.add('task-text');
    textSpan.innerText = taskContent;

    // 5. Implement event listener to toggle "complete" state on click
    textSpan.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // 6. Create the action delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'Delete';

    // 7. Implement functionality to remove structural node from DOM
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    // 8. Assemble elements and update container instantly
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // 9. Clear input field and restore focus
    taskInput.value = "";
    taskInput.focus();
}

// Event bindings
addBtn.addEventListener('click', addTask);

// Enhanced UX: Enable adding tasks upon pressing the "Enter" key
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
