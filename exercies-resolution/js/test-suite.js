"use strict";
exports.__esModule = true;
exports.assert_throw = exports.assert_equal = void 0;
function assert_equal(actual, expected) {
    if (actual !== expected) {
        throw ("'" + actual + "' is not '" + expected + "'.");
    }
    else {
    }
}
exports.assert_equal = assert_equal;
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
exports.assert_throw = assert_throw;
