var name = "I am Mani";
// let, const
let age = 23;
const gender = "Male";
const isSelected = true;
age = 32;
// gender = "Female";
// console.log(name, age, gender);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof gender);
// console.log(typeof isSelected);

const userDetails = [
  {
    name: "Bhola",
    age: 21,
  },
  {
    name: "Pavan",
    age: 20,
  },
  {
    name: "Sahil",
    age: 20,
  },
  { name: "Damodar", age: 20 },
];

// console.log(typeof userDetails);

function addTwoNumber(a, b) {
  return a + b;
}
const addTwoNumberArrowFn = (a, b) => {
  return a + b;
};
const addTwoNumberArrow = (a, b) => a + b;
let twoSum = addTwoNumber(10, 20);

let sum = addTwoNumber(20, 20);
// console.log(twoSum);

userDetails.forEach((userDetail, index) => {
  console.log(userDetail.name, userDetail.age, index);
});
