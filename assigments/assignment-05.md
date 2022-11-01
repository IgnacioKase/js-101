# Assignment 05

## 1. Better together

Given a string composed of `(`, `[`, and `{` you need to determine if the symbols are closed in the right order. The symbols are closed in the right order if for each openning symbol, there is a corresponding closing symbol and there are not open symbols (alone) in between the opening and the closing symbol of the original pair.

Examples of valid strings:

```ts

"{[()]}"
"()()()[]{}"
"()()()[]{}"
"({[]}[]{()})"
""
"()"
```

Example of invalid strings:

```ts

"([]{)}"
"(){]"
"("
")"
")("
"[{]}"
```

Signature of the function:

```ts

function isValidSymbolCombination(combination: string): bool
```

## 2. Quick maths

Given the problem defined in exercise 1, create another function that instead counts the amount of valid pair of symbols. Function's signature:

```ts

function countValidPairs(combination: string): bool
```

Example of inputs:

```ts

countValidPairs("{[()]}") // returns 3
countValidPairs("()") // returns 1
countValidPairs("") // returns 0
```

Try to reuse as much code as possible from exercise 1.
