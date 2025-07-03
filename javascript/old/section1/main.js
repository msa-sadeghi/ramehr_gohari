// var fruits = ["apple", "banana", "grape", "aa" ,"a"];
// console.log(typeof fruits)
// console.log(fruits instanceof Array)
// console.log(Array.isArray(fruits))

// for(var i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// fruits.push("something")
// console.log(fruits)
// console.log(fruits.length)

// function myF(item){
//     for(var i =0; i < item.length; i++){
//         console.log(item[i])
//     }
// }

// myF(fruits)
// fruits.forEach(
//     function(item, index){
//         console.log(item, index)
// }
// )

// var new_arr = fruits.filter(function(value){
//     return value.length > 4
// });
// console.log(new_arr)

var persianChars = {
  83: "س",
};
function load() {
  alert("خوش آمدید");
}

function keyDown(event) {
  if (event.key === "s" || event.key === "S") {
    event.preventDefault();
    event.target.value += persianChars[event.keyCode];
  }
}

function clicked(event) {
  console.log(event);
}
function inputChanger(event) {
  console.log(event.target.value);
}
function mouseover(event) {
  console.log(event);
}
