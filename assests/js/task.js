function convertTemperature() {
  const celsiusInput = document.getElementById("celsiusInput");
  const celsiusInputValue = celsiusInput.value;

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
  const convertedArray = arrayInputValue.split(",");
  let sum = 0;

  convertedArray.forEach((currElem) => {
    sum += Number(currElem);
    // console.log(typeof arrayInputValue);
  });

  const sumOutput = document.getElementById("sumOutput");
  sumOutput.textContent = sum;

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
    avgSum += Number(currElem / convertedAvgArray.length);
  });

  const avgArrayOutput = document.getElementById("avgArrayOutput");
  avgArrayOutput.textContent = avgSum;

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
    if (currElem % 2 === 0) {
      newEvenArray.push(currElem);
    }
  });
  const evenArrayOutput = document.getElementById("evenArrayOutput");
  evenArrayOutput.textContent = newEvenArray;

  // After successfully get the value just empty the input
  evenArrayInput.value = "";
};

// ReverseString
const reverseString = (str) => {
  // const rev=str.split("").reverse().join("");
  // return rev;

  const strInput = document.getElementById("strInput");
  const strInputValue = strInput.value;
  let rev = "";
  for (let i = strInputValue.length - 1; i >= 0; i--) {
    rev += strInputValue[i];
  }
  const reverseStringoutput = document.getElementById("reverseStringoutput");

  reverseStringoutput.textContent = `${rev} 🤣`;

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
  vowelCounterOutput.textContent = count;

  // After successfully get the value just empty the input
  vowelInput.value = "";
};

// Max element in an array
const maxInArray = () => {
  const maxArrayInput = document.getElementById("maxArrayInput");
  const maxArrayInputValue = maxArrayInput.value;
  const convertedMaxArray = maxArrayInputValue.split(",");
  let max = convertedMaxArray[0];
  for (let i = 1; i < convertedMaxArray.length; i++) {
    if (convertedMaxArray[i] > max) {
      max = convertedMaxArray[i];
    }
  }
  const maxArrayOutput = document.getElementById("maxArrayOutput");
  maxArrayOutput.textContent = max;

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
  } else if (charInputValue < 90 && charInputValue >= 80) {
    charOutput.textContent = "Grade B";
  } else if (charInputValue < 80 && charInputValue >= 70) {
    charOutput.textContent = "Grade C";
  } else if (charInputValue < 70 && charInputValue >= 60) {
    charOutput.textContent = "Grade D";
  } else {
    charOutput.textContent = "Grade F";
  }

  // After successfully get the value just empty the input
  charInput.value = "";
};
