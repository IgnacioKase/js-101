// function get_seconds_between( h1, m1, h2, m2 ) {
//     return Math.abs((((h1 - h2) * 60 ) + m1 - m2 ) * 60 );
// }

// function assert_equal(actual, expected) {
//     if (actual !== expected) {
//         throw (actual + " is not " + expected + ".");
//     }
// }

// // function input(){

// //     var numbers = /^[0-9]$/;
// //     if(input = numbers){
// //         console.log("All is good.");
// //     } else{
// //         console.log("Only numbers...");
// //     }
// // }

// function result_seconds() {
//     assert_equal(get_seconds_between(08, 31, 18, 27), 35760);   
//     assert_equal(get_seconds_between(05, 16, 21, 11), 57300);

// }

// result_seconds()


let start_hour = 1539;
let end_hour = 2259;

let x = start_hour;

function get_last_n_digits(x, wanted_digits) {
    /*
        @x: int
        @wanted_digits: int
        @return: int
    */
    
    let x_as_string = x.toString();
    let result = "";
    let x_length = x_as_string.length;

    for (let index = x_length - wanted_digits; index < x_length; index++) {
        result += x_as_string[index];
    }

    return parseInt(result);
}


get_last_n_digits();