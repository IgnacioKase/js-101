///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//1 - Create a function that takes a string as a parameter and it reverses it. For example, "abcde" should become "edcba". Create tests for the function.//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function reverse_string(string_to_reverse) {
    /*
        @string_to_reverse: "string"

        @return: "string"
    */

    let new_string = "";

    let is_not_a_string = typeof string_to_reverse !== "string";
    if(is_not_a_string) {
        throw "The argument should be a string";
    }

    for (let index = string_to_reverse.length -1; index >= 0; index--) {

        new_string += string_to_reverse[index];

    }

    return new_string;

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

    console.log("    ===========================================");
    console.log("      All tests for the reverse string passed  ");
    console.log("    ===========================================");
}

test_reverse_string()