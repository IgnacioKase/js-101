import { assertEqualArrays } from "../utils_for_tests";

function multipleByTwo(num: number): number {
    return num * 2;
}

function map<Type>(elements: Array<number>, _function_multiplication: (num: Type) => number): Array<number>{ //_ me lo recomienda el quickfix
    let output = [];
    for (const numero of elements){
        output.push(multipleByTwo(numero));
    }
    return output;
}

function testMap(): void{
    assertEqualArrays(map([10, 500, 2], multipleByTwo), [20, 1000, 4]);
    assertEqualArrays(map([-100, -1, 0], multipleByTwo), [-200, -2, 0]);
    assertEqualArrays(map([0.4, 0.5], multipleByTwo), [0.8, 1]);
    //assertEqualArrays(map(["keso", "1", "ana", "jamon"], multipleByTwo), ["keso", "jamon"]); que pasaria ?
  
    console.log("===All test passed===");
  }

  export {testMap};
