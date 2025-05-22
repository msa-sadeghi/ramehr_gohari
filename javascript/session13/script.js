const inputElement = document.querySelector("#input-field")
const colorsBoxes  = document.querySelectorAll(".color-box")
const btnSaveElement = document.querySelector("#btn-save")
const btnDeleteElement = document.querySelector("#btn-delete")
const  notesContainer = document.querySelector("#listed")

colorsBoxes.forEach(function(colorBox){
    colorBox.addEventListener(
        'click', function(event){
            let selectedColor = event.target.style.backgroundColor
            inputElement.style.backgroundColor = selectedColor
        }
    )

})

function generateNewNote(){
    let newNoteDiv = document.createElement('div')
    newNoteDiv.className = 'card shadow-sm rounded'
    let inputBg = inputElement.style.backgroundColor
    newNoteDiv.style.backgroundColor = inputBg
    let pElement = document.createElement('p')
    pElement.className = 'card-text p-3'
    pElement.innerHTML = inputElement.value
    newNoteDiv.append(pElement)
    newNoteDiv.addEventListener('click', removeNote)
    notesContainer.append(newNoteDiv)
    inputElement.value = ''
    inputElement.style.backgroundColor = "#fff"
}
function removeNote(event){
    event.target.parentElement.remove()
}


btnSaveElement.addEventListener('click',  generateNewNote)