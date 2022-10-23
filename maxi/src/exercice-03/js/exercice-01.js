// 1. Create a function that takes an array of numbers and sums all the elements. Signature:

//     ```ts
//     function sum(numbers: Array[number]): number
//     ```

//     Example:

//     ```ts
//     sum([1, 2, 3, 4.2]) === 10.2
//     ```
function assert_equal(actual, expected) {
  if (actual !== expected) {
    throw actual + " is not " + expected + ".";
  }
}

function sumArray(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    sum += array[index];
  }
  return sum;
}

//console.log(sumArray([1, 2, 3, 4, 5]))

function test_sumArray() {
  assert_equal(sumArray([1, 2, 3, 4, 5]), 15);
  assert_equal(sumArray([1, -2, 3, 4, 5]), 11);
  assert_equal(sumArray([1, 4, 3, 4, 5]), 17);
  assert_equal(sumArray([14, 14, 14, 14, 14]), 70);
  assert_equal(sumArray([2.8, 2.8, 2.8, 2.8, 2.8]), 14);
  assert_equal(sumArray([-1, -2, -3, -4, -5]), -15);

  console.log("===========================================");
  console.log("     All tests for the sumArray Passed     ");
  console.log("===========================================");
}

test_sumArray();
