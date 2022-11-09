/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/exercise-04/exercise-04-01.ts":
/*!*******************************************!*\
  !*** ./src/exercise-04/exercise-04-01.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testFilter": () => (/* binding */ testFilter)
/* harmony export */ });
/* harmony import */ var _utils_for_tests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils_for_tests */ "./src/utils_for_tests.ts");

function isEven(num) {
    return Math.abs(num) % 2 === 0;
}
function isOdd(num) {
    return Math.abs(num) % 2 === 1;
}
function longEnough(sentence) {
    return sentence.length >= 4;
}
function filter(elements, filter_function) {
    let output = [];
    for (const element of elements) {
        if (filter_function(element)) {
            output.push(element);
        }
    }
    return output;
}
function testFilter() {
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqualArrays)(filter([1, 10, 25, -50], isEven), [10, -50]);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqualArrays)(filter([100, 44, 5, -1], isEven), [100, 44]);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqualArrays)(filter([1, 7, -1], isEven), []);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqualArrays)(filter([0, 1], isOdd), [1]);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqualArrays)(filter([0, -1], isOdd), [-1]);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqualArrays)(filter(["keso", "1", "ana", "jamon"], longEnough), ["keso", "jamon"]);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqualArrays)(filter(["alarge", "a", "4444", "    "], longEnough), ["alarge", "4444", "    "]);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqualArrays)(filter(["ala", "1c", "7-1"], longEnough), []);
    console.log("===All test passed(Filter)===");
}



/***/ }),

/***/ "./src/exercise-04/exercise-04-02.ts":
/*!*******************************************!*\
  !*** ./src/exercise-04/exercise-04-02.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testMap": () => (/* binding */ testMap)
/* harmony export */ });
/* harmony import */ var _utils_for_tests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils_for_tests */ "./src/utils_for_tests.ts");

function multipleByTwo(num) {
    return num * 2;
}
function map(elements, func) {
    let output = [];
    for (const element of elements) {
        output.push(func(element));
    }
    return output;
}
function testMap() {
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqualArrays)(map([10, 500, 2], multipleByTwo), [20, 1000, 4]);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqualArrays)(map([-100, -1, 0], multipleByTwo), [-200, -2, 0]);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqualArrays)(map([0.4, 0.5], multipleByTwo), [0.8, 1]);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqualArrays)(map(["Lucas", "Maxi", "Ignacio"], (name) => "Hello " + name), ["Hello Lucas", "Hello Maxi", "Hello Ignacio"]);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqualArrays)(map([true, false, true, false], (bool) => !bool), [false, true, false, true]);
    console.log("===All test passed (Map)===");
}



/***/ }),

/***/ "./src/exercise-04/exercise-04-03.ts":
/*!*******************************************!*\
  !*** ./src/exercise-04/exercise-04-03.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testNormalize": () => (/* binding */ testNormalize)
/* harmony export */ });
/* harmony import */ var _utils_for_tests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils_for_tests */ "./src/utils_for_tests.ts");

/*1.Implement a function that takes a string and:
  1. Removes all the whitespaces at the beginning and at the end of the string.
  2. Removes all the strings that doesn't start with '--'.
  3. Removes the '--' from the filtered strings.
  4. Join all the strings together, separating the strings with a ','.
  5. Returns the result

    map -> filter -> map -> reduce

*/
function normalizeAndJoinArguments(args) {
    let output = args.map(removeWhitespaces);
    output = output.filter(doesStartWithDashes);
    output = output.map(removeDashes);
    return output.reduce(joinWithComma);
}
function removeWhitespaces(arg) {
    return arg.replace(/\s+/g, '');
}
function doesStartWithDashes(arg) {
    if (arg.length < 2) {
        return false;
    }
    return arg[0] === "-" && arg[1] === "-";
}
function removeDashes(arg) {
    return arg.replace("--", '');
}
function joinWithComma(arg1, arg2) {
    return arg1 + "," + arg2;
}
function testNormalize() {
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqual)(normalizeAndJoinArguments(['   arg1 ', '--arg2     ', '--arg3']), "arg2,arg3");
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqual)(normalizeAndJoinArguments(['queso', '', '-', "--", "-- ", "--a", "-a-", "- -"]), ",,a,");
    console.log("===All test passed (Normalize)===");
}



/***/ }),

