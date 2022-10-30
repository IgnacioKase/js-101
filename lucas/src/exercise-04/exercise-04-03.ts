/*1.Implement a function that takes a string and:
  1. Removes all the whitespaces at the beginning and at the end of the string.
  2. Removes all the strings that doesn't start with '--'.
  3. Removes the '--' from the filtered strings.
  4. Join all the strings together, separating the strings with a ','.
  5. Returns the result

    map -> filter -> map -> reduce

*/

function removeWhitespaces(partOnetoremove: string): string{
    return partOnetoremove.replace(/\s+/g, '');
}

function filterRemoveGuion(partTwotoremove: string): string{
    return partTwotoremove.filter(/\s+/g, '');
}

let unNormlizedArguments = ['   arg1 ', '--arg2     ', '--arg3'];
let normalizedArguments = normalize_and_join_arguments(unNormlizedArguments);


function normalize_and_join_arguments(nombres: Array<string>): any{ // aca igual que abajo arguments me lo tira invalido nombres no.
    
    let output = any[];

    output.map(removeWhitespaces(nombres));   // aca varias veces me pasa que cuando le pongo un nombre tipo noSpace me tira Variable 'notSpace' is used before being assigned,
   
    
    for (const index of output) {
        output.push(filterRemoveGuion(index));
    }
}

export {normalize_and_join_arguments, normalizedArguments};

