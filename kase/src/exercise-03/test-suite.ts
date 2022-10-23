type T = any;

function assert_equal(actual: T, expected: T): void {
    if (actual !== expected) {
        throw ("'" + actual + "' is not '" + expected + "'.");
    }
    else {
    }
}

function assert_throw(method: CallableFunction, ...params: any): void {
    try {
        method(params);
    }
    catch (error) {
        return;
    }
    throw "Error not raised";
}

export { assert_equal, assert_throw };
