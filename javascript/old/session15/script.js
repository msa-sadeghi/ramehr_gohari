const inputElem = document.getElementById('itemInput')
const addButtonElem = document.getElementById('addButton')
const clearButtonElem = document.getElementById('clearButton')
const todoListElem = document.getElementById('todoList')

todosArray = []

function addnewTodo(){
    let newtodoTitle = inputElem.value
    let newTodoObj = {
        id:todosArray.length + 1,
        title:newtodoTitle,
        complete:false
    }
    todosArray.push(newTodoObj)
    todosGenerator(todosArray)
    inputElem.value = ''
    setLocalStorage(todosArray)

}

function setLocalStorage(items){
    localStorage.setItem('todos', JSON.stringify(items))
}
function todosGenerator(todosArray){

    todosArray.forEach(element => {
        let newTodoLiItem = document.createElement("li")
    newTodoLiItem.className = 'completed well'

    let newTodoLabelElem = document.createElement("label")
    newTodoLabelElem.innerHTML = element.title
    
    newTodoCompleteButton = document.createElement("button")
    newTodoCompleteButton.className = "btn btn-success"
    newTodoCompleteButton.innerHTML = "Complete"
    
    newTodoDeleteButton = document.createElement("button")
    newTodoDeleteButton.className = "btn btn-danger"
    newTodoDeleteButton.innerHTML = "Delete"
    
    newTodoLiItem.append(newTodoLabelElem, newTodoCompleteButton, newTodoDeleteButton)

    todoListElem.append(newTodoLiItem)
    });
    
}

addButtonElem.addEventListener('click', addnewTodo)