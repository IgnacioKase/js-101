import { assertEqual } from "../utils_for_tests";

//let prueba1 = ["{[()]}","()()()[]{}","()()()[]{}","({[]}[]{()})","","()"];
//let prueba1 = ["{[()]}"];

function twoOfTheSameType(args: string): boolean{
    if (args.includes("()") || args.includes("[]") || args.includes("{}")){
        return true
    }
    return false
}

function isValidSymbolCombination(combination: string): boolean{
    let lengString = combination.length;
    for (const combine of combination) {
        let itsFine = 0;
        if(twoOfTheSameType(combine)){
            itsFine = itsFine + 1;
        }
        if(itsFine === (lengString / 2)){
            return true;
        }
        return false;
    }
    return false;
}
isValidSymbolCombination("{[()]}")
console.log(isValidSymbolCombination);

/*function testExer5(): void{
    assertEqual(isValidSymbolCombination(["{[()]}"],"()[]{}"), true);
    assertEqual(isValidSymbolCombination(["{}"]), ",,a,");
    assertEqual(isValidSymbolCombination(["()"]), "arg2,arg3");
    assertEqual(isValidSymbolCombination(["[]"]), ",,a,"); 
    console.log("===All test passed (Exercise5)===");
}
*/
export {isValidSymbolCombination};
// problema con los test nose si hacer (["{[()]}"],"()[]{}"), true) o (["{[()]}"], true), true)
