// function loadHandler(){
//     console.log("loaded")
// }

// window.addEventListener('load', loadHandler)

// window.addEventListener('DOMContentLoaded', function(){
//     console.log("blalalal")
// })
// const loaderElem = document.querySelector('.loader')
// window.addEventListener('load', function(){
//     loaderElem.classList.add('hidden')
// })

// function myfunction(){
//     console.log("**********")
// }
function mouseMove(){
   
    console.log("balalalalal")
}
const boxElem = document.getElementById('box')
const btnElem = document.getElementById('btn')
btnElem.addEventListener('click', function(){
    boxElem.removeEventListener('mousemove', mouseMove)
    console.log("event")
})

boxElem.addEventListener('mousemove', mouseMove)