import {assert_equal, assert_throw} from '../js/test-suite.js';

function short_string(string_to_shorten: string, to_length: number): string {
    if (typeof string_to_shorten !== "string") {
        throw "string_to_shorten should be a string.";
    }

    return string_to_shorten.slice(0, to_length);
}

function test_short_string() {
    console.log("Executing test for exercice-03...");
    assert_equal(short_string("abcde", 2), "ab");
    assert_equal(short_string("", 2), "");
    assert_throw(short_string, [], 2);
    console.log("===================");
    console.log("All test passed");
    console.log("===================");
}

test_short_string()