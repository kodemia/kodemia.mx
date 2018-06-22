webpackHotUpdate(4,{

/***/ "./components/layout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_less_app_less__ = __webpack_require__("./static/less/app.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_less_app_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_less_app_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_MainMenu__ = __webpack_require__("./components/layout/src/MainMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Footer__ = __webpack_require__("./components/layout/src/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__src_Footer__);
var _jsxFileName = "/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/components/layout/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Package

 // Less

 // Ours




var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "_setSiteHeight",
    value: function _setSiteHeight() {
      var $mainContainer = document.getElementsByClassName('main-container');
      var $footer = document.getElementsByTagName('footer');
      var footerHeight = $footer[0].offsetHeight;
      var siteHeight = window.visualViewport.height;
      var mainContainerHeight = siteHeight - footerHeight;
      $mainContainer[0].style.minHeight = mainContainerHeight + 'px';
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var self = this;
      var resizeTimer;
      window.addEventListener("load", function (event) {
        self._setSiteHeight();
      });
      window.addEventListener("resize", function (event) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          self._setSiteHeight();
        }, 50);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, this.props.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
        integrity: "sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/_next/static/style.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "main-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_MainMenu__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), this.props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_Footer__["default"], {
        type: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_Footer__["default"], {
        type: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var children = _ref.children,
          _ref$title = _ref.title,
          title = _ref$title === void 0 ? 'Kodemia' : _ref$title;
      return {
        children: children,
        title: title
      };
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/components/layout/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/layout/src/Footer.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/samuel.olvera/Documents/Sites/htdocs/kodemia/components/layout/src/Footer.js: Unexpected token (12:14)\n\n  10 |   static getInitialProps({ type = 'white' }) {\n  11 |     const pathLogos = '../../static/img/logos/'\n> 12 |     const logo-h = pathLogos + 'logo-h-' + type + '.png'\n     |               ^\n  13 | \n  14 |     return {\n  15 |       logo,\n    at _class.raise (/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/node_modules/babylon/lib/index.js:2063:16)\n    at _class.parseVar (/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/node_modules/babylon/lib/index.js:4543:18)\n    at _class.parseVarStatement (/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/node_modules/babylon/lib/index.js:4369:10)\n    at _class.parseStatementContent (/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/node_modules/babylon/lib/index.js:3976:21)\n    at _class.parseStatement (/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/node_modules/babylon/lib/index.js:4470:23)\n    at _class.parseBlockBody (/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/node_modules/babylon/lib/index.js:4457:10)\n    at _class.parseBlock (/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/node_modules/babylon/lib/index.js:4446:10)\n    at _class.parseFunctionBody (/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/node_modules/babylon/lib/index.js:3722:24)\n    at _class.parseFunctionBodyAndFinish (/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/node_modules/babylon/lib/index.js:3702:10)\n    at _class.parseMethod (/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/node_modules/babylon/lib/index.js:3654:10)\n    at _class.pushClassMethod (/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/node_modules/babylon/lib/index.js:4847:30)\n    at _class.parseClassMemberWithIsStatic (/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/node_modules/babylon/lib/index.js:4766:12)\n    at _class.parseClassMember (/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/node_modules/babylon/lib/index.js:4708:10)\n    at _class.parseClassBody (/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/node_modules/babylon/lib/index.js:4663:12)");

/***/ })

})
//# sourceMappingURL=4.30e4eeacf46e0aebb05c.hot-update.js.map