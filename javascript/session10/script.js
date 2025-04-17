
const convertor = document.getElementById("converter")
const result = document.querySelector(".result")
const resetButton = document.querySelector('.resetButton')
const convertButton = document.querySelector('.convertButton')
const changeButton = document.querySelector('.changeButton')
const firstValue = document.querySelector('.C')
const secondValue = document.querySelector('.F')
function convert(){
if (convertor.value === ''){
    result.innerHTML = 'مقدار صحیح را وارد نمائید'
    result.style.color = '#993300'
}else{
    
    if(firstValue.innerHTML === '°C'){
        let resultValue = (convertor.value * 1.8) + 32
        result.style.color = 'rgb(255, 255, 102)'
        result.innerHTML = convertor.value  + '°C To ' + resultValue + '°F'
    }else{
        let resultValue = (convertor.value -32) * 5/9
        result.style.color = 'rgb(255, 255, 102)'
        result.innerHTML = convertor.value  + '°F To ' + resultValue + '°C'
    }

}
}

function reset(){
    console.log("yessss")
    convertor.value = ''
    result.innerHTML = ''
}


function swap(){

}

resetButton.addEventListener('click', reset)
convertButton.addEventListener('click', convert)

