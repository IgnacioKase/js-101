# Exercises 04

Write tests for all the functions.

## For loops exercises

1. Implement the `filter` function yourself that imitates what the `Array.filter` method does. Signature:

```ts
function filter<Type>(elements: Array<Type>, filter_function: (element: Type) => boolean): Array<Type>
```

Example of usage:

```ts
// ...
let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
let evens = filter(numbers, isEven); // evens = [2, 4, 6, 8]
```

2. Implement the `map` function yourself that imitates what the `Array.map` method does. Signature:

```ts
function map<Type>(elements: Array<Type>, func: (element: Type) => any): Array<any>
```

Example of usage:

```ts
//...
let numbers = [1, 2, 3, 4]
let doubledNumbers = filter(numbers, multipleByTwo); // doubledNumbers = [2, 4, 6, 8]
```

## Filter, map, and reduce exercises

1.Implement a function that takes a string and:
  1. Removes all the whitespaces at the beginning and at the end of the string.
  2. Removes all the strings that doesn't start with '--'.
  3. Removes the '--' from the filtered strings.
  4. Join all the strings together, separating the strings with a ','.
  5. Returns the result
  
Signature of the function:

```ts
function normalize_and_join_arguments(arguments: Array<string>): string
```


Example of usage:

```ts
let unNormlizedArguments = ['   arg1 ', '--arg2     ', '--arg3'];
let normalizedArguments = normalize_and_join_arguments(arguments);

// 1. Eliminate whitespaces: ['arg1', '--arg2', '--arg3']
// 2. Removes arguments not starting with '--': ['--arg2', '--arg3']
// 3. Removes the '--': ['arg2', 'arg3']
// 4. Join all the strings together: "arg2,arg3"
// 5. "arg2,arg3"
