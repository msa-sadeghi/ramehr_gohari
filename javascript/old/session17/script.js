const users = [
    {name: "ali", family:"rezaei"},
    {name: "sara", family:"rezaei"},
    {name: "roze", family:"rezaei"},
    {name: "mary", family:"rezaei"},
    {name: "armin", family:"rezaei"},
    {name: "arman", family:"rezaei"},
    {name: "ali", family:"rezaei"},
    {name: "arad", family:"rezaei"},
    {name: "ali", family:"rezaei"},
    {name: "arezo", family:"rezaei"},
    {name: "ali", family:"rezaei"},
    {name: "ali", family:"rezaei"},
    {name: "artin", family:"rezaei"},
    {name: "ali", family:"rezaei"},
    {name: "nikan", family:"rezaei"}
]

let usersList = document.querySelector("#list")
let paginationElement = document.querySelector("#pagination")
totalCount = 5
currentPage = 1


function showusers(currentPage){
    usersList.innerHTML = ""
    let endIndex = currentPage * totalCount
    let startIndex = endIndex - totalCount
    let paginatedUsers = users.slice(startIndex, endIndex)
    paginatedUsers.forEach(function(user){
        let userElem = document.createElement("div")
        userElem.classList.add("item")
        userElem.innerHTML = user.name + " " + user.family
        usersList.append(userElem)
    })
}
function generateButtons(){
    let btnCount = users.length / totalCount
    for(let i = 1; i < btnCount + 1; i++){
        let button = document.createElement("button")
        button.innerHTML = i
        button.addEventListener("click",  function(){
            showusers(i)
        })
        paginationElement.append(button)
    }
}
showusers(currentPage)
generateButtons()