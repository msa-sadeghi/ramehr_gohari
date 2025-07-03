// var num1 = 4;
// var num2 = 3;

// if(num1 * num2 === 12){
//     console.log("ok")
// }else{
//     console.log("not ok")
// }

// num1 * num2 === 12 ? console.log("ok") : console.log("not ok");

// function showValue() {
//   var num1 = 2;
//   var num2 = 8;
//   var resultNumber = num1 + num2;
//   console.log("Result:" + resultNumber);
// }

// showValue();

// var sayHi = function () {
//   console.log("blallalala");
// };

// sayHi();

// تابعی بنویسید که سه عدد رو بگیره و میانگین اونا رو محاسبه کرده و نشون بده

// function sumValue(num1 = 1, num2 = 2) {
//   return num1 + num2;
// }

// console.log(sumValue());
// console.log(sumValue(10, 12));

// یک برنامه ثبت نام بنویسید

// به این شکل که کاربر برای ثبت نام در سایت باید یوزرنیم و پسورد را ثبت کند

// محدودیت موجود این است که یوزرنیم حداقل باید 3 کاراکتر و پسورد حداقل باید 8 کاراکتر داشته باشد

// در غیر این صورت پیغام مناسب را به کاربر نمایش دهید

// x = "ali";
// if (x.length >= 3) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// var scores = [11, 34, 55, 66, 78, 55];

// console.log(scores[0]);
// scores[1] = 456;
// console.log(scores);

// scores.push(134, 1000);
// console.log(scores);

// scores.pop();
// console.log(scores);

// scores.splice(0, 1);
// console.log(scores);

// let new_arr = scores.filter(function (n) {
//   return n > 100;
// });

// console.log(new_arr);

// let y = [1, 2, 3, 4, 5];
// y.shift();
// console.log(y);

// delete y[2];
// console.log(y);

// var user = {
//   name: "artin",
//   family: "blalal",
// };

// console.log(user.name);
// console.log(user["name"]);

// var users = ["sara", "samin", "amir"];

// users.forEach(function (user) {
//   console.log(user);
// });

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.forEach(function (n) {
//   console.log(n * 2);
// });

// var userName = prompt("Enter User name: ");
// var users = ["sara", "samin", "amir"];

// var isValid = users.includes(userName);
// if (isValid === true) {
//   console.log(`welcome ${userName}`);
// } else {
//   console.log(`${userName} is not Valid`);
// }

var usersData = [
  { id: 1, name: "sara", age: 23 },
  { id: 2, name: "matin", age: 21 },
];

var isIn = usersData.some(function (u) {
  return u.name == "sara";
});

console.log(isIn);
var isIn = usersData.filter(function (u) {
  return u.name == "sara";
});

console.log(isIn);
