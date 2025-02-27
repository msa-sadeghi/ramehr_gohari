// let table = document.querySelector("table");
// console.log(table);
// let myDiv = document.querySelector("div");
// myDiv.outerHTML = "<a>my link</a>";

// console.log(myDiv.outerHTML);
let myDiv = document.querySelector("div");
// myDiv.innerHTML = myDiv.innerHTML + "<hr/>";
myDiv.innerHTML += "<hr/>";

console.log(myDiv.innerHTML);

console.log(myDiv.textContent);

myDiv.textContent = "<h1>Hello</h1>";
myDiv.innerHTML = "<h1>Hello</h1>";
