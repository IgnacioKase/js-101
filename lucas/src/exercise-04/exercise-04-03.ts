/*1.Implement a function that takes a string and:
  1. Removes all the whitespaces at the beginning and at the end of the string.
  2. Removes all the strings that doesn't start with '--'.
  3. Removes the '--' from the filtered strings.
  4. Join all the strings together, separating the strings with a ','.
  5. Returns the result

    map -> filter -> map -> reduce

*/

function removeWhitespaces(arg: string): string{
    return arg.replace(/\s+/g, '');
}

function removeDashes(arg: string): string{
    // TODO implement
    return arg;
}

function doesStartWithDashes(arg: string): boolean {
    // TODO implement
    return true;
}

let unNormlizedArguments = ['   arg1 ', '--arg2     ', '--arg3'];
let normalizedArguments = normalize_and_join_arguments(unNormlizedArguments);


function normalize_and_join_arguments(args: Array<string>): string {
    
    let output = args.map(removeWhitespaces);
    output = output.filter(doesStartWithDashes);
    output = output.map(removeDashes);

    return ""
}

export {normalize_and_join_arguments, normalizedArguments};
