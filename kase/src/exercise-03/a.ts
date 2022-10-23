import {assert_equal} from './test-suite';

function sum(numbers: Array<number>): number {
    return numbers.reduce((a, b) => a + b, 0);
}

function test() {
    assert_equal(sum([1, 2, 3]), 6);
    assert_equal(sum([1, 2, 3, 4, 5]), 15);
    assert_equal(sum([-1, -2, 3]), 0);
    console.log("===================");
    console.log("All test passed");
    console.log("===================");
}

test();
