let powerFlag = false;
function addToCalculator(val) {
  document.getElementById("displayResult").value += val;
}

function finilize() {
  if (powerFlag) {
    let val = document.getElementById("displayResult").value.split("^");
    document.getElementById("displayResult").value = Math.pow(val[0], val[1]);
  } else {
    document.getElementById("displayResult").value = eval(
      document.getElementById("displayResult").value
    );
  }
}

function mathCalculator(functionName) {
  if (functionName == "pow") {
    powerFlag = true;
    document.getElementById("displayResult").value += "^";
  } else {
    let val = document.getElementById("displayResult").value;
    document.getElementById("displayResult").value = Math[functionName](val);
  }
}
