"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var _Users_dylanjackson_training_projects_e_learning_e_learning_platform_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_Layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Layout.component */ \"./components/layout/Layout.component.jsx\");\n/* harmony import */ var _firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase/firebase.utils */ \"./firebase/firebase.utils.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/dylanjackson/training-projects/e-learning/e-learning-platform/pages/_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_dylanjackson_training_projects_e_learning_e_learning_platform_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nfunction App(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      currentUser = _useState[0],\n      setCurrentUser = _useState[1];\n\n  var unsubscribeFromAuth = null;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    unsubscribeFromAuth = _firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_5__.auth.onAuthStateChanged(function (user) {\n      setCurrentUser(user);\n      return function () {\n        unsubscribeFromAuth();\n      };\n    });\n  }, [currentUser]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_layout_Layout_component__WEBPACK_IMPORTED_MODULE_4__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"Y5F2pQQk2LZA5WRO2+bvRm5iRuo=\");\n\n_c = App;\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNLLEdBQVQsT0FBdUM7QUFBQTs7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhOztBQUNwRCxrQkFBc0NMLCtDQUFRLENBQUMsSUFBRCxDQUE5QztBQUFBLE1BQU9NLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBRUEsTUFBSUMsbUJBQW1CLEdBQUcsSUFBMUI7QUFFQVQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RTLElBQUFBLG1CQUFtQixHQUFHTiw2RUFBQSxDQUF3QixVQUFBUSxJQUFJLEVBQUk7QUFDcERILE1BQUFBLGNBQWMsQ0FBQ0csSUFBRCxDQUFkO0FBQ0EsYUFBTyxZQUFNO0FBQ1hGLFFBQUFBLG1CQUFtQjtBQUNwQixPQUZEO0FBR0QsS0FMcUIsQ0FBdEI7QUFNRCxHQVBRLEVBT04sQ0FBQ0YsV0FBRCxDQVBNLENBQVQ7QUFVQSxzQkFDRSw4REFBQyx3RUFBRDtBQUFBLDJCQUNFLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztHQXBCdUJGOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJ1xuaW1wb3J0ICcvc3R5bGVzL2dsb2JhbHMuc2NzcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmNvbXBvbmVudCdcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZS9maXJlYmFzZS51dGlscyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGxldCB1bnN1YnNjcmliZUZyb21BdXRoID0gbnVsbDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVuc3Vic2NyaWJlRnJvbUF1dGggPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyID0+IHtcbiAgICAgIHNldEN1cnJlbnRVc2VyKHVzZXIpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgdW5zdWJzY3JpYmVGcm9tQXV0aCgpO1xuICAgICAgfVxuICAgIH0pXG4gIH0sIFtjdXJyZW50VXNlcl0pXG5cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiYXV0aCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJ1bnN1YnNjcmliZUZyb21BdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});