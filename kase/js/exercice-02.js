function assert_equal(actual, expected) {
    if (actual !== expected) {
        throw ("'" + actual + "' is not '" + expected + "'.");
    }
    else {
    }
}

function assert_throw(method) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    try {
        method.apply(void 0, params);
    }
    catch (error) {
        return;
    }
    throw "Error not raised";
}

function remove_vocals(to_remove) {
    /*
        Remove all vocals from a string.

        @to_remove: string

        @return: string
    */

    if(typeof to_remove !== "string") {
        throw "to_remove should be a string.";
    }

    let cleaned_string = "";
    const vocals = ["a", "e", "i", "o", "u", 'A', 'E', 'I', 'O', 'U', 'á', 'Á'];
    
    for (let index = 0; index < to_remove.length; index++) {
        const element = to_remove[index];

        if (!vocals.includes(element)) {
            cleaned_string += element;
        }
    }

    return cleaned_string;
}

function is_in_list(element_to_search, list) {
    /*
        @element_to_search: string
        @list: Array[string]

        @return: boolean
    */

    for (let index = 0; index < list.length; index++) {
        const element = list[index];

        if(element === element_to_search) {
            return true;
        }
    }

    return false;
}

function test_remove_vocals() {
    console.log("Executing test for exercice-02...");
    assert_equal(remove_vocals("aaggee"), "gg");
    assert_equal(remove_vocals("dhjg"), "dhjg");
    assert_equal(remove_vocals("aeiou"), "");
    assert_equal(remove_vocals("AEIOU"), "");
    assert_equal(remove_vocals("Áá"), "");
    assert_equal(remove_vocals("gAEIOUF"), "gF");
    assert_equal(remove_vocals("?=@"), "?=@");
    assert_equal(remove_vocals("h0l@"), "h0l@");
    assert_equal(remove_vocals(""), "");
    assert_throw(remove_vocals, 1);
    assert_throw(remove_vocals, {});
    console.log("===================");
    console.log("All test passed");
    console.log("===================");
}

function test_is_in_list() {
    console.log("Executing test for is_in_list...");
    assert_equal(is_in_list("a", "abcde"), true);
    assert_equal(is_in_list("a", "bbbb"), false);
    assert_equal(is_in_list("", ""), false);
    assert_throw(is_in_list, "a", null);
    console.log("===================");
    console.log("All test passed");
    console.log("===================");
}

test_is_in_list();
test_remove_vocals();

// let my_array = ["a", "b", "c", "d"];
// console.log(my_array);
// my_array[2] = "e";
// my_array[3] = "c";
// my_array[4] = "d";
// console.log(["1"].concat(my_array).concat(["2"]));

// let my_array = ["a", "b", "c", "d"];
// my_array.splice(2, 5, "e", "b", "c");
// console.log(my_array);
// let start = my_array.slice(0, 2);
// let end = my_array.slice(2, 4);
// console.log(start, end);
// start.push("e");
// console.log(start.concat(end));