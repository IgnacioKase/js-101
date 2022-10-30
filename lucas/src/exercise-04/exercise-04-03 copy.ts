/*1.Implement a function that takes a string and:
  1. Removes all the whitespaces at the beginning and at the end of the string.
  2. Removes all the strings that doesn't start with '--'.
  3. Removes the '--' from the filtered strings.
  4. Join all the strings together, separating the strings with a ','.
  5. Returns the result

    map -> filter -> map -> reduce

*/
let unNormlizedArguments = ['   arg1 ', '--arg2     ', '--arg3'];
let normalizedArguments = normalize_and_join_arguments(texto);

function normalize_and_join_arguments(texto: Array<string>): any{
    let output = [];
    output.map(removeWhitespaces(texto));

}

function removeWhitespaces(partOnetoremove: string): string{
    return partOnetoremove.replace(/\s+/g, '');
}

function filterRemoveGuion(partTwotoremove: string): string{
    if(partTwotoremove !== "--"){
        return partTwotoremove;
    }
}