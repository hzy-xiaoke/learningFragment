/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/work.js":
/*!*********************!*\
  !*** ./src/work.js ***!
  \*********************/
/***/ (() => {

eval("self.onmessage = (message) => {\r\n  let data = message.data;\r\n  console.log('待处理数据 =>', data);\r\n  self.postMessage(data.toUpperCase());\r\n}\n\n//# sourceURL=webpack:///./src/work.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/work.js"]();
/******/ 	
/******/ })()
;