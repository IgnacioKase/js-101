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
            star /= 100;
            hour = Number.parseInt(star);
            two_end_digit = (star - hour) * 100;
            minut = Math.round(two_end_digit);
            second_per_hour = (hour * 60) * 60;
            second_per_minut = minut * 60;
            second_in = second_per_hour + second_per_minut;
            //console.log(second_in);
            return second_in;
    }  else {
            second_in = 0;
            return second_in;
        }
    }
    function h_out_two_part(end) {
        if (end != 0) {
            end /= 100;
            hour = Number.parseInt(end);
            two_end_digit = (end - hour) * 100;
            minut = Math.round(two_end_digit);
            second_per_hour = (hour * 60) * 60;
            second_per_minut = minut * 60;
            second_out = second_per_hour + second_per_minut;
            //console.log(second_out);
            return second_out;
    }  else {
            second_out = 0;
            return second_out;
        }   
    }   

    h_in_two_part(star_hours);
    h_out_two_part(end_hours);
    second_star_hours = second_in;
    second_end_hours = second_out;
        if  (second_star_hours < second_end_hours) {
            diferent_in_seconds = second_end_hours - second_star_hours;
    }   else {
            diferent_in_seconds = second_star_hours - second_end_hours;
    }
    //console.log(second_star_hours);
    //console.log(second_end_hours);
    console.log(diferent_in_seconds);
