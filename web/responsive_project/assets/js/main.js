function myclick(){
    var x = document.getElementById("mynav");
    if (x.className === "mynavi"){
        x.className += " responsive"
    }
    else{
        x.className = "mynavi"
    }
}