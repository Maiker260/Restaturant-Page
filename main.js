"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Images/background.jpg */ "./src/Images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
}

.flex {
    display: flex;
}

body {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 45% 100%;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin: 0;
}

/* Top Section */
.top_section {
    min-width: 100vw;
    min-height: 7vh;
    background-color: #000000d9;
    align-items: center;
    position: fixed;

}

#main_logo_title {
    cursor: pointer;
}

.nav_bar {
    width: 100%;
    justify-content: space-around;
    align-items: center;
}

.left_nav_bar {
    color: white;
    align-items: center;
    gap: 1em;
}

.main_logo {
    fill: #16eadc;
}

.main_title {
    color: #16eadc;
}

.right_nav_bar {
    justify-content: space-around;
    gap: 2em;
}

.right_nav_bar_list {
    list-style: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}

.right_nav_bar_list:hover {
    color: #16eadc;
}

/* Content Section */
#content {
    color: white;
    overflow: auto;
}

.main_section {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.main_section_title {
    font-size: 3rem;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 0.5em;
    color: #16eadc;
    text-decoration: underline;
}

.main_container {
    background-color: #000000d9;
    border: 2px solid white;
    padding: 6em 6em 6em 6em;
    flex-direction: column;
    width: 40%;
}

.homepage_main_container {
    background-color: #000000d9;
    border: 2px solid white;
    flex-direction: column;
    padding: 2em;
}



        /* HOME */
.home_section_title {
    margin-top: 0;
    font-size: 2.5rem;
    color: #16eadc;
}

.home_section_btn {
    padding: 0.8em;
    background-color: #000;
    color: white;
    font-size: 1.5rem;
    border: 2px solid white;
    cursor: pointer;
}

.home_section_btn:hover {
    color: #71a8a1;
}

.item_container {
    align-items: center;
    font-size: 1.5rem;
}

.item_container:hover {

    color: #16eadc;

}

        /* MENU */
.dish_name {
    text-align: left;
    width: 75%;
}

.dish_price {
    text-align: right;
    width: 25%;
}

.menu_title {
    font-size: 3rem;
    text-align: center;
    margin-top: 5em;
    margin-bottom: 1em;
    color: #16eadc;
    text-decoration: underline;
}

.menu_section_title {
    font-size: 2rem;
    font-weight: bolder;
    text-align: center;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    color: #71a8a1;
}

.menu_main_container {
    background-color: #000000d9;
    border: 2px solid white;
    padding: 65em 6em 6em 6em;
    flex-direction: column;
    width: 40%;
}

.item_details {
    margin: 0.5em 0;
}

.menu_section_title_bottom {
    margin-top: 2em;

}

        /* ABOUT */

.about_content {
    font-size: 1.5rem;
}

        /* CONTACT */

.contact_content {
    font-size: 1.5rem;

}

/* Footer Section */
.footer {
    font-size: 1.2rem;
    color: white;
    min-width: 100vw;
    min-height: 3vh;
    background-color: #000000d9;
    justify-content: center;
    position: fixed;
    left: 0;
    bottom: 0;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;IACtB,iCAAiC;IACjC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yDAAgD;IAChD,4BAA4B;IAC5B,sBAAsB;IACtB,6BAA6B;IAC7B,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,SAAS;AACb;;AAEA,gBAAgB;AAChB;IACI,gBAAgB;IAChB,eAAe;IACf,2BAA2B;IAC3B,mBAAmB;IACnB,eAAe;;AAEnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,6BAA6B;IAC7B,QAAQ;AACZ;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA,oBAAoB;AACpB;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,0BAA0B;AAC9B;;AAEA;IACI,2BAA2B;IAC3B,uBAAuB;IACvB,wBAAwB;IACxB,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,uBAAuB;IACvB,sBAAsB;IACtB,YAAY;AAChB;;;;QAIQ,SAAS;AACjB;IACI,aAAa;IACb,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;;IAEI,cAAc;;AAElB;;QAEQ,SAAS;AACjB;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,cAAc;IACd,0BAA0B;AAC9B;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,oBAAoB;IACpB,cAAc;AAClB;;AAEA;IACI,2BAA2B;IAC3B,uBAAuB;IACvB,yBAAyB;IACzB,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;;AAEnB;;QAEQ,UAAU;;AAElB;IACI,iBAAiB;AACrB;;QAEQ,YAAY;;AAEpB;IACI,iBAAiB;;AAErB;;AAEA,mBAAmB;AACnB;IACI,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,2BAA2B;IAC3B,uBAAuB;IACvB,eAAe;IACf,OAAO;IACP,SAAS;AACb","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n:root {\n    box-sizing: border-box;\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n}\n\n.flex {\n    display: flex;\n}\n\nbody {\n    background-image: url(\"./Images/background.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 45% 100%;\n    position: relative;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    margin: 0;\n}\n\n/* Top Section */\n.top_section {\n    min-width: 100vw;\n    min-height: 7vh;\n    background-color: #000000d9;\n    align-items: center;\n    position: fixed;\n\n}\n\n#main_logo_title {\n    cursor: pointer;\n}\n\n.nav_bar {\n    width: 100%;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.left_nav_bar {\n    color: white;\n    align-items: center;\n    gap: 1em;\n}\n\n.main_logo {\n    fill: #16eadc;\n}\n\n.main_title {\n    color: #16eadc;\n}\n\n.right_nav_bar {\n    justify-content: space-around;\n    gap: 2em;\n}\n\n.right_nav_bar_list {\n    list-style: none;\n    color: white;\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n\n.right_nav_bar_list:hover {\n    color: #16eadc;\n}\n\n/* Content Section */\n#content {\n    color: white;\n    overflow: auto;\n}\n\n.main_section {\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n}\n\n.main_section_title {\n    font-size: 3rem;\n    text-align: center;\n    margin-top: 1em;\n    margin-bottom: 0.5em;\n    color: #16eadc;\n    text-decoration: underline;\n}\n\n.main_container {\n    background-color: #000000d9;\n    border: 2px solid white;\n    padding: 6em 6em 6em 6em;\n    flex-direction: column;\n    width: 40%;\n}\n\n.homepage_main_container {\n    background-color: #000000d9;\n    border: 2px solid white;\n    flex-direction: column;\n    padding: 2em;\n}\n\n\n\n        /* HOME */\n.home_section_title {\n    margin-top: 0;\n    font-size: 2.5rem;\n    color: #16eadc;\n}\n\n.home_section_btn {\n    padding: 0.8em;\n    background-color: #000;\n    color: white;\n    font-size: 1.5rem;\n    border: 2px solid white;\n    cursor: pointer;\n}\n\n.home_section_btn:hover {\n    color: #71a8a1;\n}\n\n.item_container {\n    align-items: center;\n    font-size: 1.5rem;\n}\n\n.item_container:hover {\n\n    color: #16eadc;\n\n}\n\n        /* MENU */\n.dish_name {\n    text-align: left;\n    width: 75%;\n}\n\n.dish_price {\n    text-align: right;\n    width: 25%;\n}\n\n.menu_title {\n    font-size: 3rem;\n    text-align: center;\n    margin-top: 5em;\n    margin-bottom: 1em;\n    color: #16eadc;\n    text-decoration: underline;\n}\n\n.menu_section_title {\n    font-size: 2rem;\n    font-weight: bolder;\n    text-align: center;\n    margin-top: 0.5em;\n    margin-bottom: 0.5em;\n    color: #71a8a1;\n}\n\n.menu_main_container {\n    background-color: #000000d9;\n    border: 2px solid white;\n    padding: 65em 6em 6em 6em;\n    flex-direction: column;\n    width: 40%;\n}\n\n.item_details {\n    margin: 0.5em 0;\n}\n\n.menu_section_title_bottom {\n    margin-top: 2em;\n\n}\n\n        /* ABOUT */\n\n.about_content {\n    font-size: 1.5rem;\n}\n\n        /* CONTACT */\n\n.contact_content {\n    font-size: 1.5rem;\n\n}\n\n/* Footer Section */\n.footer {\n    font-size: 1.2rem;\n    color: white;\n    min-width: 100vw;\n    min-height: 3vh;\n    background-color: #000000d9;\n    justify-content: center;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about-content.js":
/*!******************************!*\
  !*** ./src/about-content.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutContent)
/* harmony export */ });
function aboutContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const container = document.createElement("div");
    container.classList.add("flex");
    container.classList.add("main_container");

    const about = document.createElement("h2");
    about.textContent = "ABOUT";
    about.classList.add("main_section_title");
    container.appendChild(about);

    mainContentSection.appendChild(container);

    const mission = document.createElement("p");
    mission.classList.add("about_content");
    mission.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati id earum laboriosam ducimus iste recusandae placeat itaque iure temporibus nemo numquam dignissimos possimus, consequuntur eligendi odio nostrum voluptas culpa distinctio?"
    container.appendChild(mission);



    return mainContentSection;

};


/***/ }),

