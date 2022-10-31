import { assertEqualArrays } from "../utils_for_tests";

function multipleByTwo(num: number): number {
  return num * 2;
}

function map(elements: Array<any>, func: (num: any) => any): Array<any> {
  let output = [];
  for (const element of elements) {
    output.push(func(element));
  }
  return output;
}

function testMap(): void {
  assertEqualArrays(map([10, 500, 2], multipleByTwo), [20, 1000, 4]);
  assertEqualArrays(map([-100, -1, 0], multipleByTwo), [-200, -2, 0]);
  assertEqualArrays(map([0.4, 0.5], multipleByTwo), [0.8, 1]);
  
  assertEqualArrays(map(["Lucas", "Maxi", "Ignacio"], (name) => "Hello " + name), ["Hello Lucas", "Hello Maxi", "Hello Ignacio"]);
  assertEqualArrays(map([true, false, true, false], (bool) => !bool), [false, true, false, true]);

  console.log("===All test passed (Map)===");
}

export { testMap };
