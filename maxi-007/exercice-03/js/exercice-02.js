// 2. Create a function that takes an array of integers and filters out the odd numbers. Signature:

//     ```ts
//     function filter_odds(numbers: Array[int]): Array[number]
//     ```

//     Example

//     ```ts
//     filter_odds([1, 2, 3, 4, 5, 6]) === [2, 4, 6]

function get_odds(array) {
    let odds = array.filter(n => n%2)
    return odds;
}



function test_remove_odds(){

    assert_equal(remove_odds([1, 2, 3, 4, 5]), [2,4]);
    // assert_equal(remove_odds([1, -2, 3, 4, 5]), 11);
    // assert_equal(remove_odds([1, 4, 3, 4, 5]), 17);
    // assert_equal(remove_odds([14, 14, 14, 14, 14]), 70);
    // assert_equal(remove_odds([2.8, 2.8, 2.8, 2.8, 2.8]), 14);
    // assert_equal(remove_odds([-1, -2, -3, -4, -5]), -15);
    
    console.log("===========================================");
    console.log("        All tests for the filter odd       ");
    console.log("===========================================");
}

test_remove_odds()