/***/ "./src/contact-content.js":
/*!********************************!*\
  !*** ./src/contact-content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactContent)
/* harmony export */ });
function contactContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const container = document.createElement("div");
    container.classList.add("flex");
    container.classList.add("main_container");

    const contact = document.createElement("h2");
    contact.textContent = "CONTACT INFORMATION";
    contact.classList.add("main_section_title");
    container.appendChild(contact);

    mainContentSection.appendChild(container);

    const contactInfo = document.createElement("p");
    contactInfo.classList.add("contact_content");
    contactInfo.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati id earum laboriosam ducimus iste recusandae placeat itaque iure temporibus nemo numquam dignissimos possimus, consequuntur eligendi odio nostrum voluptas culpa distinctio?"
    container.appendChild(contactInfo);

    return mainContentSection;

};

/***/ }),

/***/ "./src/homepage-content.js":
/*!*********************************!*\
  !*** ./src/homepage-content.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homepageContent)
/* harmony export */ });
/* harmony import */ var _menu_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-content */ "./src/menu-content.js");


function homepageContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const container = document.createElement("div");
    container.classList.add("flex");
    container.classList.add("homepage_main_container");

    const greeting = document.createElement("h2");
    greeting.textContent = "Welcome to Odin Restaurant";
    greeting.classList.add("home_section_title");
    container.appendChild(greeting);

    const GoToMenuBtn = document.createElement("button");
    GoToMenuBtn.textContent = "Go to the Menu";
    GoToMenuBtn.setAttribute("id", "GoToMenuBtn");
    GoToMenuBtn.classList.add("home_section_btn");
    container.appendChild(GoToMenuBtn);

    GoToMenuBtn.addEventListener("click", _menu_content__WEBPACK_IMPORTED_MODULE_0__["default"]);

    mainContentSection.appendChild(container);

    return mainContentSection;

};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage-content */ "./src/homepage-content.js");
/* harmony import */ var _menu_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-content */ "./src/menu-content.js");
/* harmony import */ var _about_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-content */ "./src/about-content.js");
/* harmony import */ var _contact_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-content */ "./src/contact-content.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// Script Files





