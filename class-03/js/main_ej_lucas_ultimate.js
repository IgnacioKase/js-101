/*
    Complete the following function definition to get the amount of seconds
    between start_hour and end_hour.

    Also create a function to test "get_seconds_between".
*/
//function get_seconds_between(start_hour, end_hour) {
/*
        @start_hour: int. Between 0 and 2359
        @end_hour: int. Between 0 and 2359

        where the two last digits represents the minutes (from 0 to 60).
        
        @return value: int. The number of seconds between the given hours.
    */
//}

let star_hours = 1800;
let end_hours = 1259;

Number.parseInt(star_hours);
Number.parseInt(end_hours);

function val_between_two_hours(value_hours) {
  if (value_hours != 0) {
    let b_with_point = value_hours / 100;
    let hour = Number.parseInt(b_with_point);
    let two_end_digit = (b_with_point - hour) * 100;
    let minut = Math.round(two_end_digit);
    let second_per_hour = hour * 60 * 60;
    let second_per_minut = minut * 60;
    let result = second_per_hour + second_per_minut;
    return result;
  } else {
    return 0;
  }
}

function in_middle_two_hours(star, end) {
  if (star < 0 || end < 0) {
    throw "Error la hora no puede ser negativa";
  }
  let second_star_hours = val_between_two_hours(star);
  //console.log(second_star_hours);
  let second_end_hours = val_between_two_hours(end);
  //console.log(second_end_hours);
  if (second_star_hours < second_end_hours) {
    diferent_in_seconds = second_end_hours - second_star_hours;
  } else {
    diferent_in_seconds = second_star_hours - second_end_hours;
  }
  //console.log(second_star_hours);
  //console.log(second_end_hours);
  //console.log(diferent_in_seconds);
  return diferent_in_seconds;
}

in_middle_two_hours(star_hours, end_hours);

function assert_equal(actual, expected) {
  if (actual !== expected) {
    throw actual + " is not " + expected + ".";
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

function test_hours() {
  assert_equal(in_middle_two_hours(1000, 2359), 50340);
  assert_throw(in_middle_two_hours, -1000, 1000);
  assert_equal(in_middle_two_hours(700, 500), 7200);
  assert_throw(in_middle_two_hours, 100.5, -20);
  console.log("Test passed");
}

test_hours();
