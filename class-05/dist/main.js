/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

// class - 05
// Arrays, loops and how to deal with them.
let names = ["Lucas", "Maxi", "Ignacio"];
// pros: you have control on how the index move (flexible), you have the index
// cons: is error prone.
// Common way
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// 2nd form, a bit better
// pros: easy to use and read, you can use the index
// cons: you cannot use return inside the body of forEach.
names.forEach(function (value) {
    console.log(value);
});
// The confort way
// pros: 1. is really easy to read, 2. you can use return inside the body
// cons: you cannot use the index
for (const name of names) {
    console.log(name);
}
// Filter
console.log("======================== Use of filter ========================");
/*
    Filter: takes a function as parameter. Then, it runs the function for all
    the elements in the array. The function must return either true or false
    for each element. If the function returns true, then the element is added
    to the returned array, if not, is discarded.

    It retuns a new array, it doesn't change the original array.

    Example:
*/
function isPositive(x) {
    return x > 0;
}
let numbers = [-2, -1, 0, 1, 2, 3, 4];
let positiveNumbers = numbers.filter(isPositive); // [1, 2, 3, 4]
/* Example 2 */
function isNotIgnacio(name) {
    return name !== "Ignacio";
}
let students = names.filter(isNotIgnacio);
console.log(students);
// same but using lambda function
let students_lambda = names.filter((name) => name !== "Ignacio");
console.log(students_lambda);
// the original array remains the same.
console.log(names);
// Map
console.log("======================== Use of map ========================");
/*
    Map: it takes a function as a parameter. Then it applies the function to
    all elements in the array. The function must return something, that something
    is stored in a new array and the array is returned by map.

    All elements in the array will be transformed by the function given to the map.
    The original array remains the same.

    Example:
*/
function multiple_by_two(x) {
    return x * 2;
}
let base_numbers = [1, 2, 3, 4, 5];
// Using map
let doubled_numbers = base_numbers.map(multiple_by_two);
console.log(doubled_numbers);
// Manual equivalent way
let manual_doubled_numbers = [];
for (const x of base_numbers) {
    manual_doubled_numbers.push(multiple_by_two(x));
}
console.log(manual_doubled_numbers);
// Reduce
console.log("======================== Use of reduce ========================");
function suma(a, b) {
    return a + b;
}
function getMax(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
let allNumbersSummed = base_numbers.reduce(suma);
console.log(allNumbersSummed);
let maxNumber = base_numbers.reduce(getMax);
console.log(maxNumber);
let negativeNumbers = [-1, -3, -5];
// Manual version of getMax;
let currentMax = -Infinity;
for (let index = 0; index < base_numbers.length; index++) {
    currentMax = getMax(currentMax, base_numbers[index]);
}
console.log("currentMax", currentMax);

/******/ })()
;