// Style Files



// Event Listeners for the NavBar
function eventListeners() {
    const homeBtn = document.querySelector("#home_nav_btn");
    const menuBtn = document.querySelector("#menu_nav_btn");
    const aboutBtn = document.querySelector("#about_nav_btn");
    const contactBtn = document.querySelector("#contact_nav_btn");
    const mainTitle = document.querySelector("#main_logo_title");

    homeBtn.addEventListener("click", _homepage_content__WEBPACK_IMPORTED_MODULE_0__["default"]);
    window.addEventListener("DOMContentLoaded", _homepage_content__WEBPACK_IMPORTED_MODULE_0__["default"]);
    menuBtn.addEventListener("click", _menu_content__WEBPACK_IMPORTED_MODULE_1__["default"]);
    aboutBtn.addEventListener("click", _about_content__WEBPACK_IMPORTED_MODULE_2__["default"]);
    contactBtn.addEventListener("click", _contact_content__WEBPACK_IMPORTED_MODULE_3__["default"]);
    mainTitle.addEventListener("click", _homepage_content__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

const navButtons = eventListeners();

/***/ }),

/***/ "./src/menu-content.js":
/*!*****************************!*\
  !*** ./src/menu-content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuContent)
/* harmony export */ });
function menuContent() {
    
    const mainContentSection = document.querySelector("#content");

    // Clear current content
    mainContentSection.textContent = "";

    const container = document.createElement("div");
    container.classList.add("flex");
    container.classList.add("menu_main_container");
    
    const menu = document.createElement("h2");
    menu.classList.add("menu_title");
    menu.textContent = "MENU";
    container.appendChild(menu);

    mainContentSection.appendChild(container);


    // Add the Menu Items
    const mainDish = document.createElement("h3");
    mainDish.classList.add("menu_section_title");
    mainDish.textContent = "Main Dish";
    container.appendChild(mainDish);
    container.appendChild(createMenu(mainDishItems));

    const drink = document.createElement("h3");
    drink.classList.add("menu_section_title");
    drink.classList.add("menu_section_title_bottom");
    drink.textContent = "Drinks";
    container.appendChild(drink);
    container.appendChild(createMenu(drinksItems));

    const desserts = document.createElement("h3");
    desserts.classList.add("menu_section_title");
    desserts.classList.add("menu_section_title_bottom");
    desserts.textContent = "Desserts";
    container.appendChild(desserts);
    container.appendChild(createMenu(dessertsItems));


    return mainContentSection;

};


// Create the Menu Dinamically depending on the items on the list.
const mainDishItems =  [
    { name: "Spaghetti Carbonara", price: "$12.99" },
    { name: "Margherita Pizza", price: "$10.99" },
    { name: "Grilled Salmon", price: "$15.99" },
    // More Items in the list.......
    { name: "Spaghetti Carbonara", price: "$12.99" },
    { name: "Margherita Pizza", price: "$10.99" },
    { name: "Grilled Salmon", price: "$15.99" },
    // More Items in the list.......
    { name: "Spaghetti Carbonara", price: "$12.99" },
    { name: "Margherita Pizza", price: "$10.99" },
    { name: "Grilled Salmon", price: "$15.99" },
    // More Items in the list.......
    { name: "Spaghetti Carbonara", price: "$12.99" },
    { name: "Margherita Pizza", price: "$10.99" },
    { name: "Grilled Salmon", price: "$15.99" }
    // More Items in the list.......
    
];

const drinksItems = [
    { name: "Coca-Cola", price: "$2.99" },
    { name: "Fresh Orange Juice", price: "$4.99" },
    { name: "Coffee", price: "$3.49" },
    // More Items in the list.......
    { name: "Coca-Cola", price: "$2.99" },
    { name: "Fresh Orange Juice", price: "$4.99" },
    { name: "Coffee", price: "$3.49" },
    // More Items in the list.......
    { name: "Coca-Cola", price: "$2.99" },
    { name: "Fresh Orange Juice", price: "$4.99" },
    { name: "Coffee", price: "$3.49" },
    // More Items in the list.......
    { name: "Coca-Cola", price: "$2.99" },
    { name: "Fresh Orange Juice", price: "$4.99" },
    { name: "Coffee", price: "$3.49" },
    // More Items in the list.......
];

