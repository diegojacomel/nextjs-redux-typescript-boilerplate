/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/peoplesaga";
exports.ids = ["pages/peoplesaga"];
exports.modules = {

/***/ "./pages/peoplesaga/index.tsx":
/*!************************************!*\
  !*** ./pages/peoplesaga/index.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/diegojacomel/Projects/ms-phishing/pages/peoplesaga/index.tsx\";\n// React\n\n\n\nconst People = () => {\n  // State\n  const {\n    0: id,\n    1: setId\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Redux\n\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  const {\n    name,\n    height,\n    mass,\n    gender\n  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.example.data);\n\n  const handleChange = e => {\n    setId(e.target.value);\n  };\n\n  const handleClick = () => {\n    dispatch({\n      type: 'GET_EXAMPLE_REQUEST',\n      payload: {\n        id\n      }\n    });\n  };\n\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    \"data-testid\": \"people\",\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      placeholder: \"Type the Github username here\",\n      onChange: handleChange,\n      style: {\n        width: '300px'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: handleClick,\n      children: \"Click to get user data\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Redux\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n          children: \"Name:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, undefined), \" \", name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n          children: \"Height:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, undefined), \" \", height]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n          children: \"Weight:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, undefined), \" \", mass]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n          children: \"Gender:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, undefined), \" \", gender]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (People);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tcy1waGlzaGluZy8uL3BhZ2VzL3Blb3BsZXNhZ2EvaW5kZXgudHN4PzlkZDMiXSwibmFtZXMiOlsiUGVvcGxlIiwiaWQiLCJzZXRJZCIsInVzZVN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm5hbWUiLCJoZWlnaHQiLCJtYXNzIiwiZ2VuZGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImV4YW1wbGUiLCJkYXRhIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJ0eXBlIiwicGF5bG9hZCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBVUEsTUFBTUEsTUFBZ0IsR0FBRyxNQUFNO0FBQzdCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEVBQUQ7QUFBQSxPQUFLQztBQUFMLE1BQWNDLCtDQUFRLENBQUMsSUFBRCxDQUE1QixDQUY2QixDQUk3Qjs7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBQ0EsUUFBTTtBQUFFQyxRQUFGO0FBQVFDLFVBQVI7QUFBZ0JDLFFBQWhCO0FBQXNCQztBQUF0QixNQUE4Q0Msd0RBQVcsQ0FDNURDLEtBQUQsSUFBc0JBLEtBQUssQ0FBQ0MsT0FBTixDQUFjQyxJQUR5QixDQUEvRDs7QUFJQSxRQUFNQyxZQUFZLEdBQUdDLENBQUMsSUFBSTtBQUN4QmIsU0FBSyxDQUFDYSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFMO0FBQ0QsR0FGRDs7QUFJQSxRQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUN4QmQsWUFBUSxDQUFDO0FBQ1BlLFVBQUksRUFBRSxxQkFEQztBQUVQQyxhQUFPLEVBQUU7QUFDUG5CO0FBRE87QUFGRixLQUFELENBQVI7QUFNRCxHQVBEOztBQVNBLFNBQ0U7QUFBSyxtQkFBWSxRQUFqQjtBQUFBLGVBQ0U7QUFDRSxpQkFBVyxFQUFDLCtCQURkO0FBRUUsY0FBUSxFQUFFYSxZQUZaO0FBR0UsV0FBSyxFQUFFO0FBQUVPLGFBQUssRUFBRTtBQUFUO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQU1FO0FBQVEsYUFBTyxFQUFFSCxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixFQU9FO0FBQUEsaUJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFBLG1CQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLE9BQzBCWixJQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFLRTtBQUFBLG1CQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLE9BQzRCQyxNQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsRUFRRTtBQUFBLG1CQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLE9BQzRCQyxJQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkYsRUFXRTtBQUFBLG1CQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLE9BQzRCQyxNQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBeUJELENBaEREOztBQWtEQSwrREFBZVQsTUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Blb3BsZXNhZ2EvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUmVhY3RcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBSb290U3RhdGUsIEFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vcmVkdXgvc3RvcmUnXG5cbmludGVyZmFjZSBQZXJzb25UeXBlcyB7XG4gIG5hbWU6IHN0cmluZ1xuICBoZWlnaHQ6IHN0cmluZ1xuICBtYXNzOiBzdHJpbmdcbiAgZ2VuZGVyOiBzdHJpbmdcbn1cblxuY29uc3QgUGVvcGxlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgLy8gU3RhdGVcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIC8vIFJlZHV4XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KClcbiAgY29uc3QgeyBuYW1lLCBoZWlnaHQsIG1hc3MsIGdlbmRlciB9OiBQZXJzb25UeXBlcyA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5leGFtcGxlLmRhdGFcbiAgKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgIHNldElkKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0dFVF9FWEFNUExFX1JFUVVFU1QnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBpZFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJwZW9wbGVcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgdGhlIEdpdGh1YiB1c2VybmFtZSBoZXJlXCJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICczMDBweCcgfX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5DbGljayB0byBnZXQgdXNlciBkYXRhPC9idXR0b24+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5SZWR1eDwvcD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Ryb25nPk5hbWU6PC9zdHJvbmc+IHtuYW1lfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Ryb25nPkhlaWdodDo8L3N0cm9uZz4ge2hlaWdodH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN0cm9uZz5XZWlnaHQ6PC9zdHJvbmc+IHttYXNzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Ryb25nPkdlbmRlcjo8L3N0cm9uZz4ge2dlbmRlcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZW9wbGVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/peoplesaga/index.tsx\n");

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react/jsx-dev-runtime");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/peoplesaga/index.tsx"));
module.exports = __webpack_exports__;

})();