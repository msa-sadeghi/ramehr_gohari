var myElem = document.getElementById("MyClockDisplay");
function clockRunner() {
  var options = { hour12: true };
  var date = new Date();
  var d = date.toLocaleString("en-US", options);
  clock = d.split(",")[1];
  var times = clock.split(":");

  var hour = times[0];
  var minute = times[1];
  var second_pm = times[2].split(" ");
  var second = second_pm[0];
  var am_pm = second_pm[1];
  setTimeout(clockRunner, 1000);
  var clock = hour + ":" + minute + ":" + second + " " + am_pm;
  myElem.textContent = clock;
}
clockRunner();

// var my = function () {
//   console.log("hi");
//   setTimeout(my, 5000);
// };

// my();

// setInterval(function () {
//   console.log("*");
// }, 1000);
