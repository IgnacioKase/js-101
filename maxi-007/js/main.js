///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//1 - Create a function that takes a string as a parameter and it reverses it. For example, "abcde" should become "edcba". Create tests for the function.//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function reverse_string(string_to_reverse) {

    let new_string = "";

    for (let index = string_to_reverse.length -1; index >= 0; index--) {

        new_string += string_to_reverse[index];

    }

    return new_string;

}

function assert_equal(actual, expected) {
        if (actual !== expected) {
            throw (actual + " is not " + expected + ".");
        } else {
        }
    }

function test_reverse_string(){

    assert_equal(reverse_string("neuquen"), "neuquen");
    assert_equal(reverse_string("neuquen2"), "2neuquen");
    assert_equal(reverse_string("hola"), "aloh");
    assert_equal(reverse_string("nedeah"), "haeden");
    assert_equal(reverse_string("hol@"), "@loh");
    assert_equal(reverse_string(""), "");


    console.log("================");
    console.log("All tests passed");
    console.log("================");
}

test_reverse_string()

// console.log(reverse_string("neuquen"));

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
//         }       
//     }

//     return new_string; 
// }

// function assert_equal(actual, expected) {
//     if (actual !== expected) {
//         throw (actual + " is not " + expected + ".");
//     } else {
//     }
// }

// function test_remove_vowells_string(){

//     assert_equal(remove_vowells_string("neuquen"), "nqn");
//     assert_equal(remove_vowells_string("nqn"), "nqn");
//     assert_equal(remove_vowells_string("neuquen2"), "nqn2");
//     assert_equal(remove_vowells_string("neuqu@en"), "nq@n");
//     assert_equal(remove_vowells_string("neuquen"), "nqn");
//     assert_equal(remove_vowells_string("aeiou"), "");
//     assert_equal(remove_vowells_string("zzzzz"), "zzzzz");


//     console.log("================");
//     console.log("All tests passed");
//     console.log("================");

// }

// test_remove_vowells_string()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3 - Create a function that given a string and an intenger N, it shortens the string to N characters. For example string="abcde", N=2 -> "ab". Create tests for the function.//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function string_shorten(string_to_shorten,to_length){

//     let new_string = "";

//     if (string_to_shorten.length <= to_length ) {
//         return string_to_shorten;
//     }

//     for (let index = 0; index < to_length; index++) {
        
//         new_string += string_to_shorten[index]
        
//     }

//     return new_string;

// }

// function assert_equal(actual, expected) {
//     if (actual !== expected) {
//         throw (actual + " is not " + expected + ".");
//     } else {
//     }
// }

// function test_string_shorten(){

//     assert_equal(string_shorten("hola", 2), "ho");
//     assert_equal(string_shorten("hola", 3), "hol");
//     assert_equal(string_shorten("nedeah", 2), "ne");
//     assert_equal(string_shorten("for", 1), "f");
//     assert_equal(string_shorten("hola", 0), "");
//     assert_equal(string_shorten("hola", 4), "hola");
//     assert_equal(string_shorten("gei", 14), "gei");
//     assert_equal(string_shorten("", 2), "");

//     console.log("================");
//     console.log("All tests passed");
//     console.log("================");
   
// }

// test_string_shorten()