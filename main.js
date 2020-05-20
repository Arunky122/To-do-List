//Selectors
var todoInput = document.querySelector('.list-input');
var todoBtn = document.querySelector('#subBtn')
var todoList = document.querySelector('.list-items');





//Event Listeners
todoBtn.addEventListener('click', addList);
todoList.addEventListener('click',deleteCheck);




//function
function addList(e){
    e.preventDefault();

    //create div in ul
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create list in the div

    const todoItem = document.createElement('li');
    todoItem.classList.add('item');
    todoItem.innerHTML= todoInput.value;
    todoDiv.appendChild(todoItem);


    // create completed button 

    const comBtn = document.createElement('button');
    comBtn.innerHTML = '<i class = "fas fa-check"></i>';
    comBtn.classList.add('complete-btn');
    todoDiv.appendChild(comBtn);

    // create delete button 

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class = "fas fa-trash"></i>';
    delBtn.classList.add('delete-btn');
    todoDiv.appendChild(delBtn);


    // Attach this div to the ul
    todoList.appendChild(todoDiv);

    //clear the input 
    todoInput.value="";


}

// Deleting a list 
function deleteCheck(e){
    e.preventDefault();
    const item = e.target;

    if(item.classList[0]==='delete-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
}