/***/ "./src/exercise-05/exercise-05-01.ts":
/*!*******************************************!*\
  !*** ./src/exercise-05/exercise-05-01.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testExer5": () => (/* binding */ testExer5)
/* harmony export */ });
/* harmony import */ var _utils_for_tests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils_for_tests */ "./src/utils_for_tests.ts");

//let prueba1 = ["{[()]}","()()()[]{}","()()()[]{}","({[]}[]{()})","","()"];
//let prueba1 = ["{[()]}"];
//([]){
var SymbolType;
(function (SymbolType) {
    SymbolType["parenthesis"] = "parenthesis";
    SymbolType["squareBracket"] = "squareBracket";
    SymbolType["curlyBracket"] = "curlyBracket";
})(SymbolType || (SymbolType = {}));
function getSymbolType(symbol) {
    switch (symbol) {
        case "(":
        case ")":
            return SymbolType.parenthesis;
        case "[":
        case "]":
            return SymbolType.squareBracket;
        case "{":
        case "}":
            return SymbolType.curlyBracket;
        default:
            throw new Error(`Invalid symbol: ${symbol}`);
    }
}
function isOpeningSymbol(symbol) {
    return ["(", "{", "["].includes(symbol);
}
function removeLastItem(arr) {
    arr.splice(arr.length - 1, 1);
}
function areSymbolsEqualType(opening, closing) {
    return getSymbolType(opening) === getSymbolType(closing);
}
function isValidSymbolCombination(combination) {
    let openedPairs = [];
    for (const symbol of combination) {
        if (isOpeningSymbol(symbol)) {
            openedPairs.push(symbol);
        }
        else {
            const lastOpenSymbol = openedPairs.at(-1);
            if (lastOpenSymbol === undefined) {
                return false;
            }
            if (areSymbolsEqualType(lastOpenSymbol, symbol)) {
                removeLastItem(openedPairs);
            }
            else {
                return false;
            }
        }
    }
    return openedPairs.length === 0;
}
function testExer5() {
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqual)(isValidSymbolCombination("([])"), true);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqual)(isValidSymbolCombination("{}"), true);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqual)(isValidSymbolCombination("()"), true);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqual)(isValidSymbolCombination("[]"), true);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqual)(isValidSymbolCombination("[}"), false);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqual)(isValidSymbolCombination("{[()]}"), true);
    console.log("===All test passed (Exercise5)===");
}

// problema con los test nose si hacer (["{[()]}"],"()[]{}"), true) o (["{[()]}"], true), true)


/***/ }),

/***/ "./src/utils_for_tests.ts":
/*!********************************!*\
  !*** ./src/utils_for_tests.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assertEqual": () => (/* binding */ assertEqual),
/* harmony export */   "assertEqualArrays": () => (/* binding */ assertEqualArrays),
/* harmony export */   "assertThrow": () => (/* binding */ assertThrow)
/* harmony export */ });
function assertEqual(actual, expected) {
    if (actual !== expected) {
        throw actual + " is not " + expected + ".";
    }
    else {
    }
}
function assertThrow(method, ...params) {
    try {
        method(...params);
    }
    catch (error) {
        return;
    }
    throw "Error not raised";
}
function assertEqualArrays(a, b) {
    if (a.length !== b.length) {
        throw new Error("Arrays are not equal");
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            throw new Error("Arrays are not equal");
        }
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exercise_04_exercise_04_01__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exercise-04/exercise-04-01 */ "./src/exercise-04/exercise-04-01.ts");
/* harmony import */ var _exercise_04_exercise_04_02__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercise-04/exercise-04-02 */ "./src/exercise-04/exercise-04-02.ts");
/* harmony import */ var _exercise_04_exercise_04_03__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercise-04/exercise-04-03 */ "./src/exercise-04/exercise-04-03.ts");
/* harmony import */ var _exercise_05_exercise_05_01__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exercise-05/exercise-05-01 */ "./src/exercise-05/exercise-05-01.ts");




(0,_exercise_04_exercise_04_01__WEBPACK_IMPORTED_MODULE_0__.testFilter)();
(0,_exercise_04_exercise_04_02__WEBPACK_IMPORTED_MODULE_1__.testMap)();
(0,_exercise_04_exercise_04_03__WEBPACK_IMPORTED_MODULE_2__.testNormalize)();
(0,_exercise_05_exercise_05_01__WEBPACK_IMPORTED_MODULE_3__.testExer5)();

})();

/******/ })()
;