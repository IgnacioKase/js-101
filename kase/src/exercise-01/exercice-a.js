function reverse_string(string_to_reverse) {

    let is_not_a_string = typeof string_to_reverse !== "string";
    if(is_not_a_string) {
        throw "The argument should be a string";
    }

    let reversed_string = "";

    for (let index = string_to_reverse.length - 1; index >= 0; index--) {
        const element = string_to_reverse[index];
        reversed_string += element;
    }

    return reversed_string;
}

function test_reverse_string() {
    console.log("Executing test for exercice-01...");
    assert_equal(reverse_string("abcde"), "edcba");
    assert_equal(reverse_string(""), "");
    assert_equal(reverse_string("111111111111111111111111111111111111111111111111111111111111111111111111111111111119"), "911111111111111111111111111111111111111111111111111111111111111111111111111111111111");
    assert_throw(reverse_string, 1);
    assert_throw(reverse_string, {});
    console.log("===================");
    console.log("All test passed");
    console.log("===================");
}

test_reverse_string();