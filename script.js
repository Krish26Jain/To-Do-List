let todoList = ['buy milk','go to collage'];
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

       `<div>
       <span>${todoList[i]}</span>
        <button onclick="todoList.splice(${i},1);displayItems();">Delete</button>
        </div>
      `;

  }
  containerElement.innerHTML = newHtml;
}