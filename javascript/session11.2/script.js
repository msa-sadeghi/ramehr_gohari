const contextMenu = document.getElementById('contextMenu')


document.body.addEventListener('contextmenu', function(event){
    event.preventDefault()
    if (contextMenu.style.display === "none"){

        contextMenu.style.display = "block"
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
    }else{
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'

    }
})



document.body.addEventListener("click", function(event){
    contextMenu.style.display = "none"
})

document.body.addEventListener("keydown", function(event){
if (event.key === 'Escape'){
    contextMenu.style.display = "none"
}
})