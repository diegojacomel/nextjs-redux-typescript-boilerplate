/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeStore\": function() { return /* binding */ initializeStore; },\n/* harmony export */   \"useStore\": function() { return /* binding */ useStore; }\n/* harmony export */ });\n/* harmony import */ var _Users_diegojacomel_Projects_ms_phishing_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ \"./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js\");\n/* harmony import */ var _rootReducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rootReducers */ \"./redux/rootReducers.ts\");\n/* harmony import */ var _rootSagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rootSagas */ \"./redux/rootSagas.ts\");\n/* harmony import */ var _reducers_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/example */ \"./redux/reducers/example.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_diegojacomel_Projects_ms_phishing_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// React\n // Redux\n\n\n // Redux Saga\n\n // Root\n\n\n // Reducers\n\n\nvar sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_3__.default)();\nvar store;\nvar initialState = {\n  example: _reducers_example__WEBPACK_IMPORTED_MODULE_6__.initialStateExample\n};\n\nfunction initStore() {\n  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var store = (0,redux__WEBPACK_IMPORTED_MODULE_7__.createStore)(_rootReducers__WEBPACK_IMPORTED_MODULE_4__.default, preloadedState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_7__.applyMiddleware)(sagaMiddleware)));\n  sagaMiddleware.run(_rootSagas__WEBPACK_IMPORTED_MODULE_5__.default);\n  return store;\n}\n\nvar initializeStore = function initializeStore(preloadedState) {\n  var _store2;\n\n  var _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state\n  // with the current state in the store, and create a new store\n\n\n  if (preloadedState && store) {\n    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store\n\n    store = undefined;\n  } // For SSG and SSR always create a new store\n\n\n  if (false) {} // Create the store once in the client\n\n  if (!store) store = _store;\n  return _store;\n};\nfunction useStore(initialState) {\n  _s();\n\n  var store = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {\n    return initializeStore(initialState);\n  }, [initialState]);\n  return store;\n} // Infer the `RootState` and `AppDispatch` types from the store itself\n\n_s(useStore, \"K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc3RvcmUudHM/ODg0NyJdLCJuYW1lcyI6WyJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwic3RvcmUiLCJpbml0aWFsU3RhdGUiLCJleGFtcGxlIiwiaW5pdGlhbFN0YXRlRXhhbXBsZSIsImluaXRTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlcnMiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwicnVuIiwicm9vdFNhZ2FzIiwiaW5pdGlhbGl6ZVN0b3JlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VTdG9yZSIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtDQUdBOztDQUdBOztBQUNBO0NBR0E7O0FBQ0E7QUFLQSxJQUFNQSxjQUFjLEdBQUdDLG1EQUFvQixFQUEzQztBQUVBLElBQUlDLEtBQUo7QUFNQSxJQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRUMsa0VBQW1CQTtBQURULENBQXJCOztBQUlBLFNBQVNDLFNBQVQsR0FBa0Q7QUFBQSxNQUEvQkMsY0FBK0IsdUVBQWRKLFlBQWM7QUFDaEQsTUFBTUQsS0FBSyxHQUFHTSxrREFBVyxDQUN2QkMsa0RBRHVCLEVBRXZCRixjQUZ1QixFQUd2QkcsNkVBQW1CLENBQUNDLHNEQUFlLENBQUNYLGNBQUQsQ0FBaEIsQ0FISSxDQUF6QjtBQU1BQSxnQkFBYyxDQUFDWSxHQUFmLENBQW1CQywrQ0FBbkI7QUFFQSxTQUFPWCxLQUFQO0FBQ0Q7O0FBRU0sSUFBTVksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDUCxjQUFELEVBQXVDO0FBQUE7O0FBQ3BFLE1BQUlRLE1BQU0sY0FBR2IsS0FBSCw2Q0FBWUksU0FBUyxDQUFDQyxjQUFELENBQS9CLENBRG9FLENBR3BFO0FBQ0E7OztBQUNBLE1BQUlBLGNBQWMsSUFBSUwsS0FBdEIsRUFBNkI7QUFDM0JhLFVBQU0sR0FBR1QsU0FBUyxpQ0FDYkosS0FBSyxDQUFDYyxRQUFOLEVBRGEsR0FFYlQsY0FGYSxFQUFsQixDQUQyQixDQUszQjs7QUFDQUwsU0FBSyxHQUFHZSxTQUFSO0FBQ0QsR0FabUUsQ0FjcEU7OztBQUNBLGFBQW1DLEVBZmlDLENBZ0JwRTs7QUFDQSxNQUFJLENBQUNmLEtBQUwsRUFBWUEsS0FBSyxHQUFHYSxNQUFSO0FBRVosU0FBT0EsTUFBUDtBQUNELENBcEJNO0FBc0JBLFNBQVNHLFFBQVQsQ0FBa0JmLFlBQWxCLEVBQXNFO0FBQUE7O0FBQzNFLE1BQU1ELEtBQUssR0FBR2lCLDhDQUFPLENBQUM7QUFBQSxXQUFNTCxlQUFlLENBQUNYLFlBQUQsQ0FBckI7QUFBQSxHQUFELEVBQXNDLENBQUNBLFlBQUQsQ0FBdEMsQ0FBckI7QUFFQSxTQUFPRCxLQUFQO0FBQ0QsQyxDQUVEOztHQU5nQmdCLFEiLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFJlYWN0XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5cbi8vIFJlZHV4XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuXG4vLyBSZWR1eCBTYWdhXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcblxuLy8gUm9vdFxuaW1wb3J0IHJvb3RSZWR1Y2VycyBmcm9tICcuL3Jvb3RSZWR1Y2VycydcbmltcG9ydCByb290U2FnYXMgZnJvbSAnLi9yb290U2FnYXMnXG5cbi8vIFJlZHVjZXJzXG5pbXBvcnQge1xuICBpbml0aWFsU3RhdGVFeGFtcGxlLFxuICBpbml0aWFsU3RhdGVFeGFtcGxlVHlwZXNcbn0gZnJvbSAnLi9yZWR1Y2Vycy9leGFtcGxlJ1xuXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKClcblxubGV0IHN0b3JlXG5cbmludGVyZmFjZSBpbml0aWFsU3RhdGVUeXBlcyB7XG4gIGV4YW1wbGU6IGluaXRpYWxTdGF0ZUV4YW1wbGVUeXBlc1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGV4YW1wbGU6IGluaXRpYWxTdGF0ZUV4YW1wbGVcbn1cblxuZnVuY3Rpb24gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlID0gaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXJzLFxuICAgIHByZWxvYWRlZFN0YXRlLFxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSlcbiAgKVxuXG4gIHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYXMpXG5cbiAgcmV0dXJuIHN0b3JlXG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGU6IGluaXRpYWxTdGF0ZVR5cGVzKSA9PiB7XG4gIGxldCBfc3RvcmUgPSBzdG9yZSA/PyBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUpXG5cbiAgLy8gQWZ0ZXIgbmF2aWdhdGluZyB0byBhIHBhZ2Ugd2l0aCBhbiBpbml0aWFsIFJlZHV4IHN0YXRlLCBtZXJnZSB0aGF0IHN0YXRlXG4gIC8vIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgaW4gdGhlIHN0b3JlLCBhbmQgY3JlYXRlIGEgbmV3IHN0b3JlXG4gIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xuICAgIF9zdG9yZSA9IGluaXRTdG9yZSh7XG4gICAgICAuLi5zdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgLi4ucHJlbG9hZGVkU3RhdGVcbiAgICB9KVxuICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXG4gICAgc3RvcmUgPSB1bmRlZmluZWRcbiAgfVxuXG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IHN0b3JlXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxuICAvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxuICBpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZVxuXG4gIHJldHVybiBfc3RvcmVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlVHlwZXMpOiBpbml0aWFsU3RhdGVUeXBlcyB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXG5cbiAgcmV0dXJuIHN0b3JlXG59XG5cbi8vIEluZmVyIHRoZSBgUm9vdFN0YXRlYCBhbmQgYEFwcERpc3BhdGNoYCB0eXBlcyBmcm9tIHRoZSBzdG9yZSBpdHNlbGZcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPlxuLy8gSW5mZXJyZWQgdHlwZToge3Bvc3RzOiBQb3N0c1N0YXRlLCBjb21tZW50czogQ29tbWVudHNTdGF0ZSwgdXNlcnM6IFVzZXJzU3RhdGV9XG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/store.ts\n");

/***/ })

});