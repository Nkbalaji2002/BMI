"use strict";
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateButton = document.getElementById("calculate-button");
const resultElement = document.getElementById("result");
function calculateBMI(weight, height) {
    return weight / (height * height);
}
function displayResult(bmi) {
    let category = "";
    if (bmi < 18.5) {
        category = "UnderWeight";
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight";
    }
    else if (bmi >= 25 && bmi < 29) {
        category = "OverWeight";
    }
    else {
        category = "Obese";
    }
    resultElement.innerHTML = `Your BMI is : ${bmi.toFixed(2)} (${category})`;
}
function calculateAndDisplayBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    if (isNaN(weight) || isNaN(height) || height === 0) {
        resultElement.innerHTML = "Please Enter valid Weight and height values.";
        return;
    }
    const bmi = calculateBMI(weight, height);
    displayResult(bmi);
}
calculateButton.addEventListener("click", calculateAndDisplayBMI);
