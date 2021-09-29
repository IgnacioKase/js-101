/*# Exercices

1 - Create a function that takes a string as a parameter and it reverses it. For example, "abcde" should become "edcba". Create tests for the function.

2 - Create a function that takes a string and removes all vocals from it. For example, "aaggee" -> "gg". Create tests for the function.

3 - Create a function that given a string and an intenger N, it shortens the string to N characters. For example string="abcde", N=2 -> "ab". Create tests for the function.*/

//let word = "putoelquelea"
let word = "puto";
let n_letter = 4;
let x_length = word.length;
let final = "";
let reves = "";
let chas = "";



function reverse(s){
    return s.split("").reverse().join("");
}



function novocal(palabra){
    
    //for (let inde = 0; inde < palabra; inde++) {
        
    //if (palabra[inde] != "a" && palabra[inde] != "e" && palabra[inde] != "i" && palabra[inde] != "o" && palabra[inde] != "u" && palabra[inde] != "A" && palabra[inde] != "E" && palabra[inde] != "I" && palabra[inde] != "O" && palabra[inde] != "U") {

    //chas = chas + palabra[inde];

    //} 

    //}
    chas = palabra.replace("a", "");
    chas = chas.replace("e", "");
    chas = chas.replace("i", "");
    chas = chas.replace("o", "");
    chas = chas.replace("u", "");
    return chas;
}

function loquequeda (n_letter, x_length) {
for (result = x_length - n_letter; result < x_length; result++) {
    final += word[result];
}
    return final;
}



console.log(reverse(word))
console.log(novocal(word))
console.log(loquequeda(n_letter, x_length))

// , tiene que volver puto, tests