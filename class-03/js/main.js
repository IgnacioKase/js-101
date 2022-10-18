let a = 1;
let b = 2;

let message; // undefined

function start_engine() {
    console.log("Starting engine...");
    return true;
}

function stop_engine() {
    console.log("Engine stoped.");
    return false;
}

if ( a == b) {
    message = "the values are the same";
} else {
    message = "the values are the distinct";
}

message = a == b ? "the values are the same" : "the values are the distinct";

message = a === b ? start_engine() : stop_engine();

// "1" == 1 // true => "1" == "1"  => true
// "1" === 1 // false 

console.log(message);

///////////////////////////////////////////////////
let has_engine_started = (true && false) || true;

if (has_engine_started) {
    console.log("The engine started.");
} else {
    console.log("The engine is stoped.");
}
///////////////////////////////////////////////////

function sum(a, b) {
    return a + b;
}

function assert_true(value) {
    if (!value) {
        throw "Expected {true} but {false} was found.";
    }
}

function assert_equal(actual, expected) {
    if (actual !==  expected) {
        throw (actual + " is not " + expected + ".");
    }
}

function test_sum() {
    assert_equal(sum(2, 2), 4);
    assert_equal(sum(3, 0), 3);
    assert_equal(sum(3, -1), 2);
    assert_equal(sum(-2, -2), -5);
}

test_sum()

// stacktrace
// traceback

/*
    Complete the following function definition to get the amount of seconds
    between start_hour and end_hour.

    Also create a function to test "get_seconds_between".
*/
function get_seconds_between(start_hour, end_hour) {
    /*
        @start_hour: int. Between 0 and 2359
        @end_hour: int. Between 0 and 2359

        where the two last digits represents the minutes (from 0 to 60).
        
        @return value: int. The number of seconds between the given hours.
    */
}

