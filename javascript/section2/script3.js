const userName = document.querySelector('.username')
const password = document.querySelector('.password')
const modal = document.querySelector('.modal')

function dataValidation(){
    let userNameValue = userName.value
    let passwordValue = password.value
    if(userNameValue.length < 8 || passwordValue.length < 8){
        modal.style.display = "block"
        modal.style.background = "red"
        modal.style.display = "block"
        modal.innerText = "اطلاعات ناقص است"
    }
    else{
        modal.style.display = "block"
        modal.style.background = "green"
        modal.innerText = "اطلاعات درست است"
    }
    setTimeout(function(){
        modal.style.display = "none"
    }, 3000)
}