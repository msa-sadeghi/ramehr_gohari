

function dragStartHandler(event){
    let selectElem = event.target.id
    event.dataTransfer.setData('myItem', selectElem)

}

function dropHandler(event){
    let id = event.dataTransfer.getData('myItem')
    let targetElem =  document.getElementById(id)
    event.target.append(targetElem)

    
}
function dragOverHandler(event){
    event.preventDefault()
}
