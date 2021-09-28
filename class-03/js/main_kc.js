/*
    Complete the following function definition to get the amount of seconds
    between start_hour and end_hour.

    Also create a function to test "get_seconds_between".
*/

/*
    1) Necesitamos separar start_time y end_time en horas y minutos.
    2) Obtenemos la diferencia de horas y la diferencia de minutos.
    3) pasamos las diferencias (de horas y minutos) a segundos.
    4) sumamos los segundos obtenidos.
   
    2030
    1715

    1)
    start_time_hours = 20
    start_time_minutes = 30

    end_time_hours = 17
    end_time_minutes = 15

    2)
    hours_difference = |end_time_hours - start_time_hours| => 3
    minutes_difference = |end_time_minutes - start_time_minutes| => 15

    3)
    hours_difference_in_seconds = hours_difference * 3600 => 10800
    minutes_difference_in_seconds = minutes_difference * 60 => 900

    4)
    difference_in_seconds = 10800 + 900 = 11700
*/


function get_seconds_between(start_time, end_time) {
    /*
        @start_hour: int. Between 0 and 2359
        @end_hour: int. Between 0 and 2359

        where the two last digits represents the minutes (from 0 to 60).
        
        @return value: int. The number of seconds between the given hours.
    */

    if(typeof start_time !== "number" || typeof end_time !== "number") {
        throw "Error, the arguments given are not a number.";
    }
    
    // First phase
    let start_time_hours = get_hours_from_time(start_time);
    let start_time_minutes = get_minutes_from_time(start_time);

    let end_time_hours = get_hours_from_time(end_time);
    let end_time_minutes = get_minutes_from_time(end_time);

    // Second phase
    let hours_difference = Math.abs(end_time_hours - start_time_hours)
    let minutes_difference = Math.abs(end_time_minutes - start_time_minutes)

    // Third phase
    let hours_difference_in_seconds = convert_hours_to_seconds(hours_difference);
    let minutes_difference_in_seconds = convert_minutes_to_seconds(minutes_difference);

    // Forth phase
    let difference_in_seconds = hours_difference_in_seconds + minutes_difference_in_seconds;

    return difference_in_seconds;
}

function get_hours_from_time(time) {
    return Math.trunc(time / 100);
}

function get_minutes_from_time(time) {
    let hours = get_hours_from_time(time);
    return time - (hours * 100);
}

function convert_hours_to_seconds(hours) {
    return hours * 3600;
}

function convert_minutes_to_seconds(minutes) {
    return minutes * 60;
}

function assert_equal(actual, expected) {
    if (actual !== expected) {
        throw (actual + " is not " + expected + ".");
    } else {
        console.log("Test passed");
    }
}

function assert_throw(method, ...params) {
    try {
        method(...params);
    } catch (error) {
        console.log("Test passed");
        return;
    }
    throw "Error not raised";
}

function test_get_seconds_between() {
    assert_equal(get_seconds_between(0, 0), 0);
    assert_equal(get_seconds_between(2030, 1715), 11700);
    assert_equal(get_seconds_between(1715, 2030), 11700);
    assert_throw(get_seconds_between, "a", "b");
}

test_get_seconds_between();
