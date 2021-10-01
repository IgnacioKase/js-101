"use strict";
exports.__esModule = true;
var test_suite_js_1 = require("../js/test-suite.js");
function short_string(string_to_shorten, to_length) {
    if (typeof string_to_shorten !== "string") {
        throw "string_to_shorten should be a string.";
    }
    return string_to_shorten.slice(0, to_length);
}
function test_short_string() {
    console.log("Executing test for exercice-03...");
    test_suite_js_1.assert_equal(short_string("abcde", 2), "aba");
    test_suite_js_1.assert_equal(short_string("", 2), "");
    test_suite_js_1.assert_throw(short_string, [], 2);
    console.log("===================");
    console.log("All test passed");
    console.log("===================");
}
test_short_string();
