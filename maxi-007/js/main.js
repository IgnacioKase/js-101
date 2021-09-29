///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//1 - Create a function that takes a string as a parameter and it reverses it. For example, "abcde" should become "edcba". Create tests for the function.//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function reverse_string(string_to_reverse) {

    let new_string = "";

    if (Number.isInteger(string_to_reverse) || Number.parseFloat(string_to_reverse)) {
        return  screenLeft();
    } 

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

function assert_throw(method, ...params) {
        try {
            method(...params);
        } catch (error) {
            return;
        }
        throw "Error not raised";
    }

function test_reverse_string(){

    assert_equal(reverse_string("neuquen"), "neuquen");
    assert_equal(reverse_string("neuquen2"), "2neuquen");
    assert_equal(reverse_string("hola"), "aloh");
    assert_equal(reverse_string("nedeah"), "haeden");
    assert_equal(reverse_string("hol@"), "@loh");
    assert_equal(reverse_string(""), "");
    assert_throw(reverse_string, 14);
    assert_throw(reverse_string, 6969);
    assert_throw(reverse_string, 420)
    assert_throw(reverse_string, 1.420);

    console.log("=======================================");
    console.log("All tests for the reverse string passed");
    console.log("=======================================");
}

test_reverse_string()

console.log(reverse_string("neuquen"));

const string = prompt("Enter a string: ");

const result = reverse_string(string);

console.log(result);

for (let index = 3 ; index >= 0; index--) {  
    console.log (index);   
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2 - Create a function that takes a string and removes all vocals from it. For example, "aaggee" -> "gg". Create tests for the function.//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function remove_vowells_string(string_to_remove) {

    let new_string = ""; 

    if (Number.isInteger(string_to_remove) || Number.parseFloat(string_to_remove)) {
            break remove_vowells_string;
        } 

    for (let index = 0; index < string_to_remove.length; index++) {
        
        if (string_to_remove[index] != "a" && string_to_remove[index] != "e" && string_to_remove[index] != "i" && string_to_remove[index] != "o" && string_to_remove[index] != "u"){
            new_string += string_to_remove[index];
        }       
    }

    return new_string; 
}

function assert_equal(actual, expected) {
    if (actual !== expected) {
        throw (actual + " is not " + expected + ".");
    } else {
    }
}

function assert_throw(method, ...params) {
    try {
        method(...params);
    } catch (error) {
        return;
    }
    throw "Error not raised";
}

function test_remove_vowells_string(){

    assert_equal(remove_vowells_string("neuquen"), "nqn");
    assert_equal(remove_vowells_string("nqn"), "nqn");
    assert_equal(remove_vowells_string("neuquen2"), "nqn2");
    assert_equal(remove_vowells_string("neuqu@en"), "nq@n");
    assert_equal(remove_vowells_string("neuquen"), "nqn");
    assert_equal(remove_vowells_string("aeiou"), "");
    assert_equal(remove_vowells_string("zzzzz"), "zzzzz");
    assert_throw(test_remove_vowells_string, 14);


    console.log("===============================================");
    console.log("All tests for the removed vowells string passed");
    console.log("===============================================");

}

test_remove_vowells_string()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3 - Create a function that given a string and an intenger N, it shortens the string to N characters. For example string="abcde", N=2 -> "ab". Create tests for the function.//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function string_shorten(string_to_shorten,to_length){

    let new_string = "";

    if (Number.isInteger(string_to_shorten, to_length) || Number.parseFloat(string_to_shorten, to_length)) {
        return  screenLeft();
    } 


    if (string_to_shorten.length <= to_length ) {
        return string_to_shorten;
    }

    for (let index = 0; index < to_length; index++) {
        
        new_string += string_to_shorten[index]
        
    }

    return new_string;

}

function assert_equal(actual, expected) {
    if (actual !== expected) {
        throw (actual + " is not " + expected + ".");
    } else {
    }
}

function assert_throw(method, ...params) {
    try {
        method(...params);
    } catch (error) {
        return;
    }
    throw "Error not raised";
}

function test_string_shorten(){

    assert_equal(string_shorten("hola", 2), "ho");
    assert_equal(string_shorten("hola", 3), "hol");
    assert_equal(string_shorten("nedeah", 2), "ne");
    assert_equal(string_shorten("for", 1), "f");
    assert_equal(string_shorten("hola", 0), "");
    assert_equal(string_shorten("hola", 4), "hola");
    assert_equal(string_shorten("gei", 14), "gei");
    assert_equal(string_shorten("", 2), "");
    assert_throw(string_shorten, 14, 14);
    assert_throw(string_shorten, 4.20, 4.20);
    assert_throw(string_shorten, 6969, 6969);

    console.log("=======================================");
    console.log("All tests for the shorten string passed");
    console.log("=======================================");
   
}

test_string_shorten()


////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
//                                      Exercise taken from sololear                                          //  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4 - The snail climbs up 7 feet each day and slips back 2 feet each night.                                  //  
// How many days will it take the snail to get out of a well with the given depth?                            //    
//                                                                                                            //      
// Sample Input:                                                                                              //  
// 31                                                                                                         //      
//                                                                                                            //  
// Sample Output:                                                                                             //  
// 6                                                                                                          //  
//                                                                                                            //  
// Explanation: Let's break down the distance the snail covers each day:                                      //  
// Day 1: 7-2=5                                                                                               //
// Day 2: 5+7-2=10                                                                                            //
// Day 3: 10+7-2=15                                                                                           //                                                                                   
// Day 4: 15+7-2=20                                                                                           //      
// Day 5: 20+7-2=25                                                                                           //
// Day 6: 25+7=32                                                                                             //
// So, on Day 6 the snail will reach 32 feet and get out of the well at day, without slipping back that night.//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function main(){

//     let depth = parseInt(readLine(), 10);
//     let climb = 7;
//     let slip = 2;
//     let day = 0;

//     for (let index = 0; index <= depth;) {

//         day += 1;
//         index += climb;

//         if (index >= depth) {
//             break;
//         }

//         index -= slip;

//     }

//     console.log(day);

// }


