var _a, _b, _c, _d, _e, _f, _g, _h;
function convertTemperature() {
    const celsiusInput = document.getElementById("celsiusInput");
    const celsiusInputValue = +celsiusInput.value;
    // Logic for conversion
    const fahrenheit = (celsiusInputValue * 9) / 5 + 32;
    const fahrenheitOutput = document.getElementById("fahrenheitOutput");
    fahrenheitOutput.textContent = `${fahrenheit} F`;
    // After successfully get the value just empty the input
    celsiusInput.value = "";
}
// Array element sum
const sumArray = () => {
    const arrayInput = document.getElementById("arrayInput");
    const arrayInputValue = arrayInput.value;
    // '1,2,3'
    const convertedArray = arrayInputValue.split(",");
    // ["1", "2", "3"] +"1" or parseInt("1") or Number("1") 1
    let sum = 0;
    convertedArray.forEach((currElem) => {
        sum += +currElem;
        // console.log(typeof arrayInputValue);
    });
    const sumOutput = document.getElementById("sumOutput");
    sumOutput.textContent = String(sum);
    // After successfully get the value just empty the input
    arrayInput.value = "";
};
// Avg of array element.
const avgArray = () => {
    const avgArrayInput = document.getElementById("avgArrayInput");
    const avgArrayInputValue = avgArrayInput.value;
    const convertedAvgArray = avgArrayInputValue.split(",");
    let avgSum = 0;
    convertedAvgArray.forEach((currElem) => {
        avgSum += +currElem / convertedAvgArray.length;
    });
    const avgArrayOutput = document.getElementById("avgArrayOutput");
    avgArrayOutput.textContent = String(avgSum);
    // After successfully get the value just empty the input
    avgArrayInput.value = "";
};
// Even element array
const evenElemArray = () => {
    const evenArrayInput = document.getElementById("evenArrayInput");
    const evenArrayInputValue = evenArrayInput.value;
    const convertedEvenArray = evenArrayInputValue.split(",");
    const newEvenArray = [];
    convertedEvenArray.forEach((currElem) => {
        if (+currElem % 2 === 0) {
            newEvenArray.push(currElem);
        }
    });
    const evenArrayOutput = document.getElementById("evenArrayOutput");
    evenArrayOutput.textContent = String(newEvenArray);
    // After successfully get the value just empty the input
    evenArrayInput.value = "";
};
// ReverseString
const reverseString = () => {
    const strInput = document.getElementById("strInput");
    const strInputValue = strInput.value;
    let rev = "";
    for (let i = strInputValue.length - 1; i >= 0; i--) {
        rev += strInputValue[i];
    }
    const reverseStringOutput = document.getElementById("reverseStringOutput");
    reverseStringOutput.textContent = `${rev} 🤣`;
    // After successfully get the value just empty the input
    strInput.value = "";
};
// vowels counter
const vowelCounter = () => {
    const vowelInput = document.getElementById("vowelInput");
    const vowelInputValue = vowelInput.value;
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    vowelInputValue.split("").forEach((char) => {
        if (vowels.includes(char.toLowerCase())) {
            count++;
        }
    });
    const vowelCounterOutput = document.getElementById("vowelCounterOutput");
    vowelCounterOutput.textContent = String(count);
    // After successfully get the value just empty the input
    vowelInput.value = "";
};
// Max element in an array
const maxInArray = () => {
    var _a, _b;
    const maxArrayInput = document.getElementById("maxArrayInput");
    const maxArrayInputValue = maxArrayInput.value;
    const convertedMaxArray = maxArrayInputValue.split(",") || [];
    let max = +((_a = convertedMaxArray === null || convertedMaxArray === void 0 ? void 0 : convertedMaxArray[0]) !== null && _a !== void 0 ? _a : 0);
    for (let i = 1; i < convertedMaxArray.length; i++) {
        let n = +((_b = convertedMaxArray === null || convertedMaxArray === void 0 ? void 0 : convertedMaxArray[i]) !== null && _b !== void 0 ? _b : 0);
        if (n > max) {
            max = n;
        }
    }
    const maxArrayOutput = document.getElementById("maxArrayOutput");
    maxArrayOutput.textContent = max.toString();
    // After successfully get the value just empty the input
    maxArrayInput.value = "";
};
// Grade Calculator
const gradeCalculator = () => {
    const charInput = document.getElementById("charInput");
    const charInputValue = Number(charInput.value);
    const charOutput = document.getElementById("charOutput");
    if (charInputValue === 90) {
        charOutput.textContent = "Grade A";
    }
    else if (charInputValue < 90 && charInputValue >= 80) {
        charOutput.textContent = "Grade B";
    }
    else if (charInputValue < 80 && charInputValue >= 70) {
        charOutput.textContent = "Grade C";
    }
    else if (charInputValue < 70 && charInputValue >= 60) {
        charOutput.textContent = "Grade D";
    }
    else {
        charOutput.textContent = "Grade F";
    }
    // After successfully get the value just empty the input
    charInput.value = "";
};
(_a = document
    .getElementById("convertTemperatureBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", convertTemperature);
(_b = document.getElementById("sumArrayBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", sumArray);
(_c = document.getElementById("avgArrayBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", avgArray);
(_d = document
    .getElementById("evenElemArrayBtn")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", evenElemArray);
(_e = document
    .getElementById("reverseStringBtn")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", reverseString);
(_f = document
    .getElementById("vowelCounterBtn")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", vowelCounter);
(_g = document.getElementById("maxInArrayBtn")) === null || _g === void 0 ? void 0 : _g.addEventListener("click", maxInArray);
(_h = document
    .getElementById("gradeCalculatorBtn")) === null || _h === void 0 ? void 0 : _h.addEventListener("click", gradeCalculator);
export {};
//# sourceMappingURL=app.js.map