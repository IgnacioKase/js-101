enum SymbolType {
  parenthesis = 'parenthesis',
  squareBracket = 'squareBracket',
  curlyBracket = 'curlyBracket',
}


function getSymbolType(symbol: string): SymbolType {
  switch (symbol) {
    case '(':
    case ')':
      return SymbolType.parenthesis;
    case '[':
    case ']':
      return SymbolType.squareBracket;
    case '{':
    case '}':
      return SymbolType.curlyBracket;
    default:
      throw new Error(`Invalid symbol: ${symbol}`);
  }
}

console.log(getSymbolType('(')); // SymbolType.parenthesis
console.log(getSymbolType('[')); // SymbolType.squareBracket
console.log(getSymbolType('{')); // SymbolType.curlyBracket
console.log(getSymbolType(')')); // SymbolType.parenthesis
console.log(getSymbolType(']')); // SymbolType.squareBracket
console.log(getSymbolType('}')); // SymbolType.parenthesis
