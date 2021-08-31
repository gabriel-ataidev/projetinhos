//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo);

//functions
function addTodo(e){
    //creating the div
    e.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //creating the li
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    newTodo.innerText = todoInput.value;
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.classList.add('complete-btn');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completedButton);
    //trash mark button
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear todoInput value
    todoInput.value = '';
}