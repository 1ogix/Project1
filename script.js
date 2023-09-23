let todos = [];

const addTodo = () => {
  const todoText = document.getElementById("todo-input").value.trim();
  if (todoText !== "") {
    todos.push({ text: todoText, isEditing: false });
    displayTodos();
    document.getElementById("todo-input").value = "";
  }
};

const displayTodos = () => {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("todo-item");

    if (todo.isEditing) {
      listItem.innerHTML = `
        <input type="text" id="edit-input-${index}" value="${todo.text}">
        <button class="save-button" onclick="saveTodo(${index})">Save</button>
      `;
    } else {
      listItem.innerHTML = `
        ${todo.text}
        <button class="edit-button" onclick="editTodo(${index})">Edit</button>
        <button class="delete-button" onclick="deleteTodo(${index})">Delete</button>
      `;
    }

    todoList.appendChild(listItem);
  });
};

const deleteTodo = (index) => {
  todos.splice(index, 1);
  displayTodos();
};

const editTodo = (index) => {
  todos[index].isEditing = true;
  displayTodos();
};

const saveTodo = (index) => {
  const newText = document.getElementById(`edit-input-${index}`).value.trim();
  if (newText !== "") {
    todos[index].text = newText;
    todos[index].isEditing = false;
    displayTodos();
  }
};

displayTodos();
