function assert_equal(actual: any, expected: any) {
    if (actual !== expected) {
        throw ("'" + actual + "' is not '" + expected + "'.");
    } else {
    }
}

function assert_throw(method: CallableFunction, ...params: any) {
    try {
        method(...params);
    } catch (error) {
        return;
    }
    throw "Error not raised";
}

export {assert_equal, assert_throw};
