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
    console.log("===All test passed===");
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
function map(elements, _function_multiplication) {
    let output = [];
    for (const numero of elements) {
        output.push(multipleByTwo(numero));
    }
    return output;
}
function testMap() {
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqualArrays)(map([10, 500, 2], multipleByTwo), [20, 1000, 4]);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqualArrays)(map([-100, -1, 0], multipleByTwo), [-200, -2, 0]);
    (0,_utils_for_tests__WEBPACK_IMPORTED_MODULE_0__.assertEqualArrays)(map([0.4, 0.5], multipleByTwo), [0.8, 1]);
    //assertEqualArrays(map(["keso", "1", "ana", "jamon"], multipleByTwo), ["keso", "jamon"]); que pasaria ?
    console.log("===All test passed===");
}



/***/ }),

/***/ "./src/exercise-04/exercise-04-03.ts":
/*!*******************************************!*\
  !*** ./src/exercise-04/exercise-04-03.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalize_and_join_arguments": () => (/* binding */ normalize_and_join_arguments),
/* harmony export */   "normalizedArguments": () => (/* binding */ normalizedArguments)
/* harmony export */ });
/*1.Implement a function that takes a string and:
  1. Removes all the whitespaces at the beginning and at the end of the string.
  2. Removes all the strings that doesn't start with '--'.
  3. Removes the '--' from the filtered strings.
  4. Join all the strings together, separating the strings with a ','.
  5. Returns the result

    map -> filter -> map -> reduce

*/
function removeWhitespaces(partOnetoremove) {
    return partOnetoremove.replace(/\s+/g, '');
}
function filterRemoveGuion(partTwotoremove) {
    return partTwotoremove.filter(/\s+/g, '');
}
let unNormlizedArguments = ['   arg1 ', '--arg2     ', '--arg3'];
let normalizedArguments = normalize_and_join_arguments(unNormlizedArguments);
function normalize_and_join_arguments(nombres) {
    let output = [];
    output.map(removeWhitespaces(nombres)); // aca varias veces me pasa que cuando le pongo un nombre tipo noSpace me tira Variable 'notSpace' is used before being assigned,
    for (const index of output) {
        output.push(filterRemoveGuion(index));
    }
}



/***/ }),

/***/ "./src/utils_for_tests.ts":
/*!********************************!*\
  !*** ./src/utils_for_tests.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assertEqualArrays": () => (/* binding */ assertEqualArrays),
/* harmony export */   "assert_equal": () => (/* binding */ assert_equal),
/* harmony export */   "assert_throw": () => (/* binding */ assert_throw)
/* harmony export */ });
function assert_equal(actual, expected) {
    if (actual !== expected) {
        throw actual + " is not " + expected + ".";
    }
    else {
    }
}
function assert_throw(method, ...params) {
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



(0,_exercise_04_exercise_04_01__WEBPACK_IMPORTED_MODULE_0__.testFilter)();
(0,_exercise_04_exercise_04_02__WEBPACK_IMPORTED_MODULE_1__.testMap)();
//normalize_and_join_arguments();
console.log(_exercise_04_exercise_04_03__WEBPACK_IMPORTED_MODULE_2__.normalizedArguments);

})();

/******/ })()
;