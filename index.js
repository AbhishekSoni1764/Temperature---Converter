const temp_1 = document.querySelector(".temp-1 input");
const temp_2 = document.querySelector(".temp-2 input");
const temp_1_Unit = document.querySelector(".temp-1 select");
const temp_2_Unit = document.querySelector(".temp-2 select");
const clear_btn = document.getElementById("clearbtn")



temp_1.oninput = function () {
    let temp1UnitValue = temp_1_Unit.value;
    let temp2UnitValue = temp_2_Unit.value;
    let temp1Value = temp_1.value
    let convertedTemp = 0

 
    if (temp1UnitValue === "Celcius" && temp2UnitValue === "Fahrenheit") {
        convertedTemp = (9/5 * temp1Value) + 32
        temp_2.value = convertedTemp.toFixed(2)
    }
    else if (temp1UnitValue === "Celcius" && temp2UnitValue === "Kelvin") {
        convertedTemp = (temp1Value * 1) + 273.15
        temp_2.value = convertedTemp.toFixed(2)
    }
    else if (temp1UnitValue === "Fahrenheit" && temp2UnitValue === "Celcius") {
        convertedTemp = 5/9 * (temp1Value - 32)
        temp_2.value = convertedTemp.toFixed(2)
    }
    else if (temp1UnitValue === "Fahrenheit" && temp2UnitValue === "Kelvin") {
        convertedTemp = 5/9 * (temp1Value - 32) + 273.15
        temp_2.value = convertedTemp.toFixed(2)
    }
    else if (temp1UnitValue === "Kelvin" && temp2UnitValue === "Celcius") {
        convertedTemp = (temp1Value * 1) - 273.15
        temp_2.value = convertedTemp.toFixed(2)
    }
    else if (temp1UnitValue === "Kelvin" && temp2UnitValue === "Fahrenheit") {
        convertedTemp = 9/5 * (temp1Value - 273.15) + 32
        temp_2.value = convertedTemp.toFixed(2)
    }
    else {
        temp_2.value = temp1Value
    }
}

clear_btn.addEventListener('click' , function(){
    temp_1.value = ""
    temp_2.value = ""
})