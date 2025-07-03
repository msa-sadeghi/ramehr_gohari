// var userName = prompt("enter the username:")

// users = ['ali', 'sara']

// var loginFlag = false

// for(var i = 0; i < users.length; i++){
//     if (users[i] === userName){
//         loginFlag = true
//     }
// }

// console.log("Flag", loginFlag);
// if(loginFlag){
//     alert("user is valid")
// }else{
//     alert("user is not valid")
// }


let userName = prompt("enter the username")

let userTitle = document.getElementById("title")
userTitle.innerHTML = `<div style="background-color:green; width:100%">${userName}</div>`

var userClass = document.getElementsByClassName("my-class")[0]
userClass.innerHTML = `<div style="background-color:green; width:100%">${userName}</div>`

var userli = document.getElementsByTagName('li')[0]
userli.innerHTML = `<div style="background-color:green; width:100%">${userName}</div>`

var userp = document.getElementsByName('my-p')[0]
userp.innerHTML = `<div style="background-color:green; width:100%">${userName}</div>`

var qr = document.querySelector('#r')
qr.innerHTML = `<div style="background-color:green; width:100%">${userName}</div>`

var qra = document.querySelectorAll('#r')[0]
qra.innerHTML = `<div style="background-color:green; width:100%">${userName}</div>`