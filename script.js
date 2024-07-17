let todoList = [];
displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let todoItems = inputElement.value;
  todoList.push(todoItems);
  inputElement.value = '';

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';


  for (let i = 0; i< todoList.length; i++) {
    newHtml += 
       `<p>${todoList[i]}</p>
        <button>Delete</button>
      `;

  }
  containerElement.innerHTML = newHtml;
}