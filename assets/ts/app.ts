function convertTemperature(): void {
  const celsiusInput = document.getElementById(
    "celsiusInput"
  ) as HTMLInputElement;

  const celsiusInputValue: number = +celsiusInput.value;

  // Logic for conversion
  const fahrenheit: number = (celsiusInputValue * 9) / 5 + 32;

  const fahrenheitOutput = document.getElementById(
    "fahrenheitOutput"
  ) as HTMLParagraphElement;
  fahrenheitOutput.textContent = `${fahrenheit} F`;

  // After successfully get the value just empty the input
  celsiusInput.value = "";
}

// Array element sum
const sumArray = (): void => {
  const arrayInput = document.getElementById("arrayInput") as HTMLInputElement;

  const arrayInputValue: string = arrayInput.value;
  // '1,2,3'
  const convertedArray: string[] = arrayInputValue.split(",");
  // ["1", "2", "3"] +"1" or parseInt("1") or Number("1") 1
  let sum: number = 0;

  convertedArray.forEach((currElem) => {
    sum += +currElem;
    // console.log(typeof arrayInputValue);
  });

  const sumOutput = document.getElementById(
    "sumOutput"
  ) as HTMLParagraphElement;
  sumOutput.textContent = String(sum);

  // After successfully get the value just empty the input
  arrayInput.value = "";
};

// Avg of array element.
const avgArray = (): void => {
  const avgArrayInput = document.getElementById(
    "avgArrayInput"
  ) as HTMLInputElement;

  const avgArrayInputValue: string = avgArrayInput.value;
  const convertedAvgArray: string[] = avgArrayInputValue.split(",");

  let avgSum: number = 0;
  convertedAvgArray.forEach((currElem) => {
    avgSum += +currElem / convertedAvgArray.length;
  });

  const avgArrayOutput = document.getElementById(
    "avgArrayOutput"
  ) as HTMLParagraphElement;
  avgArrayOutput.textContent = String(avgSum);

  // After successfully get the value just empty the input
  avgArrayInput.value = "";
};

// Even element array
const evenElemArray = (): void => {
  const evenArrayInput = document.getElementById(
    "evenArrayInput"
  ) as HTMLInputElement;

  const evenArrayInputValue: string = evenArrayInput.value;

  const convertedEvenArray: string[] = evenArrayInputValue.split(",");

  const newEvenArray: string[] = [];
  convertedEvenArray.forEach((currElem) => {
    if (+currElem % 2 === 0) {
      newEvenArray.push(currElem);
    }
  });
  const evenArrayOutput = document.getElementById(
    "evenArrayOutput"
  ) as HTMLParagraphElement;
  evenArrayOutput.textContent = String(newEvenArray);

  // After successfully get the value just empty the input
  evenArrayInput.value = "";
};

// ReverseString
const reverseString = (): void => {
  const strInput = document.getElementById("strInput") as HTMLInputElement;

  const strInputValue: string = strInput.value;
  let rev: string = "";
  for (let i = strInputValue.length - 1; i >= 0; i--) {
    rev += strInputValue[i];
  }
  const reverseStringOutput = document.getElementById(
    "reverseStringOutput"
  ) as HTMLParagraphElement;

  reverseStringOutput.textContent = `${rev} 🤣`;

  // After successfully get the value just empty the input
  strInput.value = "";
};

// vowels counter
const vowelCounter = (): void => {
  const vowelInput = document.getElementById("vowelInput") as HTMLInputElement;

  const vowelInputValue: string = vowelInput.value;

  let count: number = 0;

  const vowels: string[] = ["a", "e", "i", "o", "u"];

  vowelInputValue.split("").forEach((char) => {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  });

  const vowelCounterOutput = document.getElementById(
    "vowelCounterOutput"
  ) as HTMLParagraphElement;
  vowelCounterOutput.textContent = String(count);

  // After successfully get the value just empty the input
  vowelInput.value = "";
};

// Max element in an array
const maxInArray = () => {
  const maxArrayInput = document.getElementById(
    "maxArrayInput"
  ) as HTMLInputElement;

  const maxArrayInputValue: string = maxArrayInput.value;

  const convertedMaxArray: string[] = maxArrayInputValue.split(",") || [];

  let max: number = +(convertedMaxArray?.[0] ?? 0);

  for (let i = 1; i < convertedMaxArray.length; i++) {
    let n: number = +(convertedMaxArray?.[i] ?? 0);
    if (n > max) {
      max = n;
    }
  }
  const maxArrayOutput = document.getElementById(
    "maxArrayOutput"
  ) as HTMLParagraphElement;
  maxArrayOutput.textContent = max.toString();

  // After successfully get the value just empty the input
  maxArrayInput.value = "";
};

// Grade Calculator
const gradeCalculator = (): void => {
  const charInput = document.getElementById("charInput") as HTMLInputElement;
  const charInputValue: number = Number(charInput.value);
  const charOutput = document.getElementById(
    "charOutput"
  ) as HTMLParagraphElement;
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

document
  .getElementById("convertTemperatureBtn")
  ?.addEventListener("click", convertTemperature);

document.getElementById("sumArrayBtn")?.addEventListener("click", sumArray);
document.getElementById("avgArrayBtn")?.addEventListener("click", avgArray);
document
  .getElementById("evenElemArrayBtn")
  ?.addEventListener("click", evenElemArray);
document
  .getElementById("reverseStringBtn")
  ?.addEventListener("click", reverseString);
document
  .getElementById("vowelCounterBtn")
  ?.addEventListener("click", vowelCounter);
document.getElementById("maxInArrayBtn")?.addEventListener("click", maxInArray);
document
  .getElementById("gradeCalculatorBtn")
  ?.addEventListener("click", gradeCalculator);
