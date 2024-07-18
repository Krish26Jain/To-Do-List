let todoList = [
  {
    item:'buy milk',
    duedate:'18/06/2005',
  },
  {
    item:'go to collage',
    duedate:'14/10/2008',
  },
];
displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItems = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push(todoItems);
  todoList.push(todoDate);
  inputElement.value = '';
  dateElement.value = '';

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';


  for (let i = 0; i< todoList.length; i++) {
    // let item =  todoList[i].item;
    // let duedate = todoList[i].duedate;
    let{item, duedate} = todoList[i];
    newHtml += 
       `
        <span>${item}</span>
       <span>${duedate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i},1);displayItems();">Delete</button> 
      `;

  }
  containerElement.innerHTML = newHtml;
}