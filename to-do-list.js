const todoList = [];

renderTodoList();

function renderTodoList(){
let todoListHTML='';

todoList.forEach((todoObject, index) =>{
  const {name, dueDate} = todoObject;
  const html = `
  <div >${name}</div>
  <div >${dueDate}</div>
  <button class="delete-button js-delete-button">
    Delete
  </button>
`;
  todoListHTML += html;
});


document.querySelector('.js-todo-list')
   .innerHTML = todoListHTML;

document.querySelectorAll('.js-delete-button')
  .forEach((deleteButton,index) =>{
    deleteButton.addEventListener('click',() =>{
      todoList.splice(index,1);
      renderTodoList();
    });
  });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click',() =>{
    addTodo();
  });

document.body.addEventListener('keydown',(event) =>{
  if(event.key==='Enter'){
    addTodo();
  }
});


function addTodo(){
 const inputElement = document.querySelector('.js-todo-name');
 const name = inputElement.value;

 const dueDateInputElement = document.querySelector('.js-todo-date');
 const dueDate = dueDateInputElement.value;

 todoList.push({
  name : name,
  dueDate : dueDate
});

 inputElement.value = '';
 dueDateInputElement.value = '';
  renderTodoList();
 
}