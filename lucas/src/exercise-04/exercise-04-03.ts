import { assertEqual } from "../utils_for_tests";

/*1.Implement a function that takes a string and:
  1. Removes all the whitespaces at the beginning and at the end of the string.
  2. Removes all the strings that doesn't start with '--'.
  3. Removes the '--' from the filtered strings.
  4. Join all the strings together, separating the strings with a ','.
  5. Returns the result

    map -> filter -> map -> reduce

*/
function normalizeAndJoinArguments(args: Array<string>): string{
    let output = args.map(removeWhitespaces);
    output = output.filter(doesStartWithDashes);
    output = output.map(removeDashes);
    return output.reduce(joinWithComma);
}

function removeWhitespaces(arg: string): string{
    return arg.replace(/\s+/g, '');
}

function doesStartWithDashes(arg: string): boolean{
    if(arg.length < 2){
        return false;
    }
    return arg[0] === "-" && arg[1] === "-";
}

function removeDashes(arg: string): string{
    return arg.replace("--", '');
}

function joinWithComma(arg1: string, arg2: string): string{
    return arg1 + "," + arg2;
}

function testNormalize(): void{
    assertEqual(normalizeAndJoinArguments(['   arg1 ', '--arg2     ', '--arg3']), "arg2,arg3");
    assertEqual(normalizeAndJoinArguments(['queso', '', '-',"--","-- ","--a","-a-","- -"]), ",,a,");
    console.log("===All test passed (Normalize)===");
}

export {testNormalize};