/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3 - Create a function that given a string and an intenger N, it shortens the string to N characters. For example string="abcde", N=2 -> "ab". Create tests for the function.//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function string_shorten(string_to_shorten,to_length){
    /*
        @string_to_shorten: "string"

        @to_length: "number"
    */
    let new_string = "";

    let is_not_a_string = typeof string_to_shorten !== "string";
    if(is_not_a_string) {
        throw "The argument should be a string";
    }

    if (string_to_shorten.length <= to_length ) {
        return string_to_shorten;
    }

    for (let index = 0; index < to_length; index++) {
        
        new_string += string_to_shorten[index]
        
    }

    return new_string;

}

function test_string_shorten(){

    assert_equal(string_shorten("hola", 2), "ho");
    assert_equal(string_shorten("hola", 3), "hol");
    assert_equal(string_shorten("nedeah", 2), "ne");
    assert_equal(string_shorten("for", 1), "f");
    assert_equal(string_shorten("hola", 0), "");
    assert_equal(string_shorten("hola", 4), "hola");
    assert_equal(string_shorten("gei", 14), "gei");
    assert_equal(string_shorten("", 2), "");
    assert_throw(string_shorten, 14, 14);
    assert_throw(string_shorten, 4.20, 4.20);
    assert_throw(string_shorten, 6969, 6969);

    console.log("    ===========================================");
    console.log("      All tests for the shorten string passed  ");
    console.log("    ===========================================");
   
}

test_string_shorten()


////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
//                                      Exercise taken from sololear                                          //  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4 - The snail climbs up 7 feet each day and slips back 2 feet each night.                                  //  
// How many days will it take the snail to get out of a well with the given depth?                            //    
//                                                                                                            //      
// Sample Input:                                                                                              //  
// 31                                                                                                         //      
//                                                                                                            //  
// Sample Output:                                                                                             //  
// 6                                                                                                          //  
//                                                                                                            //  
// Explanation: Let's break down the distance the snail covers each day:                                      //  
// Day 1: 7-2=5                                                                                               //
// Day 2: 5+7-2=10                                                                                            //
// Day 3: 10+7-2=15                                                                                           //                                                                                   
// Day 4: 15+7-2=20                                                                                           //      
// Day 5: 20+7-2=25                                                                                           //
// Day 6: 25+7=32                                                                                             //
// So, on Day 6 the snail will reach 32 feet and get out of the well at day, without slipping back that night.//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function main(){

    let depth = parseInt(readLine(), 10);
    let climb = 7;
    let slip = 2;
    let day = 0;

    for (let index = 0; index <= depth;) {

        day += 1;
        index += climb;

        if (index >= depth) {
            break;
        }

        index -= slip;

    }

    console.log(day);

}