const dessertsItems = [
    { name: "Chocolate Brownie", price: "$6.99" },
    { name: "Vanilla Ice Cream", price: "$4.99" },
    { name: "Cheesecake", price: "$7.49" },
    // More Items in the list.......
    { name: "Chocolate Brownie", price: "$6.99" },
    { name: "Vanilla Ice Cream", price: "$4.99" },
    { name: "Cheesecake", price: "$7.49" },
    // More Items in the list.......
    { name: "Chocolate Brownie", price: "$6.99" },
    { name: "Vanilla Ice Cream", price: "$4.99" },
    { name: "Cheesecake", price: "$7.49" },
    // More Items in the list.......
    { name: "Chocolate Brownie", price: "$6.99" },
    { name: "Vanilla Ice Cream", price: "$4.99" },
    { name: "Cheesecake", price: "$7.49" },
    // More Items in the list.......
];


function createMenu(menuSection) {

    const dishContainer = document.createElement("div");
    // dishContainer.classList.add("flex");
    dishContainer.classList.add("dish_container");

    menuSection.forEach(item => {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("flex");
        itemContainer.classList.add("item_container");

        const itemName = document.createElement("p");
        itemName.textContent = item.name;
        itemName.classList.add("dish_name");
        itemName.classList.add("item_details");
        const itemPrice = document.createElement("p");
        itemPrice.textContent = item.price;
        itemPrice.classList.add("dish_price");
        itemPrice.classList.add("item_details");
        
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemPrice);

        dishContainer.appendChild(itemContainer);
    });

    return dishContainer;
}

/***/ }),

