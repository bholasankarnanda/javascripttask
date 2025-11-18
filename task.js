const celsiusToFahrenheitCalculator = (celsius) => {
  //  (F=(C*1.8)+32)
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
};
console.log(celsiusToFahrenheitCalculator(25));

const arraySum = (arr) => {
  //   const arr = [10, 20];
  let sum = 0;
  arr.forEach((currElem) => {
    sum += currElem;
  });
  return sum;
};
console.log(arraySum([1, 2, 3, 5, 6, 7, 8, 9, 10]));

const avgArray = (arr) => {
  let sum = 0;
  arr.forEach((currElem) => {
    sum += currElem / arr.length;
  });
  return sum;
};
console.log(avgArray([1, 2, 3, 5, 6, 7, 8, 9, 10]));

const evenElemArray = (arr) => {
  const newEvenArray = [];
  arr.forEach((currElem) => {
    if (currElem % 2 === 0) {
      newEvenArray.push(currElem);
    }
  });
  return newEvenArray;
};
console.log("evenElemArray", evenElemArray([1, 2, 3, 5, 6, 7, 8, 9, 10]));

const reverseString = (str) => {
  const rev = "";
  for (let i = str; i <= str.length - 1; i++) {
    console.log();
  }
};

console.log(reverseString("bhola"));

const gradeCalculator = (grade) => {
  if (grade === 90) {
    console.log("Grade A");
  } else if (grade < 90) {
    console.log("Grade B");
  } else {
    console.log("Grade C");
  }
};

console.log(gradeCalculator(10));
