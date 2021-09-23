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

function h_in_two_part(star) {
    if (star != 0) {
        let split_time = star / 100 ; // 18.59
        let hour = Number.parseInt(split_time); // 18
        let two_end_digit = (split_time - hour) * 100;
        let minut = Math.round(two_end_digit);
        let second_per_hour = (hour * 60) * 60;
        let second_per_minut = minut * 60;
        return second_per_hour + second_per_minut;
    }  else {
        return 0;
    }
}

second_star_hours = h_in_two_part(star_hours);

second_end_hours = h_in_two_part(end_hours);
if  (second_star_hours < second_end_hours) {
    diferent_in_seconds = second_end_hours - second_star_hours;
}   else {
    diferent_in_seconds = second_star_hours - second_end_hours;
}
//console.log(second_star_hours);
//console.log(second_end_hours);
console.log(diferent_in_seconds);

