// // ------1------
// Write a program to push [1,4,5,”apple”,”pineapple”, “coconut”] to a
// variable name “arrayElement”. (don’t use while and for loop)
// Filter string “apple” (don’t use while and for loop)
// Add an element at the start of the array list.

const array = [];
const arrayElememt = array.push(1, 4, 5, "apple", " pineapple", "coconut");
console.log(array[3]);
array.unshift("abc");
console.log(array);

// ------2-------
// Write a program to filter
//  [ {name: 'Los Angeles', population: 3792621},
//  {name: 'New York', population: 8175133},
//  {name: 'Chicago', population: 2695598},
// {name: 'Houston', population: 2099451},
// {name: 'Philadelphia', population: 1526006} ]
// Population of the city is more than 2500000.  (don’t use while and for loop

const obj = [
  { name: "Los Angeles", population: 3792621 },
  { name: "New York", population: 8175133 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 },
];
const filter = obj.filter(function (city) {
  return city.population > 2500000;
});
console.log(filter);

// ------3-------
// Write a program to print
// {“name of student”:”Meet”} name of the student
const name = prompt("Add Name");
console.log(name);

// ------4-------
// Write a function to find a sum of n number without using any loops.

const add = function (n) {
  const addition = (n * (n + 1)) / 2;

  return addition;
};
console.log(add(5));

// ------5-------
// Write a function to find a factorial of n number without using any loops.

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

// ------6-------
// Write a function to find element at
// 3rd index of main element[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27],
//  [7, 4, 28, 14], [3, 10, 26, 7]].
const nums = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
const numbers = nums.flat();
console.log(numbers);
console.log(numbers[3]);

// ------7------;
// Write a function to perform the following task
// If the input is a book, return the library.
// If the input is clothes, return online store.
// If the input is Mumbai, return MH.

function check(value) {
  let result;
  if (value === "book") {
    result = "library";
  }
  if (value === "clothes") {
    result = "online store";
  }
  if (value === "Mumbai") {
    result = " MH";
  }
  return result;
}
const abc = prompt("enter value");
console.log(check(abc));

// ------7------
// Write a function which returns the type of input.

function input(type) {
  const value = typeof type;
  return value;
}
const abc = prompt();
console.log(input(abc));
