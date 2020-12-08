/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _req_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./req.js */ \"./js/req.js\");\n;\r\n(0,_req_js__WEBPACK_IMPORTED_MODULE_0__.get)('https://api.github.com/users')\r\n    .then(\r\n        e => {\r\n            makeLI(e)\r\n        }).catch(console.log);\r\n(async() => {\r\n    try {\r\n        let a = await (0,_req_js__WEBPACK_IMPORTED_MODULE_0__.get)('https://api.github.com/users')\r\n        makeLI(a)\r\n    } catch (e) {\r\n        console.log(e);\r\n    }\r\n\r\n})()\r\n\r\nfunction makeLI(e) {\r\n    let id = Math.floor(Math.random() * e.length);\r\n    let divmain = document.querySelector('.div1')\r\n    let ul = document.createElement(\"ul\")\r\n    for (let i in e[id]) {\r\n        let li = document.createElement(\"li\")\r\n        li.innerHTML = `${i}: ${e[id][i]}`\r\n        ul.appendChild(li)\r\n    }\r\n    divmain.appendChild(ul)\r\n}\n\n//# sourceURL=webpack://3/./js/main.js?");

/***/ }),

/***/ "./js/req.js":
/*!*******************!*\
  !*** ./js/req.js ***!
  \*******************/
/*! namespace exports */
/*! export get [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get\": () => /* binding */ get\n/* harmony export */ });\nfunction req(url, options = {}) {\r\n    return fetch(url, options).then(res => {\r\n        if (res.status == 200) {\r\n            return res.json()\r\n        }\r\n        return function err(params) {\r\n            throw new Error()\r\n        }\r\n    })\r\n}\r\n// \"https://api.github.com/users\"\r\nfunction get(url) {\r\n    return req(url)\r\n}\n\n//# sourceURL=webpack://3/./js/req.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;