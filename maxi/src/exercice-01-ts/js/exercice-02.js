////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2 - Create a function that takes a string and removes all vocals from it. For example, "aaggee" -> "gg". Create tests for the function.//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function remove_vowells_string(string_to_remove) {
    /*
        @string_to_remove: "string"

        @return: "string"
    */

    let new_string = ""; 

    let is_not_a_string = typeof string_to_remove !== "string";
    if(is_not_a_string) {
        throw "The argument should be a string";
    }

    const vocals = ["a", "e", "i", "o", "u", 'A', 'E', 'I', 'O', 'U', "á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú"];


    for (let index = 0; index < string_to_remove.length; index++) {
        const element = string_to_remove[index];

        if (!vocals.includes(element)){
            new_string += string_to_remove[index];
        }       
    }

    return new_string;

}

function test_remove_vowells_string(){

    assert_equal(remove_vowells_string("neuquen"), "nqn");
    assert_equal(remove_vowells_string("nqn"), "nqn");
    assert_equal(remove_vowells_string("nÁuquen2"), "nqn2");
    assert_equal(remove_vowells_string("neúqu@en"), "nq@n");
    assert_equal(remove_vowells_string("neuquen"), "nqn");
    assert_equal(remove_vowells_string("aeiou"), "");
    assert_equal(remove_vowells_string("zzzzz"), "zzzzz");
    assert_equal(remove_vowells_string("`"), "`");
    assert_throw(remove_vowells_string, {})
    assert_throw(remove_vowells_string, 14);
    assert_throw(remove_vowells_string, 4.20, 4.20);
    assert_throw(remove_vowells_string, 6969, 6969);


    console.log("===================================================");
    console.log("  All tests for the removed vowells string passed  ");
    console.log("===================================================");

}

test_remove_vowells_string()
