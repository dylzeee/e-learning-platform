"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/account/login";
exports.ids = ["pages/account/login"];
exports.modules = {

/***/ "./components/forms/login/LoginForm.component.jsx":
/*!********************************************************!*\
  !*** ./components/forms/login/LoginForm.component.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginForm)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../firebase/firebase.utils */ \"./firebase/firebase.utils.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/dylanjackson/training-projects/e-learning/e-learning-platform/components/forms/login/LoginForm.component.jsx\";\n\n\n\nclass LoginForm extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n      className: \"section is-flex is-flex-direction-column\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        style: {\n          width: '420px'\n        },\n        className: \"container mx-max box px-medium is-align-self-center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          class: \"field\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n            class: \"label\",\n            children: \"Email\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 10,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            class: \"control\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n              class: \"input\",\n              type: \"email\",\n              placeholder: \"example@email.com\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 12,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          class: \"field\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n            class: \"label\",\n            children: \"Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            class: \"control\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n              class: \"input\",\n              type: \"email\",\n              placeholder: \"Enter your password\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"buttons is-flex is-flex-direction-row my-medium is-justify-content-space-evenly\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n            className: \"button is-info is-light is-outlined\",\n            style: {\n              width: '40%'\n            },\n            children: \"Log in\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n            className: \"button is-link\",\n            onClick: _firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_1__.signInWithGoogle,\n            style: {\n              width: '50%'\n            },\n            children: \"Sign In With Google\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zL2xvZ2luL0xvZ2luRm9ybS5jb21wb25lbnQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVlLE1BQU1HLFNBQU4sU0FBd0JGLDRDQUF4QixDQUFrQztBQUMvQ0csRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0U7QUFBUyxlQUFTLEVBQUMsMENBQW5CO0FBQUEsNkJBQ0U7QUFBSyxhQUFLLEVBQUU7QUFBRUMsVUFBQUEsS0FBSyxFQUFFO0FBQVQsU0FBWjtBQUFnQyxpQkFBUyxFQUFDLHFEQUExQztBQUFBLGdDQUNFO0FBQUssZUFBSyxFQUFDLE9BQVg7QUFBQSxrQ0FDRTtBQUFPLGlCQUFLLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUssaUJBQUssRUFBQyxTQUFYO0FBQUEsbUNBQ0U7QUFBTyxtQkFBSyxFQUFDLE9BQWI7QUFBcUIsa0JBQUksRUFBQyxPQUExQjtBQUFrQyx5QkFBVyxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVFFO0FBQUssZUFBSyxFQUFDLE9BQVg7QUFBQSxrQ0FDRTtBQUFPLGlCQUFLLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUssaUJBQUssRUFBQyxTQUFYO0FBQUEsbUNBQ0U7QUFBTyxtQkFBSyxFQUFDLE9BQWI7QUFBcUIsa0JBQUksRUFBQyxPQUExQjtBQUFrQyx5QkFBVyxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRixlQWNFO0FBQUssbUJBQVMsRUFBQyxpRkFBZjtBQUFBLGtDQUNFO0FBQVEscUJBQVMsRUFBQyxxQ0FBbEI7QUFBd0QsaUJBQUssRUFBRTtBQUFFQSxjQUFBQSxLQUFLLEVBQUU7QUFBVCxhQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQVEscUJBQVMsRUFBQyxnQkFBbEI7QUFBbUMsbUJBQU8sRUFBRUgsc0VBQTVDO0FBQThELGlCQUFLLEVBQUU7QUFBRUcsY0FBQUEsS0FBSyxFQUFFO0FBQVQsYUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQXVCRDs7QUF6QjhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1sZWFybmluZy1wbGF0Zm9ybS8uL2NvbXBvbmVudHMvZm9ybXMvbG9naW4vTG9naW5Gb3JtLmNvbXBvbmVudC5qc3g/MTFlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzaWduSW5XaXRoR29vZ2xlIH0gZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UudXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uIGlzLWZsZXggaXMtZmxleC1kaXJlY3Rpb24tY29sdW1uJz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzQyMHB4JyB9fSBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtbWF4IGJveCBweC1tZWRpdW0gaXMtYWxpZ24tc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImV4YW1wbGVAZW1haWwuY29tXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucyBpcy1mbGV4IGlzLWZsZXgtZGlyZWN0aW9uLXJvdyBteS1tZWRpdW0gaXMtanVzdGlmeS1jb250ZW50LXNwYWNlLWV2ZW5seVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbiBpcy1pbmZvIGlzLWxpZ2h0IGlzLW91dGxpbmVkJyBzdHlsZT17eyB3aWR0aDogJzQwJScgfX0+TG9nIGluPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uIGlzLWxpbmsnIG9uQ2xpY2s9e3NpZ25JbldpdGhHb29nbGV9IHN0eWxlPXt7IHdpZHRoOiAnNTAlJyB9fT5TaWduIEluIFdpdGggR29vZ2xlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJzaWduSW5XaXRoR29vZ2xlIiwiTG9naW5Gb3JtIiwicmVuZGVyIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/forms/login/LoginForm.component.jsx\n");

