
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