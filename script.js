document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);
    todoList.addEventListener('click', handleTodoClick);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.className = 'todo-item';
            li.innerHTML = `
                <span>${todoText}</span>
                <div>
                    <input type="checkbox" class="check-btn">
                    <button class="delete-btn">✖️</button>
                </div>
            `;
            todoList.appendChild(li);
            todoInput.value = '';
        }
    }

    function handleTodoClick(e) {
        if (e.target.classList.contains('delete-btn')) {
            const item = e.target.closest('.todo-item');
            todoList.removeChild(item);
        } else if (e.target.classList.contains('check-btn')) {
            const item = e.target.closest('.todo-item');
            item.classList.toggle('completed');
        }
    }
});