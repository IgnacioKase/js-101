/*# Exercices

1 - Create a function that takes a string as a parameter and it reverses it. For example, "abcde" should become "edcba". Create tests for the function.

2 - Create a function that takes a string and removes all vocals from it. For example, "aaggee" -> "gg". Create tests for the function.

3 - Create a function that given a string and an intenger N, it shortens the string to N characters. For example string="abcde", N=2 -> "ab". Create tests for the function.*/

//let word = "putoelquelea"
let word = "puto"
let n_letter = 4
let x_length = word.length;
let final = ""
let reves = ""

function reverce (x_length){
for (inverse = x_length -1 ; inverse < x_length; inverse++) {
    reves += word[inverse];
}
console.log(reves);
}

function loquequeda (n_letter, x_length) {
for (result = x_length - n_letter; result < x_length; result++) {
    final += word[result];
}
console.log(final);
}

reverce(x_length)
loquequeda(n_letter, x_length)

// , tiene que volver puto, tests