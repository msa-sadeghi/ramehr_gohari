var body = document.body;
console.log(body);

document.getElementById("number2").style.backgroundColor = "red";
document.getElementsByName("li2")[0].style.backgroundColor = "green";
document.getElementsByTagName("li")[0].style.backgroundColor = "blue";

document.querySelector("ul li.test1").style.backgroundColor = "purple";

var body = document.body;

let secondChild = body.childNodes[1];
console.log(secondChild);

let comment = secondChild.childNodes[1];
console.log(comment);
let li = secondChild.childNodes[3];
console.log(li);
