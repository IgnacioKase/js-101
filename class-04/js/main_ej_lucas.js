/*# Exercices

1 - Create a function that takes a string as a parameter and it reverses it. For example, "abcde" should become "edcba". Create tests for the function.

2 - Create a function that takes a string and removes all vocals from it. For example, "aaggee" -> "gg". Create tests for the function.

3 - Create a function that given a string and an intenger N, it shortens the string to N characters. For example string="abcde", N=2 -> "ab". Create tests for the function.*/

let word = "putoelquelea"
let n_letter = 4
let x_length = word.length;
let final = ""

for (let result = x_length - n_letter; result < x_length; result++) {
    final += word[result];
}
console.log(final);

// funcion, tiene que volver puto, tests