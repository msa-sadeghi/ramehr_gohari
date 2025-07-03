const userName = document.querySelector('.username')
const password = document.querySelector('.password')
const userspan = document.getElementById('userspan')
const passwordspan = document.getElementById('passwordspan')

function userValidation(){
    let userNameValue = userName.value
    let passwordValue = password.value
    if(userNameValue.length < 8 ){
        userspan.style.display = "block"
        userspan.style.background = "red"
        userspan.style.display = "block"
        userspan.innerText = "اطلاعات ناقص است"
    }
    else{
        userspan.style.display = "none"
    }
    
}
function passValidation(){
    let userNameValue = userName.value
    let passwordValue = password.value
    
    if(passwordValue.length < 8 ){
        passwordspan.style.display = "block"
        passwordspan.style.background = "red"
        passwordspan.style.display = "block"
        passwordspan.innerText = "اطلاعات ناقص است"
    }
    else{
        passwordspan.style.display = "none"
    }
}