/***/ "./src/Images/background.jpg":
/*!***********************************!*\
  !*** ./src/Images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba9b91a386ab4797c11e.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkhBQTBDO0FBQ3RGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysb0hBQW9IO0FBQ3BILHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsU0FBUyxVQUFVLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFdBQVcsT0FBTyxVQUFVLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFh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cmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQtY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC1jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS1jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NSUgMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDA7XG59XG5cbi8qIFRvcCBTZWN0aW9uICovXG4udG9wX3NlY3Rpb24ge1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG4gICAgbWluLWhlaWdodDogN3ZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBkOTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxufVxuXG4jbWFpbl9sb2dvX3RpdGxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZfYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGVmdF9uYXZfYmFyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFlbTtcbn1cblxuLm1haW5fbG9nbyB7XG4gICAgZmlsbDogIzE2ZWFkYztcbn1cblxuLm1haW5fdGl0bGUge1xuICAgIGNvbG9yOiAjMTZlYWRjO1xufVxuXG4ucmlnaHRfbmF2X2JhciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZ2FwOiAyZW07XG59XG5cbi5yaWdodF9uYXZfYmFyX2xpc3Qge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJpZ2h0X25hdl9iYXJfbGlzdDpob3ZlciB7XG4gICAgY29sb3I6ICMxNmVhZGM7XG59XG5cbi8qIENvbnRlbnQgU2VjdGlvbiAqL1xuI2NvbnRlbnQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1haW5fc2VjdGlvbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYWluX3NlY3Rpb25fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgIGNvbG9yOiAjMTZlYWRjO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubWFpbl9jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBkOTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBwYWRkaW5nOiA2ZW0gNmVtIDZlbSA2ZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNDAlO1xufVxuXG4uaG9tZXBhZ2VfbWFpbl9jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBkOTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDJlbTtcbn1cblxuXG5cbiAgICAgICAgLyogSE9NRSAqL1xuLmhvbWVfc2VjdGlvbl90aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBjb2xvcjogIzE2ZWFkYztcbn1cblxuLmhvbWVfc2VjdGlvbl9idG4ge1xuICAgIHBhZGRpbmc6IDAuOGVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvbWVfc2VjdGlvbl9idG46aG92ZXIge1xuICAgIGNvbG9yOiAjNzFhOGExO1xufVxuXG4uaXRlbV9jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5pdGVtX2NvbnRhaW5lcjpob3ZlciB7XG5cbiAgICBjb2xvcjogIzE2ZWFkYztcblxufVxuXG4gICAgICAgIC8qIE1FTlUgKi9cbi5kaXNoX25hbWUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDc1JTtcbn1cblxuLmRpc2hfcHJpY2Uge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi5tZW51X3RpdGxlIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgY29sb3I6ICMxNmVhZGM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5tZW51X3NlY3Rpb25fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICBjb2xvcjogIzcxYThhMTtcbn1cblxuLm1lbnVfbWFpbl9jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBkOTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBwYWRkaW5nOiA2NWVtIDZlbSA2ZW0gNmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDQwJTtcbn1cblxuLml0ZW1fZGV0YWlscyB7XG4gICAgbWFyZ2luOiAwLjVlbSAwO1xufVxuXG4ubWVudV9zZWN0aW9uX3RpdGxlX2JvdHRvbSB7XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuXG59XG5cbiAgICAgICAgLyogQUJPVVQgKi9cblxuLmFib3V0X2NvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4gICAgICAgIC8qIENPTlRBQ1QgKi9cblxuLmNvbnRhY3RfY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG5cbn1cblxuLyogRm9vdGVyIFNlY3Rpb24gKi9cbi5mb290ZXIge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xuICAgIG1pbi1oZWlnaHQ6IDN2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwZDk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5REFBZ0Q7SUFDaEQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7Ozs7UUFJUSxTQUFTO0FBQ2pCO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksY0FBYzs7QUFFbEI7O1FBRVEsU0FBUztBQUNqQjtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7O0FBRW5COztRQUVRLFVBQVU7O0FBRWxCO0lBQ0ksaUJBQWlCO0FBQ3JCOztRQUVRLFlBQVk7O0FBRXBCO0lBQ0ksaUJBQWlCOztBQUVyQjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsT0FBTztJQUNQLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLmZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL0ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NSUgMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogVG9wIFNlY3Rpb24gKi9cXG4udG9wX3NlY3Rpb24ge1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiA3dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBkOTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcblxcbn1cXG5cXG4jbWFpbl9sb2dvX3RpdGxlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2X2JhciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnRfbmF2X2JhciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxZW07XFxufVxcblxcbi5tYWluX2xvZ28ge1xcbiAgICBmaWxsOiAjMTZlYWRjO1xcbn1cXG5cXG4ubWFpbl90aXRsZSB7XFxuICAgIGNvbG9yOiAjMTZlYWRjO1xcbn1cXG5cXG4ucmlnaHRfbmF2X2JhciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDJlbTtcXG59XFxuXFxuLnJpZ2h0X25hdl9iYXJfbGlzdCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJpZ2h0X25hdl9iYXJfbGlzdDpob3ZlciB7XFxuICAgIGNvbG9yOiAjMTZlYWRjO1xcbn1cXG5cXG4vKiBDb250ZW50IFNlY3Rpb24gKi9cXG4jY29udGVudCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5tYWluX3NlY3Rpb24ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1haW5fc2VjdGlvbl90aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgICBjb2xvcjogIzE2ZWFkYztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5tYWluX2NvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBkOTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIHBhZGRpbmc6IDZlbSA2ZW0gNmVtIDZlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLmhvbWVwYWdlX21haW5fY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGQ5O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMmVtO1xcbn1cXG5cXG5cXG5cXG4gICAgICAgIC8qIEhPTUUgKi9cXG4uaG9tZV9zZWN0aW9uX3RpdGxlIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGNvbG9yOiAjMTZlYWRjO1xcbn1cXG5cXG4uaG9tZV9zZWN0aW9uX2J0biB7XFxuICAgIHBhZGRpbmc6IDAuOGVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG9tZV9zZWN0aW9uX2J0bjpob3ZlciB7XFxuICAgIGNvbG9yOiAjNzFhOGExO1xcbn1cXG5cXG4uaXRlbV9jb250YWluZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLml0ZW1fY29udGFpbmVyOmhvdmVyIHtcXG5cXG4gICAgY29sb3I6ICMxNmVhZGM7XFxuXFxufVxcblxcbiAgICAgICAgLyogTUVOVSAqL1xcbi5kaXNoX25hbWUge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogNzUlO1xcbn1cXG5cXG4uZGlzaF9wcmljZSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB3aWR0aDogMjUlO1xcbn1cXG5cXG4ubWVudV90aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiA1ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgY29sb3I6ICMxNmVhZGM7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ubWVudV9zZWN0aW9uX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gICAgY29sb3I6ICM3MWE4YTE7XFxufVxcblxcbi5tZW51X21haW5fY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGQ5O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgcGFkZGluZzogNjVlbSA2ZW0gNmVtIDZlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLml0ZW1fZGV0YWlscyB7XFxuICAgIG1hcmdpbjogMC41ZW0gMDtcXG59XFxuXFxuLm1lbnVfc2VjdGlvbl90aXRsZV9ib3R0b20ge1xcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxuXFxufVxcblxcbiAgICAgICAgLyogQUJPVVQgKi9cXG5cXG4uYWJvdXRfY29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4gICAgICAgIC8qIENPTlRBQ1QgKi9cXG5cXG4uY29udGFjdF9jb250ZW50IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuXFxufVxcblxcbi8qIEZvb3RlciBTZWN0aW9uICovXFxuLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGQ5O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0Q29udGVudCgpIHtcbiAgICBcbiAgICBjb25zdCBtYWluQ29udGVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICAvLyBDbGVhciBjdXJyZW50IGNvbnRlbnRcbiAgICBtYWluQ29udGVudFNlY3Rpb24udGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZsZXhcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluX2NvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGFib3V0LnRleHRDb250ZW50ID0gXCJBQk9VVFwiO1xuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJtYWluX3NlY3Rpb25fdGl0bGVcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0KTtcblxuICAgIG1haW5Db250ZW50U2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgY29uc3QgbWlzc2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1pc3Npb24uY2xhc3NMaXN0LmFkZChcImFib3V0X2NvbnRlbnRcIik7XG4gICAgbWlzc2lvbi50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE9iY2FlY2F0aSBpZCBlYXJ1bSBsYWJvcmlvc2FtIGR1Y2ltdXMgaXN0ZSByZWN1c2FuZGFlIHBsYWNlYXQgaXRhcXVlIGl1cmUgdGVtcG9yaWJ1cyBuZW1vIG51bXF1YW0gZGlnbmlzc2ltb3MgcG9zc2ltdXMsIGNvbnNlcXV1bnR1ciBlbGlnZW5kaSBvZGlvIG5vc3RydW0gdm9sdXB0YXMgY3VscGEgZGlzdGluY3Rpbz9cIlxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtaXNzaW9uKTtcblxuXG5cbiAgICByZXR1cm4gbWFpbkNvbnRlbnRTZWN0aW9uO1xuXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdENvbnRlbnQoKSB7XG4gICAgXG4gICAgY29uc3QgbWFpbkNvbnRlbnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgLy8gQ2xlYXIgY3VycmVudCBjb250ZW50XG4gICAgbWFpbkNvbnRlbnRTZWN0aW9uLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbl9jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1QgSU5GT1JNQVRJT05cIjtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJtYWluX3NlY3Rpb25fdGl0bGVcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gICAgbWFpbkNvbnRlbnRTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0X2NvbnRlbnRcIik7XG4gICAgY29udGFjdEluZm8udGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBPYmNhZWNhdGkgaWQgZWFydW0gbGFib3Jpb3NhbSBkdWNpbXVzIGlzdGUgcmVjdXNhbmRhZSBwbGFjZWF0IGl0YXF1ZSBpdXJlIHRlbXBvcmlidXMgbmVtbyBudW1xdWFtIGRpZ25pc3NpbW9zIHBvc3NpbXVzLCBjb25zZXF1dW50dXIgZWxpZ2VuZGkgb2RpbyBub3N0cnVtIHZvbHVwdGFzIGN1bHBhIGRpc3RpbmN0aW8/XCJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xuXG4gICAgcmV0dXJuIG1haW5Db250ZW50U2VjdGlvbjtcblxufTsiLCJpbXBvcnQgc2hvd01lbnVDb250ZW50IGZyb20gXCIuL21lbnUtY29udGVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lcGFnZUNvbnRlbnQoKSB7XG4gICAgXG4gICAgY29uc3QgbWFpbkNvbnRlbnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgLy8gQ2xlYXIgY3VycmVudCBjb250ZW50XG4gICAgbWFpbkNvbnRlbnRTZWN0aW9uLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZXBhZ2VfbWFpbl9jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBncmVldGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBncmVldGluZy50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBPZGluIFJlc3RhdXJhbnRcIjtcbiAgICBncmVldGluZy5jbGFzc0xpc3QuYWRkKFwiaG9tZV9zZWN0aW9uX3RpdGxlXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmVldGluZyk7XG5cbiAgICBjb25zdCBHb1RvTWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgR29Ub01lbnVCdG4udGV4dENvbnRlbnQgPSBcIkdvIHRvIHRoZSBNZW51XCI7XG4gICAgR29Ub01lbnVCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJHb1RvTWVudUJ0blwiKTtcbiAgICBHb1RvTWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiaG9tZV9zZWN0aW9uX2J0blwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoR29Ub01lbnVCdG4pO1xuXG4gICAgR29Ub01lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dNZW51Q29udGVudCk7XG5cbiAgICBtYWluQ29udGVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIHJldHVybiBtYWluQ29udGVudFNlY3Rpb247XG5cbn07IiwiLy8gU2NyaXB0IEZpbGVzXG5pbXBvcnQgc2hvd0hvbWVwYWdlQ29udGVudCBmcm9tIFwiLi9ob21lcGFnZS1jb250ZW50XCI7XG5pbXBvcnQgc2hvd01lbnVDb250ZW50IGZyb20gXCIuL21lbnUtY29udGVudFwiO1xuaW1wb3J0IHNob3dBYm91dENvbnRlbnQgZnJvbSBcIi4vYWJvdXQtY29udGVudFwiO1xuaW1wb3J0IHNob3dDb250YWN0Q29udGVudCBmcm9tIFwiLi9jb250YWN0LWNvbnRlbnRcIjtcblxuLy8gU3R5bGUgRmlsZXNcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cblxuLy8gRXZlbnQgTGlzdGVuZXJzIGZvciB0aGUgTmF2QmFyXG5mdW5jdGlvbiBldmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lX25hdl9idG5cIik7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudV9uYXZfYnRuXCIpO1xuICAgIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dF9uYXZfYnRuXCIpO1xuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RfbmF2X2J0blwiKTtcbiAgICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5fbG9nb190aXRsZVwiKTtcblxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dIb21lcGFnZUNvbnRlbnQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBzaG93SG9tZXBhZ2VDb250ZW50KTtcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TWVudUNvbnRlbnQpO1xuICAgIGFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93QWJvdXRDb250ZW50KTtcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Q29udGFjdENvbnRlbnQpO1xuICAgIG1haW5UaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0hvbWVwYWdlQ29udGVudCk7XG59XG5cbmNvbnN0IG5hdkJ1dHRvbnMgPSBldmVudExpc3RlbmVycygpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVDb250ZW50KCkge1xuICAgIFxuICAgIGNvbnN0IG1haW5Db250ZW50U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIC8vIENsZWFyIGN1cnJlbnQgY29udGVudFxuICAgIG1haW5Db250ZW50U2VjdGlvbi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmxleFwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnVfbWFpbl9jb250YWluZXJcIik7XG4gICAgXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51X3RpdGxlXCIpO1xuICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBtYWluQ29udGVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuXG4gICAgLy8gQWRkIHRoZSBNZW51IEl0ZW1zXG4gICAgY29uc3QgbWFpbkRpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgbWFpbkRpc2guY2xhc3NMaXN0LmFkZChcIm1lbnVfc2VjdGlvbl90aXRsZVwiKTtcbiAgICBtYWluRGlzaC50ZXh0Q29udGVudCA9IFwiTWFpbiBEaXNoXCI7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5EaXNoKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudShtYWluRGlzaEl0ZW1zKSk7XG5cbiAgICBjb25zdCBkcmluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBkcmluay5jbGFzc0xpc3QuYWRkKFwibWVudV9zZWN0aW9uX3RpdGxlXCIpO1xuICAgIGRyaW5rLmNsYXNzTGlzdC5hZGQoXCJtZW51X3NlY3Rpb25fdGl0bGVfYm90dG9tXCIpO1xuICAgIGRyaW5rLnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJpbmspO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51KGRyaW5rc0l0ZW1zKSk7XG5cbiAgICBjb25zdCBkZXNzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBkZXNzZXJ0cy5jbGFzc0xpc3QuYWRkKFwibWVudV9zZWN0aW9uX3RpdGxlXCIpO1xuICAgIGRlc3NlcnRzLmNsYXNzTGlzdC5hZGQoXCJtZW51X3NlY3Rpb25fdGl0bGVfYm90dG9tXCIpO1xuICAgIGRlc3NlcnRzLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNzZXJ0cyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoZGVzc2VydHNJdGVtcykpO1xuXG5cbiAgICByZXR1cm4gbWFpbkNvbnRlbnRTZWN0aW9uO1xuXG59O1xuXG5cbi8vIENyZWF0ZSB0aGUgTWVudSBEaW5hbWljYWxseSBkZXBlbmRpbmcgb24gdGhlIGl0ZW1zIG9uIHRoZSBsaXN0LlxuY29uc3QgbWFpbkRpc2hJdGVtcyA9ICBbXG4gICAgeyBuYW1lOiBcIlNwYWdoZXR0aSBDYXJib25hcmFcIiwgcHJpY2U6IFwiJDEyLjk5XCIgfSxcbiAgICB7IG5hbWU6IFwiTWFyZ2hlcml0YSBQaXp6YVwiLCBwcmljZTogXCIkMTAuOTlcIiB9LFxuICAgIHsgbmFtZTogXCJHcmlsbGVkIFNhbG1vblwiLCBwcmljZTogXCIkMTUuOTlcIiB9LFxuICAgIC8vIE1vcmUgSXRlbXMgaW4gdGhlIGxpc3QuLi4uLi4uXG4gICAgeyBuYW1lOiBcIlNwYWdoZXR0aSBDYXJib25hcmFcIiwgcHJpY2U6IFwiJDEyLjk5XCIgfSxcbiAgICB7IG5hbWU6IFwiTWFyZ2hlcml0YSBQaXp6YVwiLCBwcmljZTogXCIkMTAuOTlcIiB9LFxuICAgIHsgbmFtZTogXCJHcmlsbGVkIFNhbG1vblwiLCBwcmljZTogXCIkMTUuOTlcIiB9LFxuICAgIC8vIE1vcmUgSXRlbXMgaW4gdGhlIGxpc3QuLi4uLi4uXG4gICAgeyBuYW1lOiBcIlNwYWdoZXR0aSBDYXJib25hcmFcIiwgcHJpY2U6IFwiJDEyLjk5XCIgfSxcbiAgICB7IG5hbWU6IFwiTWFyZ2hlcml0YSBQaXp6YVwiLCBwcmljZTogXCIkMTAuOTlcIiB9LFxuICAgIHsgbmFtZTogXCJHcmlsbGVkIFNhbG1vblwiLCBwcmljZTogXCIkMTUuOTlcIiB9LFxuICAgIC8vIE1vcmUgSXRlbXMgaW4gdGhlIGxpc3QuLi4uLi4uXG4gICAgeyBuYW1lOiBcIlNwYWdoZXR0aSBDYXJib25hcmFcIiwgcHJpY2U6IFwiJDEyLjk5XCIgfSxcbiAgICB7IG5hbWU6IFwiTWFyZ2hlcml0YSBQaXp6YVwiLCBwcmljZTogXCIkMTAuOTlcIiB9LFxuICAgIHsgbmFtZTogXCJHcmlsbGVkIFNhbG1vblwiLCBwcmljZTogXCIkMTUuOTlcIiB9XG4gICAgLy8gTW9yZSBJdGVtcyBpbiB0aGUgbGlzdC4uLi4uLi5cbiAgICBcbl07XG5cbmNvbnN0IGRyaW5rc0l0ZW1zID0gW1xuICAgIHsgbmFtZTogXCJDb2NhLUNvbGFcIiwgcHJpY2U6IFwiJDIuOTlcIiB9LFxuICAgIHsgbmFtZTogXCJGcmVzaCBPcmFuZ2UgSnVpY2VcIiwgcHJpY2U6IFwiJDQuOTlcIiB9LFxuICAgIHsgbmFtZTogXCJDb2ZmZWVcIiwgcHJpY2U6IFwiJDMuNDlcIiB9LFxuICAgIC8vIE1vcmUgSXRlbXMgaW4gdGhlIGxpc3QuLi4uLi4uXG4gICAgeyBuYW1lOiBcIkNvY2EtQ29sYVwiLCBwcmljZTogXCIkMi45OVwiIH0sXG4gICAgeyBuYW1lOiBcIkZyZXNoIE9yYW5nZSBKdWljZVwiLCBwcmljZTogXCIkNC45OVwiIH0sXG4gICAgeyBuYW1lOiBcIkNvZmZlZVwiLCBwcmljZTogXCIkMy40OVwiIH0sXG4gICAgLy8gTW9yZSBJdGVtcyBpbiB0aGUgbGlzdC4uLi4uLi5cbiAgICB7IG5hbWU6IFwiQ29jYS1Db2xhXCIsIHByaWNlOiBcIiQyLjk5XCIgfSxcbiAgICB7IG5hbWU6IFwiRnJlc2ggT3JhbmdlIEp1aWNlXCIsIHByaWNlOiBcIiQ0Ljk5XCIgfSxcbiAgICB7IG5hbWU6IFwiQ29mZmVlXCIsIHByaWNlOiBcIiQzLjQ5XCIgfSxcbiAgICAvLyBNb3JlIEl0ZW1zIGluIHRoZSBsaXN0Li4uLi4uLlxuICAgIHsgbmFtZTogXCJDb2NhLUNvbGFcIiwgcHJpY2U6IFwiJDIuOTlcIiB9LFxuICAgIHsgbmFtZTogXCJGcmVzaCBPcmFuZ2UgSnVpY2VcIiwgcHJpY2U6IFwiJDQuOTlcIiB9LFxuICAgIHsgbmFtZTogXCJDb2ZmZWVcIiwgcHJpY2U6IFwiJDMuNDlcIiB9LFxuICAgIC8vIE1vcmUgSXRlbXMgaW4gdGhlIGxpc3QuLi4uLi4uXG5dO1xuXG5jb25zdCBkZXNzZXJ0c0l0ZW1zID0gW1xuICAgIHsgbmFtZTogXCJDaG9jb2xhdGUgQnJvd25pZVwiLCBwcmljZTogXCIkNi45OVwiIH0sXG4gICAgeyBuYW1lOiBcIlZhbmlsbGEgSWNlIENyZWFtXCIsIHByaWNlOiBcIiQ0Ljk5XCIgfSxcbiAgICB7IG5hbWU6IFwiQ2hlZXNlY2FrZVwiLCBwcmljZTogXCIkNy40OVwiIH0sXG4gICAgLy8gTW9yZSBJdGVtcyBpbiB0aGUgbGlzdC4uLi4uLi5cbiAgICB7IG5hbWU6IFwiQ2hvY29sYXRlIEJyb3duaWVcIiwgcHJpY2U6IFwiJDYuOTlcIiB9LFxuICAgIHsgbmFtZTogXCJWYW5pbGxhIEljZSBDcmVhbVwiLCBwcmljZTogXCIkNC45OVwiIH0sXG4gICAgeyBuYW1lOiBcIkNoZWVzZWNha2VcIiwgcHJpY2U6IFwiJDcuNDlcIiB9LFxuICAgIC8vIE1vcmUgSXRlbXMgaW4gdGhlIGxpc3QuLi4uLi4uXG4gICAgeyBuYW1lOiBcIkNob2NvbGF0ZSBCcm93bmllXCIsIHByaWNlOiBcIiQ2Ljk5XCIgfSxcbiAgICB7IG5hbWU6IFwiVmFuaWxsYSBJY2UgQ3JlYW1cIiwgcHJpY2U6IFwiJDQuOTlcIiB9LFxuICAgIHsgbmFtZTogXCJDaGVlc2VjYWtlXCIsIHByaWNlOiBcIiQ3LjQ5XCIgfSxcbiAgICAvLyBNb3JlIEl0ZW1zIGluIHRoZSBsaXN0Li4uLi4uLlxuICAgIHsgbmFtZTogXCJDaG9jb2xhdGUgQnJvd25pZVwiLCBwcmljZTogXCIkNi45OVwiIH0sXG4gICAgeyBuYW1lOiBcIlZhbmlsbGEgSWNlIENyZWFtXCIsIHByaWNlOiBcIiQ0Ljk5XCIgfSxcbiAgICB7IG5hbWU6IFwiQ2hlZXNlY2FrZVwiLCBwcmljZTogXCIkNy40OVwiIH0sXG4gICAgLy8gTW9yZSBJdGVtcyBpbiB0aGUgbGlzdC4uLi4uLi5cbl07XG5cblxuZnVuY3Rpb24gY3JlYXRlTWVudShtZW51U2VjdGlvbikge1xuXG4gICAgY29uc3QgZGlzaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gZGlzaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmxleFwiKTtcbiAgICBkaXNoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXNoX2NvbnRhaW5lclwiKTtcblxuICAgIG1lbnVTZWN0aW9uLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIpO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpdGVtX2NvbnRhaW5lclwiKTtcblxuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcImRpc2hfbmFtZVwiKTtcbiAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcIml0ZW1fZGV0YWlsc1wiKTtcbiAgICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG4gICAgICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKFwiZGlzaF9wcmljZVwiKTtcbiAgICAgICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoXCJpdGVtX2RldGFpbHNcIik7XG4gICAgICAgIFxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuXG4gICAgICAgIGRpc2hDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGlzaENvbnRhaW5lcjtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=