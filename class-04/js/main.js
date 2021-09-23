// let my_number = 1749;

// let a = "" + my_number;
// a = my_number.toString();
// let b = parseInt(a[2] + a[3]);

// console.log(b);
// console.log(typeof b);

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

function get_last_n_digits(x, wanted_digits) {
    /*
        @x: int
        @wanted_digits: int

        @return: int
    */

    assert_equal(Number.isInteger(x), true);
    assert_equal(Number.isInteger(wanted_digits), true);
    assert_equal(typeof x, "number");
    
    let x_as_string = x.toString();
    let result = "";
    let x_length = x_as_string.length;

    if ( wanted_digits > x_length) {
        throw "The number passed is shorter than the request digits.";
    }

    if ((wanted_digits + 1) == x_length && x < 0) {
        return x;
    }
    
    for (let index = x_length - wanted_digits; index < x_length; index++) {
        result += x_as_string[index];
    }

    return parseInt(result);
}

function test_get_last_n_digits() {

    assert_equal(get_last_n_digits(81523, 2), 23);
    assert_equal(get_last_n_digits(0, 1), 0);
    assert_equal(get_last_n_digits(-140, 2), 40);
    assert_throw(get_last_n_digits, 22, 4);
    assert_throw(get_last_n_digits, "120", 1, 4, 5, 6, 7, 8);
    assert_equal(get_last_n_digits(-140, 3), -140);
    assert_throw(get_last_n_digits, 24.2, 3);
    assert_throw(get_last_n_digits, 24, 1.2);
    
    console.log("================");
    console.log("All tests passed");
    console.log("================");
}

test_get_last_n_digits()





// function a_very_long_function(callback) {
//     // ...
//     callback();
// }

// function notify_the_user() {
//     console.log("I finished!");
// }

// a_very_long_function(notify_the_user);
