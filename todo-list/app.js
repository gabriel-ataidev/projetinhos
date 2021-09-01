//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.todo-filter');

//event listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', checkButton);
filterOption.addEventListener('click', filterTodo);

//functions
function addTodo(e){
    e.preventDefault();
    //creating the div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //creating the li
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    newTodo.innerText = todoInput.value;
    //Save to local
    saveLocalTodos(todoInput.value);
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
function checkButton(e){
    const item = e.target;
    const todo = item.parentElement;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
        //animation
        todo.classList.add('fall');
        //remove from local storage
        removeLocalTodos(todo);
        //deleting itself
        todo.addEventListener('transitionend', () => {
            todo.remove();
        });
    }
    //check mark todo
    if(item.classList[0] === 'complete-btn'){
        todo.classList.toggle('completed');
    }
}
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach( todo => {
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex';
            break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
            break;
            case 'uncompleted':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'none';
                }else{
                    todo.style.display = 'flex';
                }
            break;
        }
    });
}

//local storage
function saveLocalTodos(todo){
    let todos;
    if (localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}
function removeLocalTodos(todo){
    let todos;
    if (localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}
function getTodos(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(todo => {
        //creating the div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //creating the li
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        newTodo.innerText = todo;
        todoInput.value = "";
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
    });
}