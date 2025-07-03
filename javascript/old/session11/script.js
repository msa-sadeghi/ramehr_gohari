let togglePassword = document.querySelector(".toggle-password");
let passwordInput = document.querySelector("#password-field");

passwordInput.addEventListener('keydown', function(event){
    
})
togglePassword.addEventListener("click", function () {

    if(passwordInput.type === "password") {
        passwordInput.type = "text";
        
        togglePassword.classList.add("active");
    }
    else{
        passwordInput.type = "password";
        
        togglePassword.classList.remove("active");
    }
})