"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function assert_equal(t,e){if(t!==e)throw t+" is not "+e+"."}function assert_throw(t){try{for(var e=arguments.length,s=new Array(1<e?e-1:0),r=1;r<e;r++)s[r-1]=arguments[r];t.apply(void 0,s)}catch(t){return}throw"Error not raised"}function get_last_n_digits(t,e){assert_equal(Number.isInteger(t),!0),assert_equal(Number.isInteger(e),!0),assert_equal(_typeof(t),"number");var s=t.toString(),r="",o=s.length;if(o<e)throw"The number passed is shorter than the request digits.";if(e+1==o&&t<0)return t;for(var n=o-e;n<o;n++)r+=s[n];return parseInt(r)}function test_get_last_n_digits(){assert_equal(get_last_n_digits(81523,2),23),assert_equal(get_last_n_digits(0,1),0),assert_equal(get_last_n_digits(-140,2),40),assert_throw(get_last_n_digits,22,4),assert_throw(get_last_n_digits,"120",1,4,5,6,7,8),assert_equal(get_last_n_digits(-140,3),-140),assert_throw(get_last_n_digits,24.2,3),assert_throw(get_last_n_digits,24,1.2),console.log("================"),console.log("All tests passed"),console.log("================")}test_get_last_n_digits();