/***/ }),

/***/ "./components/hero/Hero.component.jsx":
/*!********************************************!*\
  !*** ./components/hero/Hero.component.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Hero)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/dylanjackson/training-projects/e-learning/e-learning-platform/components/hero/Hero.component.jsx\";\n\n\nfunction Hero({\n  title,\n  subtitle\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n    className: \"hero is-info has-text-centered\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"hero-body\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        className: \"title\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        className: \"subtitle\",\n        children: subtitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8vSGVyby5jb21wb25lbnQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVlLFNBQVNDLElBQVQsQ0FBYztBQUFFQyxFQUFBQSxLQUFGO0FBQVNDLEVBQUFBO0FBQVQsQ0FBZCxFQUFtQztBQUNoRCxzQkFDRTtBQUFTLGFBQVMsRUFBQyxnQ0FBbkI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBRyxpQkFBUyxFQUFDLE9BQWI7QUFBQSxrQkFBc0JEO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUcsaUJBQVMsRUFBQyxVQUFiO0FBQUEsa0JBQXlCQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLWxlYXJuaW5nLXBsYXRmb3JtLy4vY29tcG9uZW50cy9oZXJvL0hlcm8uY29tcG9uZW50LmpzeD8zMWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybyh7IHRpdGxlLCBzdWJ0aXRsZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdoZXJvIGlzLWluZm8gaGFzLXRleHQtY2VudGVyZWQnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlcm8tYm9keSc+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGVcIj57c3VidGl0bGV9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZXJvIiwidGl0bGUiLCJzdWJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/hero/Hero.component.jsx\n");

/***/ }),

/***/ "./firebase/firebase.utils.js":
/*!************************************!*\
  !*** ./firebase/firebase.utils.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"firestore\": () => (/* binding */ firestore),\n/* harmony export */   \"signInWithGoogle\": () => (/* binding */ signInWithGoogle),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_compat_auth__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyDXAbCriVAPw6SQea9f2lQIOVA894p_oyI\",\n  authDomain: \"musicemy-835d9.firebaseapp.com\",\n  projectId: \"musicemy-835d9\",\n  storageBucket: \"musicemy-835d9.appspot.com\",\n  messagingSenderId: \"943558657643\",\n  appId: \"1:943558657643:web:b3c119eeb0eb898fb3532e\",\n  measurementId: \"G-E33RTTB01W\"\n}; // Initialize Firebase\n\nfirebase_compat_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\nconst auth = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0___default().auth();\nconst firestore = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0___default().firestore();\nconst provider = new (firebase_compat_app__WEBPACK_IMPORTED_MODULE_0___default().auth.GoogleAuthProvider)();\nprovider.setCustomParameters({\n  prompt: 'select_account'\n});\nconst signInWithGoogle = () => auth.signInWithPopup(provider);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((firebase_compat_app__WEBPACK_IMPORTED_MODULE_0___default()));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9maXJlYmFzZS51dGlscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxFQUFBQSxNQUFNLEVBQUUseUNBRGE7QUFFckJDLEVBQUFBLFVBQVUsRUFBRSxnQ0FGUztBQUdyQkMsRUFBQUEsU0FBUyxFQUFFLGdCQUhVO0FBSXJCQyxFQUFBQSxhQUFhLEVBQUUsNEJBSk07QUFLckJDLEVBQUFBLGlCQUFpQixFQUFFLGNBTEU7QUFNckJDLEVBQUFBLEtBQUssRUFBRSwyQ0FOYztBQU9yQkMsRUFBQUEsYUFBYSxFQUFFO0FBUE0sQ0FBdkIsRUFVQTs7QUFDQVIsd0VBQUEsQ0FBdUJDLGNBQXZCO0FBRU8sTUFBTVMsSUFBSSxHQUFHViwrREFBQSxFQUFiO0FBQ0EsTUFBTVcsU0FBUyxHQUFHWCxvRUFBQSxFQUFsQjtBQUVQLE1BQU1ZLFFBQVEsR0FBRyxJQUFJWixvRkFBSixFQUFqQjtBQUNBWSxRQUFRLENBQUNFLG1CQUFULENBQTZCO0FBQUVDLEVBQUFBLE1BQU0sRUFBRTtBQUFWLENBQTdCO0FBQ08sTUFBTUMsZ0JBQWdCLEdBQUcsTUFBTU4sSUFBSSxDQUFDTyxlQUFMLENBQXFCTCxRQUFyQixDQUEvQjtBQUVQLGlFQUFlWiw0REFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2UtbGVhcm5pbmctcGxhdGZvcm0vLi9maXJlYmFzZS9maXJlYmFzZS51dGlscy5qcz9mZDU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJztcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZSc7XG5pbXBvcnQgJ2ZpcmViYXNlL2NvbXBhdC9hdXRoJztcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lEWEFiQ3JpVkFQdzZTUWVhOWYybFFJT1ZBODk0cF9veUlcIixcbiAgYXV0aERvbWFpbjogXCJtdXNpY2VteS04MzVkOS5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcIm11c2ljZW15LTgzNWQ5XCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwibXVzaWNlbXktODM1ZDkuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTQzNTU4NjU3NjQzXCIsXG4gIGFwcElkOiBcIjE6OTQzNTU4NjU3NjQzOndlYjpiM2MxMTllZWIwZWI4OThmYjM1MzJlXCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1FMzNSVFRCMDFXXCJcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG5leHBvcnQgY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcbmV4cG9ydCBjb25zdCBmaXJlc3RvcmUgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcblxuY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXI7XG5wcm92aWRlci5zZXRDdXN0b21QYXJhbWV0ZXJzKHsgcHJvbXB0OiAnc2VsZWN0X2FjY291bnQnIH0pO1xuZXhwb3J0IGNvbnN0IHNpZ25JbldpdGhHb29nbGUgPSAoKSA9PiBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlO1xuIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiaW5pdGlhbGl6ZUFwcCIsImF1dGgiLCJmaXJlc3RvcmUiLCJwcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNldEN1c3RvbVBhcmFtZXRlcnMiLCJwcm9tcHQiLCJzaWduSW5XaXRoR29vZ2xlIiwic2lnbkluV2l0aFBvcHVwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase/firebase.utils.js\n");

/***/ }),

/***/ "./pages/account/login.js":
/*!********************************!*\
  !*** ./pages/account/login.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_forms_login_LoginForm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/forms/login/LoginForm.component */ \"./components/forms/login/LoginForm.component.jsx\");\n/* harmony import */ var _components_hero_Hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/hero/Hero.component */ \"./components/hero/Hero.component.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/dylanjackson/training-projects/e-learning/e-learning-platform/pages/account/login.js\";\n\n\n\n\n\nclass login extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    console.log(this.props);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_hero_Hero_component__WEBPACK_IMPORTED_MODULE_2__.default, {\n        title: \"Login\",\n        subtitle: \"Enter your login details to sign into your account\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_forms_login_LoginForm_component__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50L2xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFZSxNQUFNSSxLQUFOLFNBQW9CSCw0Q0FBcEIsQ0FBOEI7QUFDM0NJLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDRDs7QUFDREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1BDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtILEtBQWpCO0FBQ0Esd0JBQ0U7QUFBQSw4QkFDRSw4REFBQyxvRUFBRDtBQUNFLGFBQUssRUFBQyxPQURSO0FBRUUsZ0JBQVEsRUFBQztBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFLDhEQUFDLGdGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBLG9CQURGO0FBU0Q7O0FBZjBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1sZWFybmluZy1wbGF0Zm9ybS8uL3BhZ2VzL2FjY291bnQvbG9naW4uanM/M2UyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvbG9naW4vTG9naW5Gb3JtLmNvbXBvbmVudCdcbmltcG9ydCBIZXJvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVyby9IZXJvLmNvbXBvbmVudCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEhlcm9cbiAgICAgICAgICB0aXRsZT1cIkxvZ2luXCJcbiAgICAgICAgICBzdWJ0aXRsZT1cIkVudGVyIHlvdXIgbG9naW4gZGV0YWlscyB0byBzaWduIGludG8geW91ciBhY2NvdW50XCJcbiAgICAgICAgLz5cbiAgICAgICAgPExvZ2luRm9ybSAvPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMb2dpbkZvcm0iLCJIZXJvIiwibG9naW4iLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/account/login.js\n");

/***/ }),

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("firebase/compat/app");

/***/ }),

/***/ "firebase/compat/auth":
/*!***************************************!*\
  !*** external "firebase/compat/auth" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("firebase/compat/auth");

/***/ }),

/***/ "firebase/compat/firestore":
/*!********************************************!*\
  !*** external "firebase/compat/firestore" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("firebase/compat/firestore");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/account/login.js"));
module.exports = __webpack_exports__;

})();