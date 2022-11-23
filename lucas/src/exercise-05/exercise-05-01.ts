import { assertEqual } from "../utils_for_tests";

//let prueba1 = ["{[()]}","()()()[]{}","()()()[]{}","({[]}[]{()})","","()"];
//let prueba1 = ["{[()]}"];

//([]){
enum SymbolType {
  parenthesis = "parenthesis",
  squareBracket = "squareBracket",
  curlyBracket = "curlyBracket",
}

function getSymbolType(symbol: string): SymbolType {
  switch (symbol) {
    case "(":
    case ")":
      return SymbolType.parenthesis;
    case "[":
    case "]":
      return SymbolType.squareBracket;
    case "{":
    case "}":
      return SymbolType.curlyBracket;
    default:
      throw new Error(`Invalid symbol: ${symbol}`);
  }
}

function isOpeningSymbol(symbol: string): boolean {
  return ["(", "{", "["].includes(symbol);
}

function removeLastItem<T>(arr: Array<T>): void {
  arr.splice(arr.length - 1, 1);
}

function areSymbolsEqualType(opening: string, closing: string): boolean {
  return getSymbolType(opening) === getSymbolType(closing);
}

function isValidSymbolCombination(combination: string): boolean {
  let openedPairs = [];
  for (const symbol of combination) {
    if (isOpeningSymbol(symbol)) {
      openedPairs.push(symbol);
    } else {
      const lastOpenSymbol = openedPairs.at(-1);
      if (lastOpenSymbol === undefined){
        return false;
      }
      if (areSymbolsEqualType(lastOpenSymbol, symbol)) {
        removeLastItem(openedPairs);
      } else {
        return false;
      }
    }
  }
  return openedPairs.length === 0;
}

function testExer5(): void {
  assertEqual(isValidSymbolCombination("([])"), true);
  assertEqual(isValidSymbolCombination("{}"), true);
  assertEqual(isValidSymbolCombination("()"), true);
  assertEqual(isValidSymbolCombination("[]"), true);
  assertEqual(isValidSymbolCombination("([)]"), false);
  assertEqual(isValidSymbolCombination("{[}"), false);
  assertEqual(isValidSymbolCombination("())"), false);
  assertEqual(isValidSymbolCombination("{[()]}"), true);
  console.log("===All test passed (Exercise5)===");
}

export { testExer5, areSymbolsEqualType, isOpeningSymbol, removeLastItem };
// problema con los test nose si hacer (["{[()]}"],"()[]{}"), true) o (["{[()]}"], true), true)
