import { assertEqual } from "../utils_for_tests";
import { areSymbolsEqualType, isOpeningSymbol, removeLastItem } from "./exercise-05-01";

function numberOfCombinationSymbol(combination: string): number {
  let openedPairs = [];
  let contador = 0;
  for (const symbol of combination) {
    if (isOpeningSymbol(symbol)) {
      openedPairs.push(symbol);
    } else {
      const lastOpenSymbol = openedPairs.at(-1);
      if (lastOpenSymbol === undefined){
        return contador;
      }
      if (areSymbolsEqualType(lastOpenSymbol, symbol)) {
        removeLastItem(openedPairs);
        contador = contador + 1;
      } else {
        return contador;
      }
    }
  }
  return contador;
}

function testExer52(): void {
  assertEqual(numberOfCombinationSymbol("([])"), 2);
  assertEqual(numberOfCombinationSymbol("{}"), 1);
  assertEqual(numberOfCombinationSymbol("()"), 1);
  assertEqual(numberOfCombinationSymbol("[]"), 1);
  assertEqual(numberOfCombinationSymbol("([)]"), 0);
  assertEqual(numberOfCombinationSymbol("{[}"), 0);
  assertEqual(numberOfCombinationSymbol("())"), 1);
  assertEqual(numberOfCombinationSymbol("{[()]}"), 3);
  console.log("===All test passed (Exercise52)===");
}

export { testExer52, areSymbolsEqualType };
