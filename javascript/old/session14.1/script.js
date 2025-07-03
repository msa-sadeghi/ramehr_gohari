const titleElem = document.querySelector('#add_btn')
const todoFormElem = document.querySelector('#todo_form')
const closeBtn = document.querySelector('.header .btn')
const statusElem = document.querySelector('#no_status')
titleElem.addEventListener('click',  function(){
    
    todoFormElem.classList.add("active")
})

closeBtn.addEventListener('click', function(){
    todoFormElem.classList.remove("active")
})