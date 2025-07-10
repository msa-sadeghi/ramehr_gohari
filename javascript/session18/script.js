// const boxElem = document.querySelector('.box')
// boxElem.insertAdjacentHTML('beforeend', '<li>salaam</li>')

// let user={
//     id:1,
//     name:'sara'
// }

// console.log("before", user)
// console.log("delete", delete user.name)
// console.log("after", user)

// const usersList = document.querySelector("#users")
// let usersArray = [
//     'sara',
//     'sadaf'
// ]
// const myDiv = document.createDocumentFragment()
// usersArray.forEach(function(user){
//     newli = document.createElement('li')
//     newli.innerHTML = user
//     myDiv.append(newli)
// })

// usersList.appendChild(myDiv)

// window.console.log("blalal")

// let div = document.querySelector('div')
// console.log(div.clientHeight)
// console.log(div.clientWidth)

let scrollElem = document.querySelector("#scroll")
window.addEventListener("scroll", function(){
    let scrollTop = this.window.scrollY
    let documentHeight = this.document.body.clientHeight
    let windowHeight = this.window.innerHeight
    
    let scrollPercent = scrollTop / (documentHeight - windowHeight)
    
    scrollElem.style.width = scrollPercent * 100 + '%'

})