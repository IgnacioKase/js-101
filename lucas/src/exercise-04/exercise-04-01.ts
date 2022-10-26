import { assertEqualArrays } from "../utils_for_tests";

function isEven(num: number): boolean {
  return Math.abs(num) % 2 === 0;
}

function isOdd(num: number): boolean {
  return Math.abs(num) % 2 === 1;
}

function longEnough(sentence: string): boolean {
  return sentence.length >= 4;
}

function filter<Type>(elements: Array<Type>, filter_function: (element: Type) => boolean): Array<Type>{
  let output = [];
  for (const element of elements){
    if(filter_function(element)){
      output.push(element);
    }
  }
  return output;
}

function testFilter(): void{
  assertEqualArrays(filter([1, 10, 25, -50], isEven), [10, -50]);
  assertEqualArrays(filter([100, 44, 5, -1], isEven), [100, 44]);
  assertEqualArrays(filter([1, 7, -1], isEven), []);
  assertEqualArrays(filter([0, 1], isOdd), [1]);
  assertEqualArrays(filter([0, -1], isOdd), [-1]);
  assertEqualArrays(filter(["keso", "1", "ana", "jamon"], longEnough), ["keso", "jamon"]);
  assertEqualArrays(filter(["alarge", "a", "4444", "    "], longEnough), ["alarge", "4444", "    "]);
  assertEqualArrays(filter(["ala", "1c", "7-1"], longEnough), []);

  console.log("===All test passed===");
}

export {testFilter};
