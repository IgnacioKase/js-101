///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//1 - Create a function that takes a string as a parameter and it reverses it. For example, "abcde" should become "edcba". Create tests for the function.//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function reverse_string(string_to_reverse) {

//     let new_string = "";

//     for (let index = string_to_reverse.length -1; index >= 0; index--) {

//         new_string += string_to_reverse[index];

//     }

//     return new_string;

// };


// // console.log(reverse_string("neuquen"));

// const string = prompt("Enter a string: ");

// const result = reverse_string(string);

// console.log(result);

// for (let index = 3 ; index >= 0; index--) {  
//     console.log (index);   
// }



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2 - Create a function that takes a string and removes all vocals from it. For example, "aaggee" -> "gg". Create tests for the function.//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function remove_vowells_string(string_to_remove) {

//     let new_string = ""; 

//     for (let index = 0; index < string_to_remove.length; index++) {
        
//         if (string_to_remove[index] != "a" && string_to_remove[index] != "e" && string_to_remove[index] != "i" && string_to_remove[index] != "o" && string_to_remove[index] != "u"){
//             new_string += string_to_remove[index];
//         };       
//     };

//     return new_string; 
// };

// console.log(remove_vowells_string("neuquen"));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3 - Create a function that given a string and an intenger N, it shortens the string to N characters. For example string="abcde", N=2 -> "ab". Create tests for the function.//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function string_shorten(string_to_shorten,n){

    let new_string = "";

    for (let index = string_to_shorten.length - 1; index = n; index--) {

        new_string -= n;

        };

    return new_string;

};

console.log(string_to_shorten("neuquen2", 2));
