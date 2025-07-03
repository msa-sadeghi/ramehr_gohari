let contriesData = {
Iran:["...","Tabriz", "Tehran", "Shirza", "Esfahan"],
Turkey:["...","Istanbul", "Ankara", "Izmir", "Antalya"],
US:["...","New York", "Los Angeles", "Chicago", "Houston"],
}

let countrySelectBox = document.querySelector(".countrySelect")
let citySelectBox = document.querySelector(".citySelect")

countrySelectBox.addEventListener('change',function(){
    let selectedCountry = countrySelectBox.value;
    let cities = contriesData[selectedCountry];
    citySelectBox.innerHTML = ""; // Clear previous options

    cities.forEach(function(city){
        let option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelectBox.appendChild(option);
    })
})