// let ulElem = document.querySelector("ul")
// let inputElem = document.querySelector("input")
// let formElem = document.querySelector("form")
// formElem.addEventListener("submit", function(event){
// event.preventDefault()
// })

// inputElem.addEventListener("keydown", function(event){
//     let val = event.target.value
//     if(event.key === "Enter"){
//         let newLi = document.createElement("li")
//         newLi.className = "list-group-item d-flex justify-content-between align-items-center"
//         let newSpan = document.createElement("span")
//         newSpan.innerHTML = val
//         let newTrash = document.createElement("span")
//         newTrash.className = "fa fa-trash-o delete"
//         newLi.append(newSpan, newTrash)
//         ulElem.append(newLi)
//         inputElem.value = ""

//         newTrash.addEventListener("click", function(event){
// event.target.parentElement.remove()
//         })      
//     }
// })

// function myFunction(){
//     console.log("right click")
// }

let editorElem = document.getElementById('editor');
editorElem.addEventListener("copy", function(){
    console.log("copy")
})