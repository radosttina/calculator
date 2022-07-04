/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: \\\"Ubuntu\\\", sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  height: 100vh;\\r\\n  background-color: var(--background1);\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\nbody * {\\r\\n  transition-duration: 300ms;\\r\\n}\\r\\n\\r\\nbody,\\r\\nbody[data-theme=\\\"blue\\\"] {\\r\\n  --font-color: white;\\r\\n  --accent1: hsl(224deg 35% 15%);\\r\\n  --accent2: hsl(7deg 68% 50%);\\r\\n  --accent2-dark: hsl(2deg 55% 34%);\\r\\n  --accent3: hsl(223deg 21% 49%);\\r\\n  --accent3-dark: hsl(222deg 29% 28%);\\r\\n  --background1: hsl(224deg 26% 31%);\\r\\n  --background2: hsl(225deg 30% 21%);\\r\\n  --button-color: hsl(34deg 83% 98%);\\r\\n  --button-text: hsl(225deg 30% 21%);\\r\\n  --button-shadow: hsl(255deg 5% 74%);\\r\\n}\\r\\n\\r\\nbody[data-theme=\\\"green\\\"] {\\r\\n  --font-color: hsl(60deg 10% 20%);\\r\\n  --accent1: hsl(0deg 0% 93%);\\r\\n  --accent2: hsl(25deg 99% 39%);\\r\\n  --accent2-dark: hsl(24deg 100% 26%);\\r\\n  --accent3: hsl(185deg 41% 37%);\\r\\n  --accent3-dark: hsl(188deg 43% 28%);\\r\\n  --background1: hsl(0deg 0% 90%);\\r\\n  --background2: hsl(0deg 6% 82%);\\r\\n  --button-color: hsl(48deg 9% 89%);\\r\\n  --button-text: hsl(60deg 10% 20%);\\r\\n  --button-shadow: hsl(36deg 8% 61%);\\r\\n}\\r\\n\\r\\nbody[data-theme=\\\"purple\\\"] {\\r\\n  --font-color: hsl(51deg 88% 70%);\\r\\n  --accent1: hsl(269deg 74% 12%);\\r\\n  --accent2: hsl(176deg 100% 44%);\\r\\n  --accent2-dark: hsl(181deg 83% 72%);\\r\\n  --accent3: hsl(281deg 89% 25%);\\r\\n  --accent3-dark: hsl(284deg 69% 49%);\\r\\n  --background1: hsl(268deg 75% 9%);\\r\\n  --background2: hsl(269deg 74% 12%);\\r\\n  --button-color: hsl(269deg 46% 20%);\\r\\n  --button-text: hsl(51deg 88% 70%);\\r\\n  --button-shadow: hsl(288deg 63% 36%);\\r\\n}\\r\\n\\r\\n.calculator {\\r\\n  background-color: transparent;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 1.25rem;\\r\\n}\\r\\n\\r\\n.calculator header {\\r\\n  font-size: 0.75rem;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  align-content: center;\\r\\n  align-items: flex-end;\\r\\n  justify-content: space-between;\\r\\n  color: var(--font-color);\\r\\n}\\r\\n\\r\\n.calculator header h1 {\\r\\n  font-size: 1.25rem;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.calculator header .switch {\\r\\n  display: flex;\\r\\n  align-items: flex-end;\\r\\n}\\r\\n\\r\\n.calculator header .switch .switch-label {\\r\\n  font-size: 0.5rem;\\r\\n  font-weight: bold;\\r\\n  margin-right: 1rem;\\r\\n  line-height: 1rem;\\r\\n}\\r\\n\\r\\n.calculator header .switch .switch-control {\\r\\n  display: inline-grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  text-align: center;\\r\\n  color: var(--font-color);\\r\\n}\\r\\n\\r\\n.calculator header .switch .switch-control .checkbox {\\r\\n  display: inline-block;\\r\\n  position: relative;\\r\\n  width: 1.375rem;\\r\\n  height: 0.875rem;\\r\\n  background-color: var(--background2);\\r\\n}\\r\\n\\r\\n.calculator header .switch .switch-control label {\\r\\n  font-size: 0.75rem;\\r\\n  line-height: 0.75rem;\\r\\n  margin-bottom: 0.125rem;\\r\\n}\\r\\n\\r\\n.calculator header .switch .switch-control .checkbox:first-of-type {\\r\\n  border-radius: 0.625rem 0 0 0.625rem;\\r\\n}\\r\\n\\r\\n.calculator header .switch .switch-control .checkbox:last-of-type {\\r\\n  border-radius: 0 0.625rem 0.625rem 0;\\r\\n}\\r\\n\\r\\n.calculator header .switch .switch-control .checkbox input[type=\\\"radio\\\"] {\\r\\n  display: inline-block;\\r\\n  height: 0.625rem;\\r\\n  width: 100%;\\r\\n  border-radius: 0.625rem;\\r\\n  position: absolute;\\r\\n  top: 2px;\\r\\n  left: 0;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  z-index: 1;\\r\\n  opacity: 0;\\r\\n}\\r\\n\\r\\n.calculator header .switch .switch-control input[type=\\\"radio\\\"] + .visual-radio {\\r\\n  background: transparent;\\r\\n  display: inline-block;\\r\\n  height: 0.625rem;\\r\\n  width: 0.625rem;\\r\\n  border-radius: 0.625rem;\\r\\n  position: absolute;\\r\\n  top: 0.125rem;\\r\\n  left: 0.375rem;\\r\\n  transition-duration: 1s;\\r\\n}\\r\\n\\r\\n.calculator\\r\\n  header\\r\\n  .switch\\r\\n  .switch-control\\r\\n  input[type=\\\"radio\\\"]:checked\\r\\n  + .visual-radio {\\r\\n  background: var(--accent2);\\r\\n}\\r\\n\\r\\n.calculator .keyboard {\\r\\n  background-color: var(--background2);\\r\\n  display: grid;\\r\\n  padding: 1rem;\\r\\n  border-radius: 0.625rem;\\r\\n  grid-template-columns: 3rem 3rem 3rem 3rem;\\r\\n  grid-template-rows: 2rem 2rem 2rem 2rem 2rem;\\r\\n  column-gap: 0.75rem;\\r\\n  row-gap: 0.75rem;\\r\\n}\\r\\n\\r\\n.keyboard button {\\r\\n  border: none;\\r\\n  border-radius: 0.625rem;\\r\\n  background-color: var(--button-color);\\r\\n  font-weight: bold;\\r\\n  box-shadow: 0px 2px var(--button-shadow);\\r\\n  color: var(--button-text);\\r\\n  font-size: 1rem;\\r\\n  font-family: \\\"Ubuntu\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.keyboard button:hover {\\r\\n  filter: brightness(95%);\\r\\n  box-shadow: 0px 1px var(--button-shadow);\\r\\n}\\r\\n\\r\\n.keyboard button:active {\\r\\n  filter: brightness(90%);\\r\\n  box-shadow: inset 2px 2px var(--button-shadow);\\r\\n}\\r\\n\\r\\n.keyboard button.long-button-2x {\\r\\n  grid-column-end: span 2;\\r\\n}\\r\\n\\r\\n.keyboard button.blue-button {\\r\\n  background-color: var(--accent3);\\r\\n  color: whitesmoke;\\r\\n  box-shadow: 0px 2px var(--accent3-dark);\\r\\n}\\r\\n\\r\\n.keyboard button.blue-button:hover {\\r\\n  box-shadow: 0px 1px var(--accent3-dark);\\r\\n}\\r\\n\\r\\n.keyboard button.blue-button:active {\\r\\n  box-shadow: inset 2px 2px var(--accent3-dark);\\r\\n}\\r\\n\\r\\n.keyboard button.red-button {\\r\\n  background-color: var(--accent2);\\r\\n  color: whitesmoke;\\r\\n  box-shadow: 0px 2px var(--accent2-dark);\\r\\n}\\r\\n\\r\\n.keyboard button.red-button:hover {\\r\\n  box-shadow: 0px 1px var(--accent2-dark);\\r\\n}\\r\\n\\r\\n.keyboard button.red-button:active {\\r\\n  box-shadow: inset 2px 2px var(--accent2-dark);\\r\\n}\\r\\n\\r\\n.keyboard button.small-font-size {\\r\\n  font-size: 0.75rem;\\r\\n}\\r\\n\\r\\n.calculator .display {\\r\\n  position: relative;\\r\\n  width: 100%;\\r\\n  background-color: var(--accent1);\\r\\n  border-radius: 0.625rem;\\r\\n  height: 3.5rem;\\r\\n  color: var(--font-color);\\r\\n  margin: 1rem 0;\\r\\n  text-align: right;\\r\\n  vertical-align: middle;\\r\\n  font-size: 2rem;\\r\\n  line-height: 3.5rem;\\r\\n  padding: 0 1rem;\\r\\n  box-sizing: border-box;\\r\\n  font-weight: bold;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.calculator .display #result {\\r\\n  width: 90%;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  right: 0.625rem;\\r\\n  overflow-y: hidden;\\r\\n  overflow-x: scroll;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 440px) {\\r\\n  .calculator .keyboard {\\r\\n    padding: 1rem;\\r\\n    grid-template-columns: 3.5rem 3.5rem 3.5rem 3.5rem;\\r\\n    grid-template-rows: 2.5rem 2.5rem 2.5rem 2.5rem 2.5rem;\\r\\n    column-gap: 0.75rem;\\r\\n    row-gap: 0.75rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 740px) and (orientation: landscape) {\\r\\n  body {\\r\\n    overflow: visible;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calculator/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://calculator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calculator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calculator/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onCalculateResult\": () => (/* binding */ onCalculateResult),\n/* harmony export */   \"onDeleteLastCharacter\": () => (/* binding */ onDeleteLastCharacter),\n/* harmony export */   \"onKeyboardInput\": () => (/* binding */ onKeyboardInput),\n/* harmony export */   \"onResetCalculation\": () => (/* binding */ onResetCalculation),\n/* harmony export */   \"onVirtualCalculatorInput\": () => (/* binding */ onVirtualCalculatorInput)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\r\n\r\n\r\n\r\nconst resultElement = document.getElementById(\"result\");\r\nlet calculation = \"\";\r\n\r\nconst onEnterInput = (inputValue) => {\r\n  if (![..._constants__WEBPACK_IMPORTED_MODULE_0__.NUMBERS, ..._constants__WEBPACK_IMPORTED_MODULE_0__.OPERATION_SYMBOLS].includes(inputValue)) {\r\n    return;\r\n  }\r\n\r\n  // don't allow the first symbol to be special symbol\r\n  if (!calculation.length && (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSpecialSymbol)(inputValue)) {\r\n    return;\r\n  }\r\n\r\n  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.shouldOverwriteLastOperation)(calculation, inputValue)) {\r\n    calculation = calculation.slice(0, calculation.length - 1) + inputValue;\r\n  } else {\r\n    calculation += inputValue;\r\n  }\r\n\r\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)(resultElement, calculation);\r\n};\r\n\r\nconst onKeyboardInput = (e) => {\r\n  const inputValue = e.key;\r\n\r\n  if (_constants__WEBPACK_IMPORTED_MODULE_0__.RESULT_KEYS.includes(inputValue)) {\r\n    onCalculateResult();\r\n    return;\r\n  }\r\n\r\n  if (inputValue === _constants__WEBPACK_IMPORTED_MODULE_0__.DELETE_KEY) {\r\n    onDeleteLastCharacter();\r\n  }\r\n\r\n  onEnterInput(e.key);\r\n};\r\n\r\nconst onVirtualCalculatorInput = (e) => {\r\n  onEnterInput(e.target.textContent);\r\n};\r\n\r\nconst onCalculateResult = () => {\r\n  // remove symbols other than number and arithmetic operations\r\n  const sanitizedCalculation = calculation.replaceAll(\r\n    /(?!-)[^0-9.+*/\\-=]/g,\r\n    \"\"\r\n  );\r\n  const result = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.calculateStringEquation)(sanitizedCalculation);\r\n\r\n  // reset the calculation (without updating the display)\r\n  // so that the next user input will initialize a new calculation\r\n  calculation = \"\";\r\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)(resultElement, result);\r\n};\r\n\r\nconst onDeleteLastCharacter = () => {\r\n  calculation = calculation.slice(0, calculation.length - 1);\r\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)(resultElement, calculation);\r\n};\r\n\r\nconst onResetCalculation = () => {\r\n  calculation = \"\";\r\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)(resultElement, calculation);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://calculator/./src/calculator.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DELETE_KEY\": () => (/* binding */ DELETE_KEY),\n/* harmony export */   \"NUMBERS\": () => (/* binding */ NUMBERS),\n/* harmony export */   \"OPERATION_SYMBOLS\": () => (/* binding */ OPERATION_SYMBOLS),\n/* harmony export */   \"RESULT_KEYS\": () => (/* binding */ RESULT_KEYS)\n/* harmony export */ });\nconst NUMBERS = [\"0\", \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\"];\r\nconst OPERATION_SYMBOLS = [\"*\", \"+\", \"/\", \"-\", \".\"];\r\nconst RESULT_KEYS = [\"=\", \"Enter\"];\r\nconst DELETE_KEY = \"Backspace\";\r\n\n\n//# sourceURL=webpack://calculator/./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator */ \"./src/calculator.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ \"./src/theme.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"keydown\", _calculator__WEBPACK_IMPORTED_MODULE_0__.onKeyboardInput);\r\n\r\nwindow.onThemeChange = _theme__WEBPACK_IMPORTED_MODULE_1__.onThemeChange;\r\n\r\nwindow.onVirtualCalculatorInput = _calculator__WEBPACK_IMPORTED_MODULE_0__.onVirtualCalculatorInput;\r\nwindow.onCalculateResult = _calculator__WEBPACK_IMPORTED_MODULE_0__.onCalculateResult;\r\nwindow.onResetCalculation = _calculator__WEBPACK_IMPORTED_MODULE_0__.onResetCalculation;\r\nwindow.onDeleteLastCharacter = _calculator__WEBPACK_IMPORTED_MODULE_0__.onDeleteLastCharacter;\r\n\n\n//# sourceURL=webpack://calculator/./src/index.js?");

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onThemeChange\": () => (/* binding */ onThemeChange)\n/* harmony export */ });\nconst onThemeChange = () => {\r\n  const theme = [...document.querySelectorAll('input[name=\"theme\"]')].filter(\r\n    (e) => e.checked\r\n  )[0].dataset.theme;\r\n\r\n  document.body.dataset.theme = theme;\r\n};\r\n\n\n//# sourceURL=webpack://calculator/./src/theme.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateStringEquation\": () => (/* binding */ calculateStringEquation),\n/* harmony export */   \"isSpecialSymbol\": () => (/* binding */ isSpecialSymbol),\n/* harmony export */   \"shouldOverwriteLastOperation\": () => (/* binding */ shouldOverwriteLastOperation),\n/* harmony export */   \"updateDisplay\": () => (/* binding */ updateDisplay)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\nconst updateDisplay = (resultElement, value) => {\r\n  resultElement.innerText = value || 0;\r\n  resultElement.scrollLeft = resultElement.scrollWidth;\r\n};\r\n\r\nconst calculateStringEquation = (equation) =>\r\n  new Function(\"return \" + equation)();\r\n\r\nconst shouldOverwriteLastOperation = (calculation, newOperation) =>\r\n  isSpecialSymbol(calculation[calculation.length - 1]) &&\r\n  isSpecialSymbol(newOperation);\r\n\r\nconst isSpecialSymbol = (value) => _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATION_SYMBOLS.includes(value);\r\n\n\n//# sourceURL=webpack://calculator/./src/utils.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;