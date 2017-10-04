webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _reactRouter = __webpack_require__(1);

	var _reactRouterRedux = __webpack_require__(94);

	var _reactRedux = __webpack_require__(99);

	var _reactDom = __webpack_require__(129);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(268);

	var _App2 = _interopRequireDefault(_App);

	var _Listing = __webpack_require__(372);

	var _Listing2 = _interopRequireDefault(_Listing);

	var _SchoolCompare = __webpack_require__(400);

	var _SchoolCompare2 = _interopRequireDefault(_SchoolCompare);

	var _SchoolDetails = __webpack_require__(404);

	var _SchoolDetails2 = _interopRequireDefault(_SchoolDetails);

	var _store = __webpack_require__(405);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store2.default)();
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { history: history },
	    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/listing', component: _Listing2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/compare', component: _SchoolCompare2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/detail', component: _SchoolDetails2.default })
	  )
	), document.getElementById('root'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(108);

	var _reactRedux = __webpack_require__(99);

	var _Header = __webpack_require__(354);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(360);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _Home = __webpack_require__(369);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function (_Component) {
	  (0, _inherits3.default)(App, _Component);

	  function App() {
	    (0, _classCallCheck3.default)(this, App);
	    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(App, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          todos = _props.todos,
	          actions = _props.actions,
	          children = _props.children;

	      return _react2.default.createElement(
	        'body',
	        null,
	        _react2.default.createElement(_Header2.default, null),
	        _react2.default.createElement(_Home2.default, null),
	        _react2.default.createElement(_Footer2.default, null)
	      );
	    }
	  }]);
	  return App;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)()(App);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(270), __esModule: true };

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(271);
	module.exports = __webpack_require__(282).Object.getPrototypeOf;


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(272);
	var $getPrototypeOf = __webpack_require__(274);

	__webpack_require__(280)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(273);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 273 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(275);
	var toObject = __webpack_require__(272);
	var IE_PROTO = __webpack_require__(276)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 275 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(277)('keys');
	var uid = __webpack_require__(279);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(278);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 278 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 279 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(281);
	var core = __webpack_require__(282);
	var fails = __webpack_require__(291);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(278);
	var core = __webpack_require__(282);
	var ctx = __webpack_require__(283);
	var hide = __webpack_require__(285);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 282 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(284);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 284 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(286);
	var createDesc = __webpack_require__(294);
	module.exports = __webpack_require__(290) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(287);
	var IE8_DOM_DEFINE = __webpack_require__(289);
	var toPrimitive = __webpack_require__(293);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(290) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(288);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 288 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(290) && !__webpack_require__(291)(function () {
	  return Object.defineProperty(__webpack_require__(292)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(291)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 291 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(288);
	var document = __webpack_require__(278).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(288);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 294 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 295 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(297);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(298), __esModule: true };

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(299);
	var $Object = __webpack_require__(282).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(281);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(290), 'Object', { defineProperty: __webpack_require__(286).f });


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(301);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(302);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(331);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(303), __esModule: true };

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(304);
	__webpack_require__(326);
	module.exports = __webpack_require__(330).f('iterator');


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(305)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(307)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(306);
	var defined = __webpack_require__(273);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 306 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(308);
	var $export = __webpack_require__(281);
	var redefine = __webpack_require__(309);
	var hide = __webpack_require__(285);
	var has = __webpack_require__(275);
	var Iterators = __webpack_require__(310);
	var $iterCreate = __webpack_require__(311);
	var setToStringTag = __webpack_require__(324);
	var getPrototypeOf = __webpack_require__(274);
	var ITERATOR = __webpack_require__(325)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 308 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(285);


/***/ }),
/* 310 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(312);
	var descriptor = __webpack_require__(294);
	var setToStringTag = __webpack_require__(324);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(285)(IteratorPrototype, __webpack_require__(325)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(287);
	var dPs = __webpack_require__(313);
	var enumBugKeys = __webpack_require__(322);
	var IE_PROTO = __webpack_require__(276)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(292)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(323).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(286);
	var anObject = __webpack_require__(287);
	var getKeys = __webpack_require__(314);

	module.exports = __webpack_require__(290) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(315);
	var enumBugKeys = __webpack_require__(322);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(275);
	var toIObject = __webpack_require__(316);
	var arrayIndexOf = __webpack_require__(319)(false);
	var IE_PROTO = __webpack_require__(276)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(317);
	var defined = __webpack_require__(273);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(318);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 318 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(316);
	var toLength = __webpack_require__(320);
	var toAbsoluteIndex = __webpack_require__(321);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(306);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(306);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 322 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(278).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(286).f;
	var has = __webpack_require__(275);
	var TAG = __webpack_require__(325)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(277)('wks');
	var uid = __webpack_require__(279);
	var Symbol = __webpack_require__(278).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(327);
	var global = __webpack_require__(278);
	var hide = __webpack_require__(285);
	var Iterators = __webpack_require__(310);
	var TO_STRING_TAG = __webpack_require__(325)('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(328);
	var step = __webpack_require__(329);
	var Iterators = __webpack_require__(310);
	var toIObject = __webpack_require__(316);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(307)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 328 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 329 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(325);


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(332), __esModule: true };

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(333);
	__webpack_require__(343);
	__webpack_require__(344);
	__webpack_require__(345);
	module.exports = __webpack_require__(282).Symbol;


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(278);
	var has = __webpack_require__(275);
	var DESCRIPTORS = __webpack_require__(290);
	var $export = __webpack_require__(281);
	var redefine = __webpack_require__(309);
	var META = __webpack_require__(334).KEY;
	var $fails = __webpack_require__(291);
	var shared = __webpack_require__(277);
	var setToStringTag = __webpack_require__(324);
	var uid = __webpack_require__(279);
	var wks = __webpack_require__(325);
	var wksExt = __webpack_require__(330);
	var wksDefine = __webpack_require__(335);
	var enumKeys = __webpack_require__(336);
	var isArray = __webpack_require__(339);
	var anObject = __webpack_require__(287);
	var toIObject = __webpack_require__(316);
	var toPrimitive = __webpack_require__(293);
	var createDesc = __webpack_require__(294);
	var _create = __webpack_require__(312);
	var gOPNExt = __webpack_require__(340);
	var $GOPD = __webpack_require__(342);
	var $DP = __webpack_require__(286);
	var $keys = __webpack_require__(314);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(341).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(338).f = $propertyIsEnumerable;
	  __webpack_require__(337).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(308)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(285)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(279)('meta');
	var isObject = __webpack_require__(288);
	var has = __webpack_require__(275);
	var setDesc = __webpack_require__(286).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(291)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(278);
	var core = __webpack_require__(282);
	var LIBRARY = __webpack_require__(308);
	var wksExt = __webpack_require__(330);
	var defineProperty = __webpack_require__(286).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(314);
	var gOPS = __webpack_require__(337);
	var pIE = __webpack_require__(338);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 337 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 338 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(318);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(316);
	var gOPN = __webpack_require__(341).f;
	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(315);
	var hiddenKeys = __webpack_require__(322).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(338);
	var createDesc = __webpack_require__(294);
	var toIObject = __webpack_require__(316);
	var toPrimitive = __webpack_require__(293);
	var has = __webpack_require__(275);
	var IE8_DOM_DEFINE = __webpack_require__(289);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(290) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 343 */
/***/ (function(module, exports) {

	

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(335)('asyncIterator');


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(335)('observable');


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(347);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(351);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(301);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(348), __esModule: true };

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(349);
	module.exports = __webpack_require__(282).Object.setPrototypeOf;


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(281);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(350).set });


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(288);
	var anObject = __webpack_require__(287);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(283)(Function.call, __webpack_require__(342).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(352), __esModule: true };

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(353);
	var $Object = __webpack_require__(282).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(281);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(312) });


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(355);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(359);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Header = function (_Component) {
	  (0, _inherits3.default)(Header, _Component);

	  function Header() {
	    (0, _classCallCheck3.default)(this, Header);
	    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Header, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_index4.default, null),
	        _react2.default.createElement(_index2.default, null)
	      );
	    }
	  }]);
	  return Header;
	}(_react.Component);

	exports.default = Header;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Login = __webpack_require__(356);

	var _Login2 = _interopRequireDefault(_Login);

	var _index = __webpack_require__(357);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(358);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LogReg = function (_Component) {
	  (0, _inherits3.default)(LogReg, _Component);

	  function LogReg() {
	    (0, _classCallCheck3.default)(this, LogReg);
	    return (0, _possibleConstructorReturn3.default)(this, (LogReg.__proto__ || (0, _getPrototypeOf2.default)(LogReg)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(LogReg, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'cd-user-modal ' },
	        _react2.default.createElement(
	          'div',
	          { className: 'cd-user-modal-container' },
	          _react2.default.createElement(
	            'ul',
	            { className: 'cd-switcher' },
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: '#0' },
	                'Sign in'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: '#0' },
	                'New account'
	              )
	            )
	          ),
	          _react2.default.createElement(_Login2.default, null),
	          _react2.default.createElement(_index2.default, null),
	          _react2.default.createElement(_index4.default, null)
	        )
	      );
	    }
	  }]);
	  return LogReg;
	}(_react.Component);

	exports.default = LogReg;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Login = function (_Component) {
	  (0, _inherits3.default)(Login, _Component);

	  function Login() {
	    (0, _classCallCheck3.default)(this, Login);
	    return (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Login, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { id: "cd-login" },
	        _react2.default.createElement(
	          "form",
	          { className: "cd-form" },
	          _react2.default.createElement(
	            "p",
	            { className: "fieldset" },
	            _react2.default.createElement(
	              "label",
	              { className: "image-replace cd-email", htmlFor: "signin-email" },
	              "E-mail"
	            ),
	            _react2.default.createElement("input", { className: "full-width has-padding has-border", id: "signin-email", type: "email", placeholder: "E-mail" }),
	            _react2.default.createElement(
	              "span",
	              { className: "cd-error-message" },
	              "Error message here!"
	            )
	          ),
	          _react2.default.createElement(
	            "p",
	            { className: "fieldset" },
	            _react2.default.createElement(
	              "label",
	              { className: "image-replace cd-password", htmlFor: "signin-password" },
	              "Password"
	            ),
	            _react2.default.createElement("input", { className: "full-width has-padding has-border", id: "signin-password", type: "text", placeholder: "Password" }),
	            _react2.default.createElement(
	              "a",
	              { href: "#0", className: "hide-password" },
	              "Hide"
	            ),
	            _react2.default.createElement(
	              "span",
	              { className: "cd-error-message" },
	              "Error message here!"
	            )
	          ),
	          _react2.default.createElement(
	            "p",
	            { className: "fieldset" },
	            _react2.default.createElement("input", { type: "checkbox", id: "remember-me", checked: true }),
	            _react2.default.createElement(
	              "label",
	              { htmlFor: "remember-me" },
	              "Remember me"
	            )
	          ),
	          _react2.default.createElement(
	            "p",
	            { className: "fieldset" },
	            _react2.default.createElement("input", { className: "full-width", type: "submit", value: "Login" })
	          )
	        ),
	        _react2.default.createElement(
	          "p",
	          { className: "cd-form-bottom-message" },
	          _react2.default.createElement(
	            "a",
	            { href: "#0" },
	            "Forgot your password?"
	          )
	        )
	      );
	    }
	  }]);
	  return Login;
	}(_react.Component);

	exports.default = Login;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Signup = function (_Component) {
	  (0, _inherits3.default)(Signup, _Component);

	  function Signup() {
	    (0, _classCallCheck3.default)(this, Signup);
	    return (0, _possibleConstructorReturn3.default)(this, (Signup.__proto__ || (0, _getPrototypeOf2.default)(Signup)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Signup, [{
	    key: "render",
	    value: function render() {

	      return _react2.default.createElement(
	        "div",
	        { id: "cd-signup" },
	        _react2.default.createElement(
	          "div",
	          { className: "cd-form row" },
	          _react2.default.createElement(
	            "div",
	            { className: "col-xs-12 col-md-3 col-sm-2" },
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "btn btn-lg btn-block omb_btn-facebook", style: { background: '#3b5998' } },
	              _react2.default.createElement("i", { className: "fa fa-facebook visible-xs" }),
	              _react2.default.createElement(
	                "span",
	                null,
	                "Facebook"
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "col-xs-12 col-md-3 col-sm-2" },
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "btn btn-lg btn-block omb_btn-twitter", style: { background: '#00aced' } },
	              _react2.default.createElement("i", { className: "fa fa-twitter visible-xs" }),
	              _react2.default.createElement(
	                "span",
	                null,
	                "Twitter"
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "col-xs-12 col-md-3 col-sm-2" },
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "btn btn-lg btn-block omb_btn-google", style: { background: '#c32f10' } },
	              _react2.default.createElement("i", { className: "fa fa-google-plus visible-xs" }),
	              _react2.default.createElement(
	                "span",
	                null,
	                "Google+"
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "col-xs-12 col-md-3 col-sm-2" },
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "btn btn-lg btn-block omb_btn-linkedin", style: { background: '#a4c639' } },
	              _react2.default.createElement("i", { className: "fa fa-linkedin-square visible-xs" }),
	              _react2.default.createElement(
	                "span",
	                null,
	                "Linkedin"
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "form",
	          { className: "cd-form" },
	          _react2.default.createElement(
	            "p",
	            { className: "fieldset" },
	            _react2.default.createElement(
	              "label",
	              { className: "image-replace cd-username", htmlFor: "signup-username" },
	              "Username"
	            ),
	            _react2.default.createElement("input", { className: "full-width has-padding has-border", id: "signup-username", type: "text", placeholder: "Username" }),
	            _react2.default.createElement(
	              "span",
	              { className: "cd-error-message" },
	              "Error message here!"
	            )
	          ),
	          _react2.default.createElement(
	            "p",
	            { className: "fieldset" },
	            _react2.default.createElement(
	              "label",
	              { className: "image-replace cd-email", htmlFor: "signup-email" },
	              "E-mail"
	            ),
	            _react2.default.createElement("input", { className: "full-width has-padding has-border", id: "signup-email", type: "email", placeholder: "E-mail" }),
	            _react2.default.createElement(
	              "span",
	              { className: "cd-error-message" },
	              "Error message here!"
	            )
	          ),
	          _react2.default.createElement(
	            "p",
	            { className: "fieldset" },
	            _react2.default.createElement(
	              "label",
	              { className: "image-replace cd-password", htmlFor: "signup-password" },
	              "Password"
	            ),
	            _react2.default.createElement("input", { className: "full-width has-padding has-border", id: "signup-password", type: "text", placeholder: "Password" }),
	            _react2.default.createElement(
	              "a",
	              { href: "#0", className: "hide-password" },
	              "Hide"
	            ),
	            _react2.default.createElement(
	              "span",
	              { className: "cd-error-message" },
	              "Error message here!"
	            )
	          ),
	          _react2.default.createElement(
	            "p",
	            { className: "fieldset" },
	            _react2.default.createElement("input", { type: "checkbox", id: "accept-terms" }),
	            _react2.default.createElement(
	              "label",
	              { htmlFor: "accept-terms" },
	              "I agree to the ",
	              _react2.default.createElement(
	                "a",
	                { href: "#0" },
	                "Terms & Conditions"
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "p",
	            { className: "fieldset" },
	            _react2.default.createElement("input", { className: "full-width has-padding", type: "submit", value: "Create account" })
	          )
	        )
	      );
	    }
	  }]);
	  return Signup;
	}(_react.Component);

	exports.default = Signup;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Resetpassword = function (_Component) {
	    (0, _inherits3.default)(Resetpassword, _Component);

	    function Resetpassword() {
	        (0, _classCallCheck3.default)(this, Resetpassword);
	        return (0, _possibleConstructorReturn3.default)(this, (Resetpassword.__proto__ || (0, _getPrototypeOf2.default)(Resetpassword)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Resetpassword, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { id: "cd-reset-password" },
	                _react2.default.createElement(
	                    "p",
	                    { className: "cd-form-message" },
	                    "Lost your password? Please enter your email address. You will receive a link to create a new password."
	                ),
	                _react2.default.createElement(
	                    "form",
	                    { className: "cd-form" },
	                    _react2.default.createElement(
	                        "p",
	                        { className: "fieldset" },
	                        _react2.default.createElement(
	                            "label",
	                            { className: "image-replace cd-email", htmlFor: "reset-email" },
	                            "E-mail"
	                        ),
	                        _react2.default.createElement("input", { className: "full-width has-padding has-border", id: "reset-email", type: "email", placeholder: "E-mail" }),
	                        _react2.default.createElement(
	                            "span",
	                            { className: "cd-error-message" },
	                            "Error message here!"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "p",
	                        { className: "fieldset" },
	                        _react2.default.createElement("input", { className: "full-width has-padding", type: "submit", value: "Reset password" })
	                    )
	                ),
	                _react2.default.createElement(
	                    "p",
	                    { className: "cd-form-bottom-message" },
	                    _react2.default.createElement(
	                        "a",
	                        { href: "#0" },
	                        "Back to log-in"
	                    )
	                )
	            );
	        }
	    }]);
	    return Resetpassword;
	}(_react.Component);

	exports.default = Resetpassword;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Navbar = function (_Component) {
	    (0, _inherits3.default)(Navbar, _Component);

	    function Navbar() {
	        (0, _classCallCheck3.default)(this, Navbar);
	        return (0, _possibleConstructorReturn3.default)(this, (Navbar.__proto__ || (0, _getPrototypeOf2.default)(Navbar)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Navbar, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'nav',
	                { className: 'main-nav navbar navbar-fixed-top', style: { backgroundColor: 'mediumslateblue' } },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'container-fluid' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'navbar-header' },
	                        _react2.default.createElement(
	                            'button',
	                            { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#myNavbar' },
	                            _react2.default.createElement('span', { className: 'icon-bar' }),
	                            _react2.default.createElement('span', { className: 'icon-bar' }),
	                            _react2.default.createElement('span', { className: 'icon-bar' })
	                        ),
	                        _react2.default.createElement(
	                            'a',
	                            { className: 'navbar-brand', href: 'index.html', style: { color: '#fff', fontSize: '50px' } },
	                            'SchoolCounty'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'collapse navbar-collapse', id: 'myNavbar' },
	                        _react2.default.createElement(
	                            'ul',
	                            { className: 'nav navbar-nav navbar-right' },
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    'a',
	                                    { className: 'cd-signin', href: '#' },
	                                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-log-in' }),
	                                    ' Login'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    'a',
	                                    { className: 'cd-signup', href: '#' },
	                                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-log-in' }),
	                                    ' SignUp'
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Navbar;
	}(_react.Component);

	exports.default = Navbar;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _defineProperty2 = __webpack_require__(361);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _FILTER_TITLES;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _filters = __webpack_require__(362);

	var _classnames2 = __webpack_require__(363);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _style = __webpack_require__(364);

	var _style2 = _interopRequireDefault(_style);

	var _index = __webpack_require__(368);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FILTER_TITLES = (_FILTER_TITLES = {}, (0, _defineProperty3.default)(_FILTER_TITLES, _filters.SHOW_ALL, 'All'), (0, _defineProperty3.default)(_FILTER_TITLES, _filters.SHOW_ACTIVE, 'Active'), (0, _defineProperty3.default)(_FILTER_TITLES, _filters.SHOW_COMPLETED, 'Completed'), _FILTER_TITLES);

	var Footer = function (_Component) {
	    (0, _inherits3.default)(Footer, _Component);

	    function Footer() {
	        (0, _classCallCheck3.default)(this, Footer);
	        return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Footer, [{
	        key: 'renderTodoCount',
	        value: function renderTodoCount() {
	            var activeCount = this.props.activeCount;

	            var itemWord = activeCount === 1 ? 'item' : 'items';

	            return _react2.default.createElement(
	                'span',
	                { className: _style2.default.count },
	                _react2.default.createElement(
	                    'strong',
	                    null,
	                    activeCount || 'No'
	                ),
	                ' ',
	                itemWord,
	                ' left'
	            );
	        }
	    }, {
	        key: 'renderFilterLink',
	        value: function renderFilterLink(filter) {
	            var title = FILTER_TITLES[filter];
	            var _props = this.props,
	                selectedFilter = _props.filter,
	                onShow = _props.onShow;


	            return _react2.default.createElement(
	                'a',
	                { className: (0, _classnames3.default)((0, _defineProperty3.default)({}, _style2.default.selected, filter === selectedFilter)),
	                    style: { cursor: 'pointer' },
	                    onClick: function onClick() {
	                        return onShow(filter);
	                    } },
	                title
	            );
	        }
	    }, {
	        key: 'renderClearButton',
	        value: function renderClearButton() {
	            var _props2 = this.props,
	                completedCount = _props2.completedCount,
	                onClearCompleted = _props2.onClearCompleted;

	            if (completedCount > 0) {
	                return _react2.default.createElement(
	                    'button',
	                    { className: _style2.default.clearCompleted, onClick: onClearCompleted },
	                    'Clear completed'
	                );
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_index2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'footer-bottom' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'container' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'row' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'col-xs-12 col-sm-6 col-md-6 col-lg-6' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'copyright' },
	                                    '\xA9 2017, SchoolCounty, All rights reserved'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'col-xs-12 col-sm-6 col-md-6 col-lg-6' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'design' },
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: '#' },
	                                        'SchoolCounty '
	                                    ),
	                                    ' |  ',
	                                    _react2.default.createElement(
	                                        'a',
	                                        { target: '_blank', href: 'http://www.webenlance.com' },
	                                        'Dummy Content'
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Footer;
	}(_react.Component);

	exports.default = Footer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(297);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SHOW_ALL = exports.SHOW_ALL = 'show_all';
	var SHOW_COMPLETED = exports.SHOW_COMPLETED = 'show_completed';
	var SHOW_ACTIVE = exports.SHOW_ACTIVE = 'show_active';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "filters.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(365);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(367)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]!../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]!../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(366)();
	// imports


	// module
	exports.push([module.id, "\n.normal___3FIL- {\n  color: #777;\n  padding: 10px 15px;\n  height: 20px;\n  text-align: center;\n  border-top: 1px solid #e6e6e6;\n}\n\n.normal___3FIL-:before {\n  content: '';\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 50px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n    0 8px 0 -3px #f6f6f6,\n    0 9px 1px -3px rgba(0, 0, 0, 0.2),\n    0 16px 0 -6px #f6f6f6,\n    0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.filters___1BcvS {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n\n.filters___1BcvS li {\n  display: inline;\n}\n\n.filters___1BcvS li a {\n  color: inherit;\n  margin: 3px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n\n.filters___1BcvS li a.selected___2piwY,\n.filters___1BcvS li a:hover {\n  border-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters___1BcvS li a.selected___2piwY {\n  border-color: rgba(175, 47, 47, 0.2);\n}\n\n.count___3khYx {\n  float: left;\n  text-align: left;\n}\n\n.count___3khYx strong {\n  font-weight: 300;\n}\n\n.clearCompleted___3tf6X,\nhtml .clearCompleted___3tf6X:active {\n  float: right;\n  position: relative;\n  line-height: 20px;\n  text-decoration: none;\n  cursor: pointer;\n  visibility: hidden;\n  position: relative;\n}\n\n.clearCompleted___3tf6X::after {\n  visibility: visible;\n  content: 'Clear completed';\n  position: absolute;\n  right: 0;\n  white-space: nowrap;\n}\n\n.clearCompleted___3tf6X:hover::after {\n  text-decoration: underline;\n}\n\n@media (max-width: 430px) {\n  .normal___3FIL- {\n    height: 50px;\n  }\n\n  .filters___1BcvS {\n    bottom: 10px;\n  }\n}", "", {"version":3,"sources":["/./components/Footer/style.css"],"names":[],"mappings":";AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;CAC/B;;AAED;EACE,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,QAAQ;EACR,aAAa;EACb,iBAAiB;EACjB;;;;uCAIqC;CACtC;;AAED;EACE,UAAU;EACV,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,QAAQ;CACT;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;CACpB;;AAED;;EAEE,qCAAqC;CACtC;;AAED;EACE,qCAAqC;CACtC;;AAED;EACE,YAAY;EACZ,iBAAiB;CAClB;;AAED;EACE,iBAAiB;CAClB;;AAED;;EAEE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;CACpB;;AAED;EACE,oBAAoB;EACpB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;EACT,oBAAoB;CACrB;;AAED;EACE,2BAA2B;CAC5B;;AAED;EACE;IACE,aAAa;GACd;;EAED;IACE,aAAa;GACd;CACF","file":"style.css","sourcesContent":["\n.normal {\n  color: #777;\n  padding: 10px 15px;\n  height: 20px;\n  text-align: center;\n  border-top: 1px solid #e6e6e6;\n}\n\n.normal:before {\n  content: '';\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 50px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n    0 8px 0 -3px #f6f6f6,\n    0 9px 1px -3px rgba(0, 0, 0, 0.2),\n    0 16px 0 -6px #f6f6f6,\n    0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.filters {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n\n.filters li {\n  display: inline;\n}\n\n.filters li a {\n  color: inherit;\n  margin: 3px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n\n.filters li a.selected,\n.filters li a:hover {\n  border-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n  border-color: rgba(175, 47, 47, 0.2);\n}\n\n.count {\n  float: left;\n  text-align: left;\n}\n\n.count strong {\n  font-weight: 300;\n}\n\n.clearCompleted,\nhtml .clearCompleted:active {\n  float: right;\n  position: relative;\n  line-height: 20px;\n  text-decoration: none;\n  cursor: pointer;\n  visibility: hidden;\n  position: relative;\n}\n\n.clearCompleted::after {\n  visibility: visible;\n  content: 'Clear completed';\n  position: absolute;\n  right: 0;\n  white-space: nowrap;\n}\n\n.clearCompleted:hover::after {\n  text-decoration: underline;\n}\n\n@media (max-width: 430px) {\n  .normal {\n    height: 50px;\n  }\n\n  .filters {\n    bottom: 10px;\n  }\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"normal": "normal___3FIL-",
		"filters": "filters___1BcvS",
		"selected": "selected___2piwY",
		"count": "count___3khYx",
		"clearCompleted": "clearCompleted___3tf6X"
	};

/***/ }),
/* 366 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Footerlinks = function (_Component) {
	    (0, _inherits3.default)(Footerlinks, _Component);

	    function Footerlinks() {
	        (0, _classCallCheck3.default)(this, Footerlinks);
	        return (0, _possibleConstructorReturn3.default)(this, (Footerlinks.__proto__ || (0, _getPrototypeOf2.default)(Footerlinks)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Footerlinks, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "footer",
	                { className: "footer1" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "container" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "row" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "col-lg-3 col-md-3" },
	                            _react2.default.createElement(
	                                "ul",
	                                { className: "list-unstyled clear-margins" },
	                                _react2.default.createElement(
	                                    "li",
	                                    { className: "widget-container widget_nav_menu" },
	                                    _react2.default.createElement(
	                                        "h1",
	                                        { className: "title-widget" },
	                                        "Quick links"
	                                    ),
	                                    _react2.default.createElement(
	                                        "ul",
	                                        null,
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                " About Us"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                " Contact Us"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                " Success Stories"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                " PG Courses"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                " Achiever's Batch"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                "  Regular Batch"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                "  Test & Discussion"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                "  Fast Track T & D"
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "col-lg-3 col-md-3" },
	                            _react2.default.createElement(
	                                "ul",
	                                { className: "list-unstyled clear-margins" },
	                                _react2.default.createElement(
	                                    "li",
	                                    { className: "widget-container widget_nav_menu" },
	                                    _react2.default.createElement(
	                                        "ul",
	                                        null,
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                "  Test Series Schedule"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                "  Postal Coaching"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                "  PG Dr. Bhatia Books"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                "  UG Courses"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                "  Satellite Education"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                "  Study Centres"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                "  State P.G. Mocks"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#", target: "_blank" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                " Results"
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "col-lg-3 col-md-3" },
	                            _react2.default.createElement(
	                                "ul",
	                                { className: "list-unstyled clear-margins" },
	                                _react2.default.createElement(
	                                    "li",
	                                    { className: "widget-container widget_nav_menu" },
	                                    _react2.default.createElement(
	                                        "ul",
	                                        null,
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                " Enquiry Form"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                " Online Test Series"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                " Grand Tests Series"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                " Subject Wise Test Series"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                " Smart Book"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                " Test Centres"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                "  Admission Form"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            null,
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement("i", { className: "fa fa-angle-double-right" }),
	                                                "  Computer Live Test"
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "col-lg-3 col-md-3" },
	                            _react2.default.createElement(
	                                "ul",
	                                { className: "list-unstyled clear-margins" },
	                                _react2.default.createElement(
	                                    "li",
	                                    { className: "widget-container widget_recent_news" },
	                                    _react2.default.createElement(
	                                        "h1",
	                                        { className: "title-widget" },
	                                        "Contact Detail "
	                                    ),
	                                    _react2.default.createElement(
	                                        "div",
	                                        { className: "footerp" },
	                                        _react2.default.createElement(
	                                            "h2",
	                                            { className: "title-median" },
	                                            "SchoolCounty"
	                                        ),
	                                        _react2.default.createElement(
	                                            "p",
	                                            null,
	                                            _react2.default.createElement(
	                                                "b",
	                                                null,
	                                                "Email id:"
	                                            ),
	                                            " ",
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "mailto:info@webenlance.com" },
	                                                "info@schoolcounty.com"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "p",
	                                            null,
	                                            _react2.default.createElement(
	                                                "b",
	                                                null,
	                                                "Helpline Numbers "
	                                            ),
	                                            _react2.default.createElement(
	                                                "b",
	                                                { style: { color: '#ffc106' } },
	                                                "(8AM to 10PM):"
	                                            ),
	                                            "  +91-813ZXC90, +91-81MBN0010  "
	                                        ),
	                                        _react2.default.createElement(
	                                            "p",
	                                            null,
	                                            _react2.default.createElement(
	                                                "b",
	                                                null,
	                                                "Corp Office / Postal Address"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "p",
	                                            null,
	                                            _react2.default.createElement(
	                                                "b",
	                                                null,
	                                                "Phone Numbers : "
	                                            ),
	                                            "704QWE160, "
	                                        ),
	                                        _react2.default.createElement(
	                                            "p",
	                                            null,
	                                            " 011-27568832, 9868387223"
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        "div",
	                                        { className: "social-icons" },
	                                        _react2.default.createElement(
	                                            "ul",
	                                            { className: "nomargin" },
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "https://www.facebook.com/bootsnipp" },
	                                                _react2.default.createElement("i", { className: "fa fa-facebook-square fa-3x social-fb", id: "social" })
	                                            ),
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "https://twitter.com/bootsnipp" },
	                                                _react2.default.createElement("i", { className: "fa fa-twitter-square fa-3x social-tw", id: "social" })
	                                            ),
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "https://plus.google.com/+Bootsnipp-page" },
	                                                _react2.default.createElement("i", { className: "fa fa-google-plus-square fa-3x social-gp", id: "social" })
	                                            ),
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "mailto:bootsnipp@gmail.com" },
	                                                _react2.default.createElement("i", { className: "fa fa-envelope-square fa-3x social-em", id: "social" })
	                                            ),
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "mailto:linkedin@gmail.com" },
	                                                _react2.default.createElement("i", { className: "fa fa-linkedin-square fa-3x social-fb", id: "social" })
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Footerlinks;
	}(_react.Component);

	exports.default = Footerlinks;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(370);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(371);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Home = function (_Component) {
	    (0, _inherits3.default)(Home, _Component);

	    function Home() {
	        (0, _classCallCheck3.default)(this, Home);
	        return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Home, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(_index2.default, null),
	                    _react2.default.createElement(_index4.default, null)
	                )
	            );
	        }
	    }]);
	    return Home;
	}(_react.Component);

	exports.default = Home;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Search = function (_Component) {
	    (0, _inherits3.default)(Search, _Component);

	    function Search() {
	        (0, _classCallCheck3.default)(this, Search);
	        return (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Search, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "jumbotron" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "container text-center" },
	                    _react2.default.createElement(
	                        "h1",
	                        { style: { color: '#fff' } },
	                        "Find the Right School for You"
	                    ),
	                    _react2.default.createElement(
	                        "p",
	                        { style: { color: '#fff' } },
	                        "Start your search for a great school at SchoolCOunty.com! We have reviews,ratings,recommendation,location,scores,rankings,school and district boundaries,student/teacher ratios ,scores of other userful metrics and information of over 10,000 elementary,primary and high school in India!"
	                    ),
	                    _react2.default.createElement(
	                        "form",
	                        { className: "search-wrapper", action: "listing.html" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "inner-addon right-addon" },
	                            _react2.default.createElement("i", { className: "glyphicon glyphicon-search" }),
	                            _react2.default.createElement("input", { id: "searchInput", type: "text", name: "search", placeholder: "Type a school,city,pincode,syllabus,district name........." })
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Search;
	}(_react.Component);

	exports.default = Search;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Categories = function (_Component) {
	    (0, _inherits3.default)(Categories, _Component);

	    function Categories() {
	        (0, _classCallCheck3.default)(this, Categories);
	        return (0, _possibleConstructorReturn3.default)(this, (Categories.__proto__ || (0, _getPrototypeOf2.default)(Categories)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Categories, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    "div",
	                    { className: "container-fluid bg-3 text-center" },
	                    _react2.default.createElement(
	                        "h3",
	                        null,
	                        "Categories"
	                    ),
	                    _react2.default.createElement("br", null),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "row" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "col-sm-3" },
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "School Name"
	                            ),
	                            _react2.default.createElement("img", { src: "../../assets/img/school1.jpg", className: "img-responsive", alt: "Image" })
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "col-sm-3" },
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "Education Stage"
	                            ),
	                            _react2.default.createElement("img", { src: "../../assets/img/school2.jpg", className: "img-responsive", alt: "Image" })
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "col-sm-3" },
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "School Type"
	                            ),
	                            _react2.default.createElement("img", { src: "../../assets/img/school3.jpg", className: "img-responsive", alt: "Image" })
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "col-sm-3" },
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "Syllabus"
	                            ),
	                            _react2.default.createElement("img", { src: "../../assets/img/school4.jpg", className: "img-responsive", alt: "Image" })
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "container-fluid bg-3 text-center" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "row" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "col-sm-3" },
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "Sate Wise"
	                            ),
	                            _react2.default.createElement("img", { src: "../../assets/img/school4.jpg", className: "img-responsive", alt: "Image" })
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "col-sm-3" },
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "Rating Wise"
	                            ),
	                            _react2.default.createElement("img", { src: "../../assets/img/school3.jpg", className: "img-responsive", alt: "Image" })
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "col-sm-3" },
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "Ranking Wise"
	                            ),
	                            _react2.default.createElement("img", { src: "../../assets/img/school2.jpg", className: "img-responsive", alt: "Image" })
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "col-sm-3" },
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "Budget Wise"
	                            ),
	                            _react2.default.createElement("img", { src: "../../assets/img/school1.jpg", className: "img-responsive", alt: "Image" })
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Categories;
	}(_react.Component);

	exports.default = Categories;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(108);

	var _reactRedux = __webpack_require__(99);

	var _Header = __webpack_require__(354);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(360);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _googleMapReact = __webpack_require__(373);

	var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

	var _index = __webpack_require__(396);

	var _index2 = _interopRequireDefault(_index);

	var _Filter = __webpack_require__(398);

	var _Filter2 = _interopRequireDefault(_Filter);

	var _schools = __webpack_require__(399);

	var SchoolActions = _interopRequireWildcard(_schools);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**components**/
	var AnyReactComponent = function AnyReactComponent(_ref) {
	  var text = _ref.text;
	  return _react2.default.createElement(
	    'div',
	    null,
	    text
	  );
	};
	/**Actions**/

	var Listing = function (_Component) {
	  (0, _inherits3.default)(Listing, _Component);

	  function Listing() {
	    (0, _classCallCheck3.default)(this, Listing);
	    return (0, _possibleConstructorReturn3.default)(this, (Listing.__proto__ || (0, _getPrototypeOf2.default)(Listing)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Listing, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      //action to get schools data
	      this.props.getSchools();
	      this.props.getFilterParams();
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Header2.default, null),
	        _react2.default.createElement(
	          'main',
	          { className: 'cd-main-content', style: { top: '50px' } },
	          _react2.default.createElement(
	            'div',
	            { className: 'cd-tab-filter-wrapper' },
	            _react2.default.createElement(
	              'div',
	              { className: 'cd-tab-filter' },
	              _react2.default.createElement(
	                'ul',
	                { className: 'cd-filters' },
	                _react2.default.createElement(
	                  'li',
	                  { className: 'placeholder' },
	                  _react2.default.createElement(
	                    'a',
	                    { 'data-type': 'all', href: '#0' },
	                    'All'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  { className: 'filter' },
	                  _react2.default.createElement(
	                    'a',
	                    { className: 'selected', href: '#0', 'data-type': 'all' },
	                    'All'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  { className: 'filter', 'data-filter': '.color-1' },
	                  _react2.default.createElement(
	                    'a',
	                    { href: '#0', 'data-type': 'color-1' },
	                    'Distance'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  { className: 'filter', 'data-filter': '.color-2' },
	                  _react2.default.createElement(
	                    'a',
	                    { href: '#0', 'data-type': 'color-2' },
	                    'Budget'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  { className: 'filter', 'data-filter': '.color-3' },
	                  _react2.default.createElement(
	                    'a',
	                    { href: '#0', 'data-type': 'color-3' },
	                    'Ranking'
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'section',
	            { className: 'cd-gallery' },
	            _react2.default.createElement(
	              'div',
	              { id: 'map' },
	              _react2.default.createElement(
	                _googleMapReact2.default,
	                {
	                  defaultCenter: { lat: 12.971599, lng: 77.594563 },
	                  defaultZoom: 10
	                },
	                _react2.default.createElement(AnyReactComponent, {
	                  lat: 12.971599,
	                  lng: 77.594563,
	                  text: 'Kreyser Avrora'
	                })
	              )
	            ),
	            _react2.default.createElement(
	              'ul',
	              null,
	              _react2.default.createElement(_index2.default, { schools: this.props.schools.schoolList }),
	              _react2.default.createElement(
	                'li',
	                { className: 'mix' },
	                _react2.default.createElement(
	                  'a',
	                  { id: 'back-to-top', href: '#', className: 'btn btn-primary btn-lg back-to-top', role: 'button', title: 'Click to return on the top page', 'data-toggle': 'tooltip', 'data-placement': 'left' },
	                  _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-up' })
	                )
	              ),
	              _react2.default.createElement('li', { className: 'gap' }),
	              _react2.default.createElement('li', { className: 'gap' }),
	              _react2.default.createElement('li', { className: 'gap' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'cd-fail-message' },
	              'No results found'
	            )
	          ),
	          _react2.default.createElement(_Filter2.default, { filterParams: this.props.schools.schoolFilter }),
	          _react2.default.createElement(
	            'a',
	            { href: '#0', className: 'cd-filter-trigger' },
	            'Filters'
	          )
	        ),
	        _react2.default.createElement(_Footer2.default, null)
	      );
	    }
	  }]);
	  return Listing;
	}(_react.Component);

	function mapStateToProps(state) {
	  return {
	    schools: state.schools
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    getSchools: function getSchools() {
	      dispatch(SchoolActions.getSchoolsList());
	    },
	    getFilterParams: function getFilterParams() {
	      dispatch(SchoolActions.getFilterParams());
	    }
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Listing);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _google_map = __webpack_require__(374);

	var _google_map2 = _interopRequireDefault(_google_map);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _google_map2.default;

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(101);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(129);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _shallowEqual = __webpack_require__(215);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _marker_dispatcher = __webpack_require__(375);

	var _marker_dispatcher2 = _interopRequireDefault(_marker_dispatcher);

	var _google_map_map = __webpack_require__(377);

	var _google_map_map2 = _interopRequireDefault(_google_map_map);

	var _google_map_markers = __webpack_require__(378);

	var _google_map_markers2 = _interopRequireDefault(_google_map_markers);

	var _google_map_markers_prerender = __webpack_require__(380);

	var _google_map_markers_prerender2 = _interopRequireDefault(_google_map_markers_prerender);

	var _google_map_loader = __webpack_require__(381);

	var _google_map_loader2 = _interopRequireDefault(_google_map_loader);

	var _detect = __webpack_require__(383);

	var _detect2 = _interopRequireDefault(_detect);

	var _geo = __webpack_require__(384);

	var _geo2 = _interopRequireDefault(_geo);

	var _array_helper = __webpack_require__(389);

	var _array_helper2 = _interopRequireDefault(_array_helper);

	var _is_plain_object = __webpack_require__(390);

	var _is_plain_object2 = _interopRequireDefault(_is_plain_object);

	var _pick = __webpack_require__(391);

	var _pick2 = _interopRequireDefault(_pick);

	var _raf = __webpack_require__(392);

	var _raf2 = _interopRequireDefault(_raf);

	var _log = __webpack_require__(393);

	var _log2 = _interopRequireDefault(_log);

	var _isNumber = __webpack_require__(394);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _omit = __webpack_require__(379);

	var _omit2 = _interopRequireDefault(_omit);

	var _detectElementResize = __webpack_require__(395);

	var _detectElementResize2 = _interopRequireDefault(_detectElementResize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies, react/forbid-prop-types, react/no-find-dom-node, no-console */


	var kEPS = 0.00001;
	var K_GOOGLE_TILE_SIZE = 256;
	// real minZoom calculated here _getMinZoom
	var K_IDLE_TIMEOUT = 100;
	var K_IDLE_CLICK_TIMEOUT = 300;
	var DEFAULT_MIN_ZOOM = 3;

	function defaultOptions_() /* maps */{
	  return {
	    overviewMapControl: false,
	    streetViewControl: false,
	    rotateControl: true,
	    mapTypeControl: false,
	    // disable poi
	    styles: [{
	      featureType: 'poi',
	      elementType: 'labels',
	      stylers: [{ visibility: 'off' }]
	    }],
	    minZoom: DEFAULT_MIN_ZOOM };
	}

	var latLng2Obj = function latLng2Obj(latLng) {
	  return (0, _is_plain_object2.default)(latLng) ? latLng : { lat: latLng[0], lng: latLng[1] };
	};

	var _checkMinZoom = function _checkMinZoom(zoom, minZoom) {
	  if (false) {
	    if (zoom < minZoom) {
	      console.warn('GoogleMap: ' + // eslint-disable-line
	      'minZoom option is less than recommended ' + 'minZoom option for your map sizes.\n' + 'overrided to value ' + minZoom);
	    }
	  }

	  if (minZoom < zoom) {
	    return zoom;
	  }
	  return minZoom;
	};

	var GoogleMap = function (_Component) {
	  _inherits(GoogleMap, _Component);

	  // eslint-disable-line

	  function GoogleMap(props) {
	    _classCallCheck(this, GoogleMap);

	    var _this = _possibleConstructorReturn(this, (GoogleMap.__proto__ || Object.getPrototypeOf(GoogleMap)).call(this, props));

	    _this._getMinZoom = function () {
	      if (_this.geoService_.getWidth() > 0 || _this.geoService_.getHeight() > 0) {
	        var tilesPerWidth = Math.ceil(_this.geoService_.getWidth() / K_GOOGLE_TILE_SIZE) + 2;
	        var tilesPerHeight = Math.ceil(_this.geoService_.getHeight() / K_GOOGLE_TILE_SIZE) + 2;
	        var maxTilesPerDim = Math.max(tilesPerWidth, tilesPerHeight);
	        return Math.ceil((0, _log2.default)(maxTilesPerDim));
	      }
	      return DEFAULT_MIN_ZOOM;
	    };

	    _this._computeMinZoom = function (minZoomOverride, minZoom) {
	      if (minZoomOverride) {
	        return minZoom || DEFAULT_MIN_ZOOM;
	      }
	      return _this._getMinZoom();
	    };

	    _this._mapDomResizeCallback = function () {
	      _this.resetSizeOnIdle_ = true;
	      if (_this.maps_) {
	        var originalCenter = _this.map_.getCenter();
	        _this.maps_.event.trigger(_this.map_, 'resize');
	        _this.map_.setCenter(originalCenter);
	      }
	    };

	    _this._setLayers = function (layerTypes) {
	      layerTypes.forEach(function (layerType) {
	        _this.layers_[layerType] = new _this.maps_[layerType]();
	        _this.layers_[layerType].setMap(_this.map_);
	      });
	    };

	    _this._initMap = function () {
	      // only initialize the map once
	      if (_this.initialized_) {
	        return;
	      }
	      _this.initialized_ = true;

	      var propsCenter = latLng2Obj(_this.props.center || _this.props.defaultCenter);
	      _this.geoService_.setView(propsCenter, _this.props.zoom || _this.props.defaultZoom, 0);

	      _this._onBoundsChanged(); // now we can calculate map bounds center etc...

	      var bootstrapURLKeys = _extends({}, _this.props.apiKey && { key: _this.props.apiKey }, _this.props.bootstrapURLKeys);

	      _this.props.googleMapLoader(bootstrapURLKeys).then(function (maps) {
	        if (!_this.mounted_) {
	          return;
	        }

	        var centerLatLng = _this.geoService_.getCenter();

	        var propsOptions = {
	          zoom: _this.props.zoom || _this.props.defaultZoom,
	          center: new maps.LatLng(centerLatLng.lat, centerLatLng.lng)
	        };

	        // prevent to exapose full api
	        // next props must be exposed (console.log(Object.keys(pick(maps, isPlainObject))))
	        // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
	        // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition",
	        // "SymbolPath", "ZoomControlStyle",
	        // "event", "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem",
	        // "DistanceMatrixStatus",
	        // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType",
	        // "GeocoderStatus", "KmlLayerStatus",
	        // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference",
	        // "TravelMode", "UnitSystem"
	        var mapPlainObjects = (0, _pick2.default)(maps, _is_plain_object2.default);
	        var options = typeof _this.props.options === 'function' ? _this.props.options(mapPlainObjects) : _this.props.options;
	        var defaultOptions = defaultOptions_(mapPlainObjects);

	        var draggableOptions = _this.props.draggable !== undefined && {
	          draggable: _this.props.draggable
	        };

	        var minZoom = _this._computeMinZoom(options.minZoomOverride, options.minZoom);
	        _this.minZoom_ = minZoom;

	        var preMapOptions = _extends({}, defaultOptions, {
	          minZoom: minZoom
	        }, options, propsOptions);

	        _this.defaultDraggableOption_ = preMapOptions.draggable !== undefined ? preMapOptions.draggable : _this.defaultDraggableOption_;

	        var mapOptions = _extends({}, preMapOptions, draggableOptions);

	        mapOptions.minZoom = _checkMinZoom(mapOptions.minZoom, minZoom);

	        var map = new maps.Map(_reactDom2.default.findDOMNode(_this.googleMapDom_), mapOptions);

	        _this.map_ = map;
	        _this.maps_ = maps;

	        _this._setLayers(_this.props.layerTypes);

	        // render in overlay
	        var this_ = _this;
	        var overlay = Object.assign(new maps.OverlayView(), {
	          onAdd: function onAdd() {
	            var K_MAX_WIDTH = typeof screen !== 'undefined' ? screen.width + 'px' : '2000px';
	            var K_MAX_HEIGHT = typeof screen !== 'undefined' ? screen.height + 'px' : '2000px';

	            var div = document.createElement('div');
	            this.div = div;
	            div.style.backgroundColor = 'transparent';
	            div.style.position = 'absolute';
	            div.style.left = '0px';
	            div.style.top = '0px';
	            div.style.width = K_MAX_WIDTH; // prevents some chrome draw defects
	            div.style.height = K_MAX_HEIGHT;

	            var panes = this.getPanes();
	            panes.overlayMouseTarget.appendChild(div);

	            _reactDom2.default.unstable_renderSubtreeIntoContainer(this_, _react2.default.createElement(_google_map_markers2.default, {
	              experimental: this_.props.experimental,
	              onChildClick: this_._onChildClick,
	              onChildMouseDown: this_._onChildMouseDown,
	              onChildMouseEnter: this_._onChildMouseEnter,
	              onChildMouseLeave: this_._onChildMouseLeave,
	              geoService: this_.geoService_,
	              projectFromLeftTop: true,
	              distanceToMouse: this_.props.distanceToMouse,
	              getHoverDistance: this_._getHoverDistance,
	              dispatcher: this_.markersDispatcher_
	            }), div,
	            // remove prerendered markers
	            function () {
	              return this_.setState({ overlayCreated: true });
	            });
	          },
	          onRemove: function onRemove() {
	            _reactDom2.default.unmountComponentAtNode(this.div);
	          },
	          draw: function draw() {
	            var div = overlay.div;
	            var overlayProjection = overlay.getProjection();
	            var bounds = map.getBounds();
	            var ne = bounds.getNorthEast();
	            var sw = bounds.getSouthWest();
	            var ptx = overlayProjection.fromLatLngToDivPixel(new maps.LatLng(ne.lat(), sw.lng()));

	            // need round for safari still can't find what need for firefox
	            var ptxRounded = (0, _detect2.default)().isSafari ? { x: Math.round(ptx.x), y: Math.round(ptx.y) } : { x: ptx.x, y: ptx.y };

	            this_.updateCounter_++;
	            this_._onBoundsChanged(map, maps, !this_.props.debounced);

	            if (!this_.googleApiLoadedCalled_) {
	              this_._onGoogleApiLoaded({ map: map, maps: maps });
	              this_.googleApiLoadedCalled_ = true;
	            }

	            div.style.left = ptxRounded.x + 'px';
	            div.style.top = ptxRounded.y + 'px';
	            if (this_.markersDispatcher_) {
	              this_.markersDispatcher_.emit('kON_CHANGE');
	            }
	          }
	        });

	        _this.overlay_ = overlay;

	        overlay.setMap(map);

	        maps.event.addListener(map, 'zoom_changed', function () {
	          // recalc position at zoom start
	          if (this_.geoService_.getZoom() !== map.getZoom()) {
	            if (!this_.zoomAnimationInProgress_) {
	              this_.zoomAnimationInProgress_ = true;
	              this_._onZoomAnimationStart();
	            }

	            var TIMEOUT_ZOOM = 300;

	            if (new Date().getTime() - _this.zoomControlClickTime_ < TIMEOUT_ZOOM) {
	              // there is strange Google Map Api behavior in chrome when zoom animation of map
	              // is started only on second raf call, if was click on zoom control
	              // or +- keys pressed, so i wait for two rafs before change state

	              // this does not fully prevent animation jump
	              // but reduce it's occurence probability
	              (0, _raf2.default)(function () {
	                return (0, _raf2.default)(function () {
	                  this_.updateCounter_++;
	                  this_._onBoundsChanged(map, maps);
	                });
	              });
	            } else {
	              this_.updateCounter_++;
	              this_._onBoundsChanged(map, maps);
	            }
	          }
	        });

	        maps.event.addListener(map, 'idle', function () {
	          if (_this.resetSizeOnIdle_) {
	            _this._setViewSize();
	            var currMinZoom = _this._computeMinZoom(_this.props.options.minZoomOverride, _this.props.options.minZoom);

	            if (currMinZoom !== _this.minZoom_) {
	              _this.minZoom_ = currMinZoom;
	              map.setOptions({ minZoom: currMinZoom });
	            }

	            _this.resetSizeOnIdle_ = false;
	          }

	          if (this_.zoomAnimationInProgress_) {
	            this_.zoomAnimationInProgress_ = false;
	            this_._onZoomAnimationEnd();
	          }

	          var div = overlay.div;
	          var overlayProjection = overlay.getProjection();
	          var bounds = map.getBounds();
	          var ne = bounds.getNorthEast();
	          var sw = bounds.getSouthWest();
	          var ptx = overlayProjection.fromLatLngToDivPixel(new maps.LatLng(ne.lat(), sw.lng()));
	          // need round for safari still can't find what need for firefox
	          var ptxRounded = (0, _detect2.default)().isSafari ? { x: Math.round(ptx.x), y: Math.round(ptx.y) } : { x: ptx.x, y: ptx.y };

	          this_.updateCounter_++;
	          this_._onBoundsChanged(map, maps);

	          if (_this.mouse_) {
	            var latLng = _this.geoService_.unproject(_this.mouse_, true);
	            _this.mouse_.lat = latLng.lat;
	            _this.mouse_.lng = latLng.lng;
	          }

	          _this._onChildMouseMove();

	          this_.dragTime_ = 0;
	          div.style.left = ptxRounded.x + 'px';
	          div.style.top = ptxRounded.y + 'px';
	          if (this_.markersDispatcher_) {
	            this_.markersDispatcher_.emit('kON_CHANGE');
	            if (this_.fireMouseEventOnIdle_) {
	              this_.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
	            }
	          }
	        });

	        maps.event.addListener(map, 'mouseover', function () {
	          // has advantage over div MouseLeave
	          this_.mouseInMap_ = true;
	        });

	        // an alternative way to know the mouse is back within the map
	        // This would not fire when clicking/interacting with google maps
	        // own on-map countrols+markers. This handles an edge case for touch devices
	        // + 'draggable:false' custom option. See #332 for more details.
	        maps.event.addListener(map, 'click', function () {
	          this_.mouseInMap_ = true;
	        });

	        maps.event.addListener(map, 'mouseout', function () {
	          // has advantage over div MouseLeave
	          this_.mouseInMap_ = false;
	          this_.mouse_ = null;
	          this_.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
	        });

	        maps.event.addListener(map, 'drag', function () {
	          this_.dragTime_ = new Date().getTime();
	          this_._onDrag();
	        });
	        // user choosing satellite vs roads, etc
	        maps.event.addListener(map, 'maptypeid_changed', function () {
	          this_._onMapTypeIdChange(map.getMapTypeId());
	        });
	      }).catch(function (e) {
	        console.error(e); // eslint-disable-line no-console
	        throw e;
	      });
	    };

	    _this._onGoogleApiLoaded = function () {
	      if (_this.props.onGoogleApiLoaded) {
	        var _this$props;

	        if (false) {
	          console.warn('GoogleMap: ' + // eslint-disable-line
	          'Usage of internal api objects is dangerous ' + 'and can cause a lot of issues.\n' + 'To hide this warning add yesIWantToUseGoogleMapApiInternals={true} ' + 'to <GoogleMap instance');
	        }

	        (_this$props = _this.props).onGoogleApiLoaded.apply(_this$props, arguments);
	      }
	    };

	    _this._getHoverDistance = function () {
	      return _this.props.hoverDistance;
	    };

	    _this._onDrag = function () {
	      var _this$props2;

	      return _this.props.onDrag && (_this$props2 = _this.props).onDrag.apply(_this$props2, arguments);
	    };

	    _this._onMapTypeIdChange = function () {
	      var _this$props3;

	      return _this.props.onMapTypeIdChange && (_this$props3 = _this.props).onMapTypeIdChange.apply(_this$props3, arguments);
	    };

	    _this._onZoomAnimationStart = function () {
	      var _this$props4;

	      return _this.props.onZoomAnimationStart && (_this$props4 = _this.props).onZoomAnimationStart.apply(_this$props4, arguments);
	    };

	    _this._onZoomAnimationEnd = function () {
	      var _this$props5;

	      return _this.props.onZoomAnimationEnd && (_this$props5 = _this.props).onZoomAnimationEnd.apply(_this$props5, arguments);
	    };

	    _this._onChildClick = function () {
	      if (_this.props.onChildClick) {
	        var _this$props6;

	        return (_this$props6 = _this.props).onChildClick.apply(_this$props6, arguments);
	      }
	      return undefined;
	    };

	    _this._onChildMouseDown = function (hoverKey, childProps) {
	      _this.childMouseDownArgs_ = [hoverKey, childProps];
	      if (_this.props.onChildMouseDown) {
	        _this.props.onChildMouseDown(hoverKey, childProps, _extends({}, _this.mouse_));
	      }
	    };

	    _this._onChildMouseUp = function () {
	      if (_this.childMouseDownArgs_) {
	        if (_this.props.onChildMouseUp) {
	          var _this$props7;

	          (_this$props7 = _this.props).onChildMouseUp.apply(_this$props7, _toConsumableArray(_this.childMouseDownArgs_).concat([_extends({}, _this.mouse_)]));
	        }
	        _this.childMouseDownArgs_ = null;
	        _this.childMouseUpTime_ = new Date().getTime();
	      }
	    };

	    _this._onChildMouseMove = function () {
	      if (_this.childMouseDownArgs_) {
	        if (_this.props.onChildMouseMove) {
	          var _this$props8;

	          (_this$props8 = _this.props).onChildMouseMove.apply(_this$props8, _toConsumableArray(_this.childMouseDownArgs_).concat([_extends({}, _this.mouse_)]));
	        }
	      }
	    };

	    _this._onChildMouseEnter = function () {
	      if (_this.props.onChildMouseEnter) {
	        var _this$props9;

	        return (_this$props9 = _this.props).onChildMouseEnter.apply(_this$props9, arguments);
	      }
	      return undefined;
	    };

	    _this._onChildMouseLeave = function () {
	      if (_this.props.onChildMouseLeave) {
	        var _this$props10;

	        return (_this$props10 = _this.props).onChildMouseLeave.apply(_this$props10, arguments);
	      }
	      return undefined;
	    };

	    _this._setViewSize = function () {
	      if (!_this.mounted_) return;

	      var mapDom = _reactDom2.default.findDOMNode(_this.googleMapDom_);
	      _this.geoService_.setViewSize(mapDom.clientWidth, mapDom.clientHeight);
	      _this._onBoundsChanged();
	    };

	    _this._onWindowResize = function () {
	      _this.resetSizeOnIdle_ = true;
	    };

	    _this._onMapMouseMove = function (e) {
	      if (!_this.mouseInMap_) return;

	      var currTime = new Date().getTime();
	      var K_RECALC_CLIENT_RECT_MS = 50;

	      if (currTime - _this.mouseMoveTime_ > K_RECALC_CLIENT_RECT_MS) {
	        _this.boundingRect_ = e.currentTarget.getBoundingClientRect();
	      }
	      _this.mouseMoveTime_ = currTime;

	      var mousePosX = e.clientX - _this.boundingRect_.left;
	      var mousePosY = e.clientY - _this.boundingRect_.top;

	      if (!_this.mouse_) {
	        _this.mouse_ = { x: 0, y: 0, lat: 0, lng: 0 };
	      }

	      _this.mouse_.x = mousePosX;
	      _this.mouse_.y = mousePosY;

	      var latLng = _this.geoService_.unproject(_this.mouse_, true);
	      _this.mouse_.lat = latLng.lat;
	      _this.mouse_.lng = latLng.lng;

	      _this._onChildMouseMove();

	      if (currTime - _this.dragTime_ < K_IDLE_TIMEOUT) {
	        _this.fireMouseEventOnIdle_ = true;
	      } else {
	        _this.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
	        _this.fireMouseEventOnIdle_ = false;
	      }
	    };

	    _this._onClick = function () {
	      var _this$props11;

	      return _this.props.onClick && !_this.childMouseDownArgs_ && new Date().getTime() - _this.childMouseUpTime_ > K_IDLE_CLICK_TIMEOUT && _this.dragTime_ === 0 && (_this$props11 = _this.props).onClick.apply(_this$props11, arguments);
	    };

	    _this._onMapClick = function (event) {
	      if (_this.markersDispatcher_) {
	        // support touch events and recalculate mouse position on click
	        _this._onMapMouseMove(event);
	        var currTime = new Date().getTime();
	        if (currTime - _this.dragTime_ > K_IDLE_TIMEOUT) {
	          if (_this.mouse_) {
	            _this._onClick(_extends({}, _this.mouse_, {
	              event: event
	            }));
	          }

	          _this.markersDispatcher_.emit('kON_CLICK', event);
	        }
	      }
	    };

	    _this._onMapMouseDownNative = function (event) {
	      if (!_this.mouseInMap_) return;

	      _this._onMapMouseDown(event);
	    };

	    _this._onMapMouseDown = function (event) {
	      if (_this.markersDispatcher_) {
	        var currTime = new Date().getTime();
	        if (currTime - _this.dragTime_ > K_IDLE_TIMEOUT) {
	          // Hovered marker detected at mouse move could be deleted at mouse down time
	          // so it will be good to force hovered marker recalculation
	          _this._onMapMouseMove(event);
	          _this.markersDispatcher_.emit('kON_MDOWN', event);
	        }
	      }
	    };

	    _this._onMapMouseDownCapture = function () {
	      if ((0, _detect2.default)().isChrome) {
	        // to fix strange zoom in chrome
	        if (!_this.mouse_) {
	          _this.zoomControlClickTime_ = new Date().getTime();
	        }
	      }
	    };

	    _this._onKeyDownCapture = function () {
	      if ((0, _detect2.default)().isChrome) {
	        _this.zoomControlClickTime_ = new Date().getTime();
	      }
	    };

	    _this._isCenterDefined = function (center) {
	      return center && ((0, _is_plain_object2.default)(center) && (0, _isNumber2.default)(center.lat) && (0, _isNumber2.default)(center.lng) || center.length === 2 && (0, _isNumber2.default)(center[0]) && (0, _isNumber2.default)(center[1]));
	    };

	    _this._onBoundsChanged = function (map, maps, callExtBoundsChange) {
	      if (map) {
	        var gmC = map.getCenter();
	        _this.geoService_.setView([gmC.lat(), gmC.lng()], map.getZoom(), 0);
	      }

	      if ((_this.props.onChange || _this.props.onBoundsChange) && _this.geoService_.canProject()) {
	        var zoom = _this.geoService_.getZoom();
	        var bounds = _this.geoService_.getBounds();
	        var centerLatLng = _this.geoService_.getCenter();

	        if (!(0, _array_helper2.default)(bounds, _this.prevBounds_, kEPS)) {
	          if (callExtBoundsChange !== false) {
	            var marginBounds = _this.geoService_.getBounds(_this.props.margin);
	            if (_this.props.onBoundsChange) {
	              _this.props.onBoundsChange(_this.centerIsObject_ ? _extends({}, centerLatLng) : [centerLatLng.lat, centerLatLng.lng], zoom, bounds, marginBounds);
	            }

	            if (_this.props.onChange) {
	              _this.props.onChange({
	                center: _extends({}, centerLatLng),
	                zoom: zoom,
	                bounds: {
	                  nw: {
	                    lat: bounds[0],
	                    lng: bounds[1]
	                  },
	                  se: {
	                    lat: bounds[2],
	                    lng: bounds[3]
	                  },
	                  sw: {
	                    lat: bounds[4],
	                    lng: bounds[5]
	                  },
	                  ne: {
	                    lat: bounds[6],
	                    lng: bounds[7]
	                  }
	                },
	                marginBounds: {
	                  nw: {
	                    lat: marginBounds[0],
	                    lng: marginBounds[1]
	                  },
	                  se: {
	                    lat: marginBounds[2],
	                    lng: marginBounds[3]
	                  },
	                  sw: {
	                    lat: marginBounds[4],
	                    lng: marginBounds[5]
	                  },
	                  ne: {
	                    lat: marginBounds[6],
	                    lng: marginBounds[7]
	                  }
	                },

	                size: _this.geoService_.hasSize() ? {
	                  width: _this.geoService_.getWidth(),
	                  height: _this.geoService_.getHeight()
	                } : {
	                  width: 0,
	                  height: 0
	                }
	              });
	            }

	            _this.prevBounds_ = bounds;
	          }
	        }
	      }
	    };

	    _this._registerChild = function (ref) {
	      _this.googleMapDom_ = ref;
	    };

	    _this.mounted_ = false;
	    _this.initialized_ = false;
	    _this.googleApiLoadedCalled_ = false;

	    _this.map_ = null;
	    _this.maps_ = null;
	    _this.prevBounds_ = null;

	    _this.layers_ = {};

	    _this.mouse_ = null;
	    _this.mouseMoveTime_ = 0;
	    _this.boundingRect_ = null;
	    _this.mouseInMap_ = true;

	    _this.dragTime_ = 0;
	    _this.fireMouseEventOnIdle_ = false;
	    _this.updateCounter_ = 0;

	    _this.markersDispatcher_ = new _marker_dispatcher2.default(_this);
	    _this.geoService_ = new _geo2.default(K_GOOGLE_TILE_SIZE);
	    _this.centerIsObject_ = (0, _is_plain_object2.default)(_this.props.center);

	    _this.minZoom_ = DEFAULT_MIN_ZOOM;
	    _this.defaultDraggableOption_ = true;

	    _this.zoomControlClickTime_ = 0;

	    _this.childMouseDownArgs_ = null;
	    _this.childMouseUpTime_ = 0;

	    _this.googleMapDom_ = null;

	    if (false) {
	      if (_this.props.apiKey) {
	        console.warn('GoogleMap: ' + // eslint-disable-line no-console
	        'apiKey is deprecated, use ' + 'bootstrapURLKeys={{key: YOUR_API_KEY}} instead.');
	      }

	      if (_this.props.onBoundsChange) {
	        console.warn('GoogleMap: ' + // eslint-disable-line no-console
	        'onBoundsChange is deprecated, use ' + 'onChange({center, zoom, bounds, ...other}) instead.');
	      }

	      if (_this.props.center === undefined && _this.props.defaultCenter === undefined) {
	        console.warn('GoogleMap: center or defaultCenter property must be defined' // eslint-disable-line no-console
	        );
	      }

	      if (_this.props.zoom === undefined && _this.props.defaultZoom === undefined) {
	        console.warn('GoogleMap: zoom or defaultZoom property must be defined' // eslint-disable-line no-console
	        );
	      }
	    }

	    if (_this._isCenterDefined(_this.props.center || _this.props.defaultCenter)) {
	      var propsCenter = latLng2Obj(_this.props.center || _this.props.defaultCenter);
	      _this.geoService_.setView(propsCenter, _this.props.zoom || _this.props.defaultZoom, 0);
	    }

	    _this.zoomAnimationInProgress_ = false;

	    _this.state = {
	      overlayCreated: false
	    };
	    return _this;
	  }

	  _createClass(GoogleMap, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.mounted_ = true;
	      window.addEventListener('resize', this._onWindowResize);
	      window.addEventListener('keydown', this._onKeyDownCapture, true);
	      var mapDom = _reactDom2.default.findDOMNode(this.googleMapDom_);
	      // gmap can't prevent map drag if mousedown event already occured
	      // the only workaround I find is prevent mousedown native browser event
	      _reactDom2.default.findDOMNode(this.googleMapDom_).addEventListener('mousedown', this._onMapMouseDownNative, true);

	      window.addEventListener('mouseup', this._onChildMouseUp, false);

	      var bootstrapURLKeys = _extends({}, this.props.apiKey && { key: this.props.apiKey }, this.props.bootstrapURLKeys);

	      this.props.googleMapLoader(bootstrapURLKeys); // we can start load immediatly

	      setTimeout(function () {
	        // to detect size
	        _this2._setViewSize();
	        if (_this2._isCenterDefined(_this2.props.center || _this2.props.defaultCenter)) {
	          _this2._initMap();
	        }
	      }, 0, this);
	      if (this.props.resetBoundsOnResize) {
	        var that = this;
	        _detectElementResize2.default.addResizeListener(mapDom, that._mapDomResizeCallback);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this3 = this;

	      if (false) {
	        if (this.props.defaultCenter !== nextProps.defaultCenter) {
	          console.warn('GoogleMap: defaultCenter prop changed. ' + // eslint-disable-line
	          "You can't change default props.");
	        }

	        if (this.props.defaultZoom !== nextProps.defaultZoom) {
	          console.warn('GoogleMap: defaultZoom prop changed. ' + // eslint-disable-line
	          "You can't change default props.");
	        }
	      }

	      if (!this._isCenterDefined(this.props.center) && this._isCenterDefined(nextProps.center)) {
	        setTimeout(function () {
	          return _this3._initMap();
	        }, 0);
	      }

	      if (this.map_) {
	        var centerLatLng = this.geoService_.getCenter();
	        if (this._isCenterDefined(nextProps.center)) {
	          var nextPropsCenter = latLng2Obj(nextProps.center);
	          var currCenter = this._isCenterDefined(this.props.center) ? latLng2Obj(this.props.center) : null;

	          if (!currCenter || Math.abs(nextPropsCenter.lat - currCenter.lat) + Math.abs(nextPropsCenter.lng - currCenter.lng) > kEPS) {
	            if (Math.abs(nextPropsCenter.lat - centerLatLng.lat) + Math.abs(nextPropsCenter.lng - centerLatLng.lng) > kEPS) {
	              this.map_.panTo({
	                lat: nextPropsCenter.lat,
	                lng: nextPropsCenter.lng
	              });
	            }
	          }
	        }

	        if (nextProps.zoom !== undefined) {
	          // if zoom chaged by user
	          if (Math.abs(nextProps.zoom - this.props.zoom) > 0) {
	            this.map_.setZoom(nextProps.zoom);
	          }
	        }

	        if (this.props.draggable !== undefined && nextProps.draggable === undefined) {
	          // reset to default
	          this.map_.setOptions({ draggable: this.defaultDraggableOption_ });
	        } else if (this.props.draggable !== nextProps.draggable) {
	          // also prevent this on window 'mousedown' event to prevent map move
	          this.map_.setOptions({ draggable: nextProps.draggable });
	        }

	        // use shallowEqual to try avoid calling map._setOptions if only the ref changes
	        if (nextProps.options !== undefined && !(0, _shallowEqual2.default)(this.props.options, nextProps.options)) {
	          var mapPlainObjects = (0, _pick2.default)(this.maps_, _is_plain_object2.default);
	          var options = typeof nextProps.options === 'function' ? nextProps.options(mapPlainObjects) : nextProps.options;
	          // remove zoom, center and draggable options as these are managed by google-maps-react
	          options = (0, _omit2.default)(options, ['zoom', 'center', 'draggable']);

	          if ('minZoom' in options) {
	            var minZoom = this._computeMinZoom(options.minZoomOverride, options.minZoom);
	            options.minZoom = _checkMinZoom(options.minZoom, minZoom);
	          }

	          this.map_.setOptions(options);
	        }

	        if (nextProps.layerTypes !== this.props.layerTypes) {
	          Object.keys(this.layers_).forEach(function (layerKey) {
	            _this3.layers_[layerKey].setMap(null);
	            delete _this3.layers_[layerKey];
	          });
	          this._setLayers(nextProps.layerTypes);
	        }
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      // draggable does not affect inner components
	      return !(0, _shallowEqual2.default)((0, _omit2.default)(this.props, ['draggable']), (0, _omit2.default)(nextProps, ['draggable'])) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      this.markersDispatcher_.emit('kON_CHANGE');

	      if (this.props.hoverDistance !== prevProps.hoverDistance) {
	        this.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.mounted_ = false;
	      var mapDom = _reactDom2.default.findDOMNode(this.googleMapDom_);
	      window.removeEventListener('resize', this._onWindowResize);
	      window.removeEventListener('keydown', this._onKeyDownCapture);
	      mapDom.removeEventListener('mousedown', this._onMapMouseDownNative, true);
	      window.removeEventListener('mouseup', this._onChildMouseUp, false);
	      if (this.props.resetBoundsOnResize) {
	        _detectElementResize2.default.removeResizeListener(mapDom, this._mapDomResizeCallback);
	      }

	      if (this.overlay_) {
	        // this triggers overlay_.onRemove(), which will unmount the <GoogleMapMarkers/>
	        this.overlay_.setMap(null);
	      }

	      if (this.maps_ && this.map_) {
	        // fix google, as otherwise listeners works even without map
	        this.map_.setOptions({ scrollwheel: false });
	        this.maps_.event.clearInstanceListeners(this.map_);
	      }

	      this.map_ = null;
	      this.maps_ = null;
	      this.markersDispatcher_.dispose();

	      this.resetSizeOnIdle_ = false;

	      delete this.map_;
	      delete this.markersDispatcher_;
	    }
	    // calc minZoom if map size available
	    // it's better to not set minZoom less than this calculation gives
	    // otherwise there is no homeomorphism between screen coordinates and map
	    // (one map coordinate can have different screen coordinates)


	    // this method works only if this.props.onChildMouseDown was called


	    // this method works only if this.props.onChildMouseDown was called


	    // K_IDLE_CLICK_TIMEOUT - looks like 300 is enough


	    // gmap can't prevent map drag if mousedown event already occured
	    // the only workaround I find is prevent mousedown native browser event

	  }, {
	    key: 'render',
	    value: function render() {
	      var mapMarkerPrerender = !this.state.overlayCreated ? _react2.default.createElement(_google_map_markers_prerender2.default, {
	        experimental: this.props.experimental,
	        onChildClick: this._onChildClick,
	        onChildMouseDown: this._onChildMouseDown,
	        onChildMouseEnter: this._onChildMouseEnter,
	        onChildMouseLeave: this._onChildMouseLeave,
	        geoService: this.geoService_,
	        projectFromLeftTop: false,
	        distanceToMouse: this.props.distanceToMouse,
	        getHoverDistance: this._getHoverDistance,
	        dispatcher: this.markersDispatcher_
	      }) : null;

	      return _react2.default.createElement(
	        'div',
	        {
	          style: this.props.style,
	          onMouseMove: this._onMapMouseMove,
	          onMouseDownCapture: this._onMapMouseDownCapture,
	          onClick: this._onMapClick
	        },
	        _react2.default.createElement(_google_map_map2.default, { registerChild: this._registerChild }),
	        mapMarkerPrerender
	      );
	    }
	  }]);

	  return GoogleMap;
	}(_react.Component);

	GoogleMap.propTypes = {
	  apiKey: _propTypes2.default.string,
	  bootstrapURLKeys: _propTypes2.default.any,

	  defaultCenter: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.shape({
	    lat: _propTypes2.default.number,
	    lng: _propTypes2.default.number
	  })]),
	  center: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.shape({
	    lat: _propTypes2.default.number,
	    lng: _propTypes2.default.number
	  })]),
	  defaultZoom: _propTypes2.default.number,
	  zoom: _propTypes2.default.number,
	  onBoundsChange: _propTypes2.default.func,
	  onChange: _propTypes2.default.func,
	  onClick: _propTypes2.default.func,
	  onChildClick: _propTypes2.default.func,
	  onChildMouseDown: _propTypes2.default.func,
	  onChildMouseUp: _propTypes2.default.func,
	  onChildMouseMove: _propTypes2.default.func,
	  onChildMouseEnter: _propTypes2.default.func,
	  onChildMouseLeave: _propTypes2.default.func,
	  onZoomAnimationStart: _propTypes2.default.func,
	  onZoomAnimationEnd: _propTypes2.default.func,
	  onDrag: _propTypes2.default.func,
	  onMapTypeIdChange: _propTypes2.default.func,
	  options: _propTypes2.default.any,
	  distanceToMouse: _propTypes2.default.func,
	  hoverDistance: _propTypes2.default.number,
	  debounced: _propTypes2.default.bool,
	  margin: _propTypes2.default.array,
	  googleMapLoader: _propTypes2.default.any,
	  onGoogleApiLoaded: _propTypes2.default.func,
	  yesIWantToUseGoogleMapApiInternals: _propTypes2.default.bool,
	  draggable: _propTypes2.default.bool,
	  style: _propTypes2.default.any,
	  resetBoundsOnResize: _propTypes2.default.bool,
	  layerTypes: _propTypes2.default.arrayOf(_propTypes2.default.string) };
	GoogleMap.defaultProps = {
	  distanceToMouse: function distanceToMouse(pt, mousePos /* , markerProps */) {
	    return Math.sqrt((pt.x - mousePos.x) * (pt.x - mousePos.x) + (pt.y - mousePos.y) * (pt.y - mousePos.y));
	  },

	  hoverDistance: 30,
	  debounced: true,
	  options: defaultOptions_,
	  googleMapLoader: _google_map_loader2.default,
	  yesIWantToUseGoogleMapApiInternals: false,
	  style: {
	    width: '100%',
	    height: '100%',
	    margin: 0,
	    padding: 0,
	    position: 'relative'
	  },
	  layerTypes: []
	};
	GoogleMap.googleMapLoader = _google_map_loader2.default;
	exports.default = GoogleMap;

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _eventemitter = __webpack_require__(376);

	var _eventemitter2 = _interopRequireDefault(_eventemitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MarkerDispatcher = function (_EventEmitter) {
	  _inherits(MarkerDispatcher, _EventEmitter);

	  function MarkerDispatcher(gmapInstance) {
	    _classCallCheck(this, MarkerDispatcher);

	    var _this = _possibleConstructorReturn(this, (MarkerDispatcher.__proto__ || Object.getPrototypeOf(MarkerDispatcher)).call(this));

	    _this.gmapInstance = gmapInstance;
	    return _this;
	  }

	  _createClass(MarkerDispatcher, [{
	    key: 'getChildren',
	    value: function getChildren() {
	      return this.gmapInstance.props.children;
	    }
	  }, {
	    key: 'getMousePosition',
	    value: function getMousePosition() {
	      return this.gmapInstance.mouse_;
	    }
	  }, {
	    key: 'getUpdateCounter',
	    value: function getUpdateCounter() {
	      return this.gmapInstance.updateCounter_;
	    }
	  }, {
	    key: 'dispose',
	    value: function dispose() {
	      this.gmapInstance = null;
	      this.removeAllListeners();
	    }
	  }]);

	  return MarkerDispatcher;
	}(_eventemitter2.default);

	exports.default = MarkerDispatcher;

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;

	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} [once=false] Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }

	/**
	 * Hold the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var events = this._events
	    , names = []
	    , name;

	  if (!events) return names;

	  for (name in events) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];

	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];

	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }

	  return ee;
	};

	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return this;

	  var listeners = this._events[evt]
	    , events = [];

	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }

	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }

	  return this;
	};

	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;

	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = {
	  width: '100%',
	  height: '100%',
	  left: 0,
	  top: 0,
	  margin: 0,
	  padding: 0,
	  position: 'absolute'
	};

	var GoogleMapMap = function (_Component) {
	  _inherits(GoogleMapMap, _Component);

	  function GoogleMapMap() {
	    _classCallCheck(this, GoogleMapMap);

	    return _possibleConstructorReturn(this, (GoogleMapMap.__proto__ || Object.getPrototypeOf(GoogleMapMap)).apply(this, arguments));
	  }

	  _createClass(GoogleMapMap, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return false; // disable react on this div
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var registerChild = this.props.registerChild;

	      return _react2.default.createElement('div', { ref: registerChild, style: style });
	    }
	  }]);

	  return GoogleMapMap;
	}(_react.Component);

	exports.default = GoogleMapMap;

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(101);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _shallowEqual = __webpack_require__(215);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _omit = __webpack_require__(379);

	var _omit2 = _interopRequireDefault(_omit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/forbid-prop-types */

	var mainStyle = {
	  width: '100%',
	  height: '100%',
	  left: 0,
	  top: 0,
	  margin: 0,
	  padding: 0,
	  position: 'absolute'
	};

	var style = {
	  width: 0,
	  height: 0,
	  left: 0,
	  top: 0,
	  backgroundColor: 'transparent',
	  position: 'absolute'
	};

	var GoogleMapMarkers = function (_Component) {
	  _inherits(GoogleMapMarkers, _Component);

	  function GoogleMapMarkers(props) {
	    _classCallCheck(this, GoogleMapMarkers);

	    var _this = _possibleConstructorReturn(this, (GoogleMapMarkers.__proto__ || Object.getPrototypeOf(GoogleMapMarkers)).call(this, props));

	    _this._getState = function () {
	      return {
	        children: _this.props.dispatcher.getChildren(),
	        updateCounter: _this.props.dispatcher.getUpdateCounter()
	      };
	    };

	    _this._onChangeHandler = function () {
	      if (!_this.dimesionsCache_) {
	        return;
	      }

	      var prevChildCount = (_this.state.children || []).length;
	      var state = _this._getState();

	      _this.setState(state, function () {
	        return (state.children || []).length !== prevChildCount && _this._onMouseChangeHandler();
	      });
	    };

	    _this._onChildClick = function () {
	      if (_this.props.onChildClick) {
	        if (_this.hoverChildProps_) {
	          var hoverKey = _this.hoverKey_;
	          var childProps = _this.hoverChildProps_;
	          // click works only on hovered item
	          _this.props.onChildClick(hoverKey, childProps);
	        }
	      }
	    };

	    _this._onChildMouseDown = function () {
	      if (_this.props.onChildMouseDown) {
	        if (_this.hoverChildProps_) {
	          var hoverKey = _this.hoverKey_;
	          var childProps = _this.hoverChildProps_;
	          // works only on hovered item
	          _this.props.onChildMouseDown(hoverKey, childProps);
	        }
	      }
	    };

	    _this._onChildMouseEnter = function (hoverKey, childProps) {
	      if (!_this.dimesionsCache_) {
	        return;
	      }

	      if (_this.props.onChildMouseEnter) {
	        _this.props.onChildMouseEnter(hoverKey, childProps);
	      }

	      _this.hoverChildProps_ = childProps;
	      _this.hoverKey_ = hoverKey;
	      _this.setState({ hoverKey: hoverKey });
	    };

	    _this._onChildMouseLeave = function () {
	      if (!_this.dimesionsCache_) {
	        return;
	      }

	      var hoverKey = _this.hoverKey_;
	      var childProps = _this.hoverChildProps_;

	      if (hoverKey !== undefined && hoverKey !== null) {
	        if (_this.props.onChildMouseLeave) {
	          _this.props.onChildMouseLeave(hoverKey, childProps);
	        }

	        _this.hoverKey_ = null;
	        _this.hoverChildProps_ = null;
	        _this.setState({ hoverKey: null });
	      }
	    };

	    _this._onMouseAllow = function (value) {
	      if (!value) {
	        _this._onChildMouseLeave();
	      }

	      _this.allowMouse_ = value;
	    };

	    _this._onMouseChangeHandler = function () {
	      if (_this.allowMouse_) {
	        _this._onMouseChangeHandlerRaf();
	      }
	    };

	    _this._onMouseChangeHandlerRaf = function () {
	      if (!_this.dimesionsCache_) {
	        return;
	      }

	      var mp = _this.props.dispatcher.getMousePosition();

	      if (mp) {
	        var distances = [];
	        var hoverDistance = _this.props.getHoverDistance();

	        _react2.default.Children.forEach(_this.state.children, function (child, childIndex) {
	          if (!child) return;
	          // layers
	          if (child.props.latLng === undefined && child.props.lat === undefined && child.props.lng === undefined) {
	            return;
	          }

	          var childKey = child.key !== undefined && child.key !== null ? child.key : childIndex;
	          var dist = _this.props.distanceToMouse(_this.dimesionsCache_[childKey], mp, child.props);
	          if (dist < hoverDistance) {
	            distances.push({
	              key: childKey,
	              dist: dist,
	              props: child.props
	            });
	          }
	        });

	        if (distances.length) {
	          distances.sort(function (a, b) {
	            return a.dist - b.dist;
	          });
	          var hoverKey = distances[0].key;
	          var childProps = distances[0].props;

	          if (_this.hoverKey_ !== hoverKey) {
	            _this._onChildMouseLeave();

	            _this._onChildMouseEnter(hoverKey, childProps);
	          }
	        } else {
	          _this._onChildMouseLeave();
	        }
	      } else {
	        _this._onChildMouseLeave();
	      }
	    };

	    _this._getDimensions = function (key) {
	      var childKey = key;
	      return _this.dimesionsCache_[childKey];
	    };

	    _this.props.dispatcher.on('kON_CHANGE', _this._onChangeHandler);
	    _this.props.dispatcher.on('kON_MOUSE_POSITION_CHANGE', _this._onMouseChangeHandler);
	    _this.props.dispatcher.on('kON_CLICK', _this._onChildClick);
	    _this.props.dispatcher.on('kON_MDOWN', _this._onChildMouseDown);

	    _this.dimesionsCache_ = {};
	    _this.hoverKey_ = null;
	    _this.hoverChildProps_ = null;
	    _this.allowMouse_ = true;

	    _this.state = _extends({}, _this._getState(), { hoverKey: null });
	    return _this;
	  }

	  _createClass(GoogleMapMarkers, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (this.props.experimental === true) {
	        return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)((0, _omit2.default)(this.state, ['hoverKey']), (0, _omit2.default)(nextState, ['hoverKey']));
	      }

	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.dispatcher.removeListener('kON_CHANGE', this._onChangeHandler);
	      this.props.dispatcher.removeListener('kON_MOUSE_POSITION_CHANGE', this._onMouseChangeHandler);
	      this.props.dispatcher.removeListener('kON_CLICK', this._onChildClick);
	      this.props.dispatcher.removeListener('kON_MDOWN', this._onChildMouseDown);

	      this.dimesionsCache_ = null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var mainElementStyle = this.props.style || mainStyle;
	      this.dimesionsCache_ = {};

	      var markers = _react2.default.Children.map(this.state.children, function (child, childIndex) {
	        if (!child) return undefined;
	        if (child.props.latLng === undefined && child.props.lat === undefined && child.props.lng === undefined) {
	          return _react2.default.cloneElement(child, {
	            $geoService: _this2.props.geoService,
	            $onMouseAllow: _this2._onMouseAllow,
	            $prerender: _this2.props.prerender
	          });
	        }

	        var latLng = child.props.latLng !== undefined ? child.props.latLng : { lat: child.props.lat, lng: child.props.lng };

	        var pt = _this2.props.geoService.project(latLng, _this2.props.projectFromLeftTop);

	        var stylePtPos = {
	          left: pt.x,
	          top: pt.y
	        };

	        var dx = 0;
	        var dy = 0;

	        if (!_this2.props.projectFromLeftTop) {
	          // center projection
	          if (_this2.props.geoService.hasSize()) {
	            dx = _this2.props.geoService.getWidth() / 2;
	            dy = _this2.props.geoService.getHeight() / 2;
	          }
	        }

	        // to prevent rerender on child element i need to pass
	        // const params $getDimensions and $dimensionKey instead of dimension object
	        var childKey = child.key !== undefined && child.key !== null ? child.key : childIndex;

	        _this2.dimesionsCache_[childKey] = _extends({
	          x: pt.x + dx,
	          y: pt.y + dy
	        }, latLng);

	        return _react2.default.createElement(
	          'div',
	          {
	            key: childKey,
	            style: _extends({}, style, stylePtPos),
	            className: child.props.$markerHolderClassName
	          },
	          _react2.default.cloneElement(child, {
	            $hover: childKey === _this2.state.hoverKey,
	            $getDimensions: _this2._getDimensions,
	            $dimensionKey: childKey,
	            $geoService: _this2.props.geoService,
	            $onMouseAllow: _this2._onMouseAllow,
	            $prerender: _this2.props.prerender
	          })
	        );
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: mainElementStyle },
	        markers
	      );
	    }
	  }]);

	  return GoogleMapMarkers;
	}(_react.Component);

	GoogleMapMarkers.propTypes = {
	  geoService: _propTypes2.default.any,
	  style: _propTypes2.default.any,
	  distanceToMouse: _propTypes2.default.func,
	  dispatcher: _propTypes2.default.any,
	  onChildClick: _propTypes2.default.func,
	  onChildMouseDown: _propTypes2.default.func,
	  onChildMouseLeave: _propTypes2.default.func,
	  onChildMouseEnter: _propTypes2.default.func,
	  getHoverDistance: _propTypes2.default.func,
	  projectFromLeftTop: _propTypes2.default.bool,
	  prerender: _propTypes2.default.bool
	};
	GoogleMapMarkers.defaultProps = {
	  projectFromLeftTop: false,
	  prerender: false
	};
	exports.default = GoogleMapMarkers;

/***/ }),
/* 379 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	// https://github.com/acdlite/recompose/blob/master/src/packages/recompose/utils/omit.js
	var omit = function omit(obj, keys) {
	  var rest = _objectWithoutProperties(obj, []);

	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (key in rest) {
	      delete rest[key];
	    }
	  }
	  return rest;
	};

	exports.default = omit;

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function (props) {
	  return _react2.default.createElement(
	    'div',
	    { style: style },
	    _react2.default.createElement(_google_map_markers2.default, _extends({}, props, { prerender: true }))
	  );
	};

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _google_map_markers = __webpack_require__(378);

	var _google_map_markers2 = _interopRequireDefault(_google_map_markers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var style = {
	  width: '50%',
	  height: '50%',
	  left: '50%',
	  top: '50%',
	  // backgroundColor: 'red',
	  margin: 0,
	  padding: 0,
	  position: 'absolute'
	};

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = googleMapLoader;
	/* eslint-disable no-console */
	var $script_ = null;

	var loadPromise_ = void 0;

	var resolveCustomPromise_ = void 0;
	var _customPromise = new Promise(function (resolve) {
	  resolveCustomPromise_ = resolve;
	});

	// TODO add libraries language and other map options
	function googleMapLoader(bootstrapURLKeys) {
	  if (!$script_) {
	    $script_ = __webpack_require__(382); // eslint-disable-line
	  }

	  // call from outside google-map-react
	  // will be as soon as loadPromise_ resolved
	  if (!bootstrapURLKeys) {
	    return _customPromise;
	  }

	  if (loadPromise_) {
	    return loadPromise_;
	  }

	  loadPromise_ = new Promise(function (resolve, reject) {
	    if (typeof window === 'undefined') {
	      reject(new Error('google map cannot be loaded outside browser env'));
	      return;
	    }

	    if (window.google && window.google.maps) {
	      resolve(window.google.maps);
	      return;
	    }

	    if (typeof window._$_google_map_initialize_$_ !== 'undefined') {
	      reject(new Error('google map initialization error'));
	    }

	    window._$_google_map_initialize_$_ = function () {
	      delete window._$_google_map_initialize_$_;
	      resolve(window.google.maps);
	    };

	    if (false) {
	      if (Object.keys(bootstrapURLKeys).indexOf('callback') > -1) {
	        console.error('"callback" key in bootstrapURLKeys is not allowed, ' + // eslint-disable-line
	        'use onGoogleApiLoaded property instead');
	        throw new Error('"callback" key in bootstrapURLKeys is not allowed, ' + 'use onGoogleApiLoaded property instead');
	      }
	    }

	    var queryString = Object.keys(bootstrapURLKeys).reduce(function (r, key) {
	      return r + '&' + key + '=' + bootstrapURLKeys[key];
	    }, '');

	    $script_('https://maps.googleapis.com/maps/api/js?callback=_$_google_map_initialize_$_' + queryString, function () {
	      return typeof window.google === 'undefined' && reject(new Error('google map initialization error (not loaded)'));
	    });
	  });

	  resolveCustomPromise_(loadPromise_);

	  return loadPromise_;
	}

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * $script.js JS loader & dependency manager
	  * https://github.com/ded/script.js
	  * (c) Dustin Diaz 2014 | License MIT
	  */

	(function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else this[name] = definition()
	})('$script', function () {
	  var doc = document
	    , head = doc.getElementsByTagName('head')[0]
	    , s = 'string'
	    , f = false
	    , push = 'push'
	    , readyState = 'readyState'
	    , onreadystatechange = 'onreadystatechange'
	    , list = {}
	    , ids = {}
	    , delay = {}
	    , scripts = {}
	    , scriptpath
	    , urlArgs

	  function every(ar, fn) {
	    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
	    return 1
	  }
	  function each(ar, fn) {
	    every(ar, function (el) {
	      return !fn(el)
	    })
	  }

	  function $script(paths, idOrDone, optDone) {
	    paths = paths[push] ? paths : [paths]
	    var idOrDoneIsDone = idOrDone && idOrDone.call
	      , done = idOrDoneIsDone ? idOrDone : optDone
	      , id = idOrDoneIsDone ? paths.join('') : idOrDone
	      , queue = paths.length
	    function loopFn(item) {
	      return item.call ? item() : list[item]
	    }
	    function callback() {
	      if (!--queue) {
	        list[id] = 1
	        done && done()
	        for (var dset in delay) {
	          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
	        }
	      }
	    }
	    setTimeout(function () {
	      each(paths, function loading(path, force) {
	        if (path === null) return callback()
	        
	        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
	          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
	        }
	        
	        if (scripts[path]) {
	          if (id) ids[id] = 1
	          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
	        }

	        scripts[path] = 1
	        if (id) ids[id] = 1
	        create(path, callback)
	      })
	    }, 0)
	    return $script
	  }

	  function create(path, fn) {
	    var el = doc.createElement('script'), loaded
	    el.onload = el.onerror = el[onreadystatechange] = function () {
	      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
	      el.onload = el[onreadystatechange] = null
	      loaded = 1
	      scripts[path] = 2
	      fn()
	    }
	    el.async = 1
	    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
	    head.insertBefore(el, head.lastChild)
	  }

	  $script.get = create

	  $script.order = function (scripts, id, done) {
	    (function callback(s) {
	      s = scripts.shift()
	      !scripts.length ? $script(s, id, done) : $script(s, callback)
	    }())
	  }

	  $script.path = function (p) {
	    scriptpath = p
	  }
	  $script.urlArgs = function (str) {
	    urlArgs = str;
	  }
	  $script.ready = function (deps, ready, req) {
	    deps = deps[push] ? deps : [deps]
	    var missing = [];
	    !each(deps, function (dep) {
	      list[dep] || missing[push](dep);
	    }) && every(deps, function (dep) {return list[dep]}) ?
	      ready() : !function (key) {
	      delay[key] = delay[key] || []
	      delay[key][push](ready)
	      req && req(missing)
	    }(deps.join('|'))
	    return $script
	  }

	  $script.done = function (idOrDone) {
	    $script([null], idOrDone)
	  }

	  return $script
	});


/***/ }),
/* 383 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = detectBrowser;
	// http://stackoverflow.com/questions/5899783/detect-safari-chrome-ie-firefox-opera-with-user-agent
	var detectBrowserResult_ = null;

	function detectBrowser() {
	  if (detectBrowserResult_) {
	    return detectBrowserResult_;
	  }

	  if (typeof navigator !== 'undefined') {
	    var isExplorer = navigator.userAgent.indexOf('MSIE') > -1;
	    var isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
	    var isOpera = navigator.userAgent.toLowerCase().indexOf('op') > -1;

	    var isChrome = navigator.userAgent.indexOf('Chrome') > -1;
	    var isSafari = navigator.userAgent.indexOf('Safari') > -1;

	    if (isChrome && isSafari) {
	      isSafari = false;
	    }

	    if (isChrome && isOpera) {
	      isChrome = false;
	    }

	    detectBrowserResult_ = {
	      isExplorer: isExplorer,
	      isFirefox: isFirefox,
	      isOpera: isOpera,
	      isChrome: isChrome,
	      isSafari: isSafari
	    };
	    return detectBrowserResult_;
	  }

	  detectBrowserResult_ = {
	    isChrome: true,
	    isExplorer: false,
	    isFirefox: false,
	    isOpera: false,
	    isSafari: false
	  };

	  return detectBrowserResult_;
	}

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _pointGeometry = __webpack_require__(385);

	var _pointGeometry2 = _interopRequireDefault(_pointGeometry);

	var _lat_lng = __webpack_require__(386);

	var _lat_lng2 = _interopRequireDefault(_lat_lng);

	var _transform = __webpack_require__(388);

	var _transform2 = _interopRequireDefault(_transform);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Geo = function () {
	  function Geo(tileSize) {
	    _classCallCheck(this, Geo);

	    // left_top view пользует гугл
	    // super();
	    this.hasSize_ = false;
	    this.hasView_ = false;
	    this.transform_ = new _transform2.default(tileSize || 512);
	  }

	  _createClass(Geo, [{
	    key: 'setView',
	    value: function setView(center, zoom, bearing) {
	      this.transform_.center = _lat_lng2.default.convert(center);
	      this.transform_.zoom = +zoom;
	      this.transform_.bearing = +bearing;
	      this.hasView_ = true;
	    }
	  }, {
	    key: 'setViewSize',
	    value: function setViewSize(width, height) {
	      this.transform_.width = width;
	      this.transform_.height = height;
	      this.hasSize_ = true;
	    }
	  }, {
	    key: 'canProject',
	    value: function canProject() {
	      return this.hasSize_ && this.hasView_;
	    }
	  }, {
	    key: 'hasSize',
	    value: function hasSize() {
	      return this.hasSize_;
	    }
	  }, {
	    key: 'unproject',
	    value: function unproject(ptXY, viewFromLeftTop) {
	      var ptRes = void 0;
	      if (viewFromLeftTop) {
	        var ptxy = _extends({}, ptXY);
	        ptxy.x -= this.transform_.width / 2;
	        ptxy.y -= this.transform_.height / 2;
	        ptRes = this.transform_.pointLocation(_pointGeometry2.default.convert(ptxy));
	      } else {
	        ptRes = this.transform_.pointLocation(_pointGeometry2.default.convert(ptXY));
	      }

	      ptRes.lng -= 360 * Math.round(ptRes.lng / 360); // convert 2 google format
	      return ptRes;
	    }
	  }, {
	    key: 'project',
	    value: function project(ptLatLng, viewFromLeftTop) {
	      if (viewFromLeftTop) {
	        var pt = this.transform_.locationPoint(_lat_lng2.default.convert(ptLatLng));
	        pt.x -= this.transform_.worldSize * Math.round(pt.x / this.transform_.worldSize);

	        pt.x += this.transform_.width / 2;
	        pt.y += this.transform_.height / 2;

	        return pt;
	      }

	      return this.transform_.locationPoint(_lat_lng2.default.convert(ptLatLng));
	    }
	  }, {
	    key: 'getWidth',
	    value: function getWidth() {
	      return this.transform_.width;
	    }
	  }, {
	    key: 'getHeight',
	    value: function getHeight() {
	      return this.transform_.height;
	    }
	  }, {
	    key: 'getZoom',
	    value: function getZoom() {
	      return this.transform_.zoom;
	    }
	  }, {
	    key: 'getCenter',
	    value: function getCenter() {
	      var ptRes = this.transform_.pointLocation({ x: 0, y: 0 });

	      return ptRes;
	    }
	  }, {
	    key: 'getBounds',
	    value: function getBounds(margins, roundFactor) {
	      var bndT = margins && margins[0] || 0;
	      var bndR = margins && margins[1] || 0;
	      var bndB = margins && margins[2] || 0;
	      var bndL = margins && margins[3] || 0;

	      if (this.getWidth() - bndR - bndL > 0 && this.getHeight() - bndT - bndB > 0) {
	        var topLeftCorner = this.unproject({
	          x: bndL - this.getWidth() / 2,
	          y: bndT - this.getHeight() / 2
	        });
	        var bottomRightCorner = this.unproject({
	          x: this.getWidth() / 2 - bndR,
	          y: this.getHeight() / 2 - bndB
	        });

	        var res = [topLeftCorner.lat, topLeftCorner.lng, // NW
	        bottomRightCorner.lat, bottomRightCorner.lng, // SE
	        bottomRightCorner.lat, topLeftCorner.lng, // SW
	        topLeftCorner.lat, bottomRightCorner.lng];

	        if (roundFactor) {
	          res = res.map(function (r) {
	            return Math.round(r * roundFactor) / roundFactor;
	          });
	        }
	        return res;
	      }

	      return [0, 0, 0, 0];
	    }
	  }]);

	  return Geo;
	}();

	exports.default = Geo;

/***/ }),
/* 385 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = Point;

	function Point(x, y) {
	    this.x = x;
	    this.y = y;
	}

	Point.prototype = {
	    clone: function() { return new Point(this.x, this.y); },

	    add:     function(p) { return this.clone()._add(p);     },
	    sub:     function(p) { return this.clone()._sub(p);     },
	    mult:    function(k) { return this.clone()._mult(k);    },
	    div:     function(k) { return this.clone()._div(k);     },
	    rotate:  function(a) { return this.clone()._rotate(a);  },
	    matMult: function(m) { return this.clone()._matMult(m); },
	    unit:    function() { return this.clone()._unit(); },
	    perp:    function() { return this.clone()._perp(); },
	    round:   function() { return this.clone()._round(); },

	    mag: function() {
	        return Math.sqrt(this.x * this.x + this.y * this.y);
	    },

	    equals: function(p) {
	        return this.x === p.x &&
	               this.y === p.y;
	    },

	    dist: function(p) {
	        return Math.sqrt(this.distSqr(p));
	    },

	    distSqr: function(p) {
	        var dx = p.x - this.x,
	            dy = p.y - this.y;
	        return dx * dx + dy * dy;
	    },

	    angle: function() {
	        return Math.atan2(this.y, this.x);
	    },

	    angleTo: function(b) {
	        return Math.atan2(this.y - b.y, this.x - b.x);
	    },

	    angleWith: function(b) {
	        return this.angleWithSep(b.x, b.y);
	    },

	    // Find the angle of the two vectors, solving the formula for the cross product a x b = |a||b|sin(θ) for θ.
	    angleWithSep: function(x, y) {
	        return Math.atan2(
	            this.x * y - this.y * x,
	            this.x * x + this.y * y);
	    },

	    _matMult: function(m) {
	        var x = m[0] * this.x + m[1] * this.y,
	            y = m[2] * this.x + m[3] * this.y;
	        this.x = x;
	        this.y = y;
	        return this;
	    },

	    _add: function(p) {
	        this.x += p.x;
	        this.y += p.y;
	        return this;
	    },

	    _sub: function(p) {
	        this.x -= p.x;
	        this.y -= p.y;
	        return this;
	    },

	    _mult: function(k) {
	        this.x *= k;
	        this.y *= k;
	        return this;
	    },

	    _div: function(k) {
	        this.x /= k;
	        this.y /= k;
	        return this;
	    },

	    _unit: function() {
	        this._div(this.mag());
	        return this;
	    },

	    _perp: function() {
	        var y = this.y;
	        this.y = this.x;
	        this.x = -y;
	        return this;
	    },

	    _rotate: function(angle) {
	        var cos = Math.cos(angle),
	            sin = Math.sin(angle),
	            x = cos * this.x - sin * this.y,
	            y = sin * this.x + cos * this.y;
	        this.x = x;
	        this.y = y;
	        return this;
	    },

	    _round: function() {
	        this.x = Math.round(this.x);
	        this.y = Math.round(this.y);
	        return this;
	    }
	};

	// constructs Point from an array if necessary
	Point.convert = function (a) {
	    if (a instanceof Point) {
	        return a;
	    }
	    if (Array.isArray(a)) {
	        return new Point(a[0], a[1]);
	    }
	    return a;
	};


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _wrap2 = __webpack_require__(387);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LatLng = function () {
	  function LatLng(lat, lng) {
	    _classCallCheck(this, LatLng);

	    if (isNaN(lat) || isNaN(lng)) {
	      throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
	    }
	    this.lat = +lat;
	    this.lng = +lng;
	  }

	  _createClass(LatLng, [{
	    key: 'wrap',
	    value: function wrap() {
	      return new LatLng(this.lat, (0, _wrap2.wrap)(this.lng, -180, 180));
	    }
	  }]);

	  return LatLng;
	}();

	LatLng.convert = function (a) {
	  if (a instanceof LatLng) {
	    return a;
	  }

	  if (Array.isArray(a)) {
	    return new LatLng(a[0], a[1]);
	  }

	  if ('lng' in a && 'lat' in a) {
	    return new LatLng(a.lat, a.lng);
	  }

	  return a;
	};

	exports.default = LatLng;

/***/ }),
/* 387 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wrap = wrap;
	/* eslint-disable import/prefer-default-export */

	function wrap(n, min, max) {
	  var d = max - min;
	  return n === max ? n : ((n - min) % d + d) % d + min;
	}

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */


	var _pointGeometry = __webpack_require__(385);

	var _pointGeometry2 = _interopRequireDefault(_pointGeometry);

	var _lat_lng = __webpack_require__(386);

	var _lat_lng2 = _interopRequireDefault(_lat_lng);

	var _wrap = __webpack_require__(387);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// A single transform, generally used for a single tile to be scaled, rotated, and zoomed.
	var Transform = function () {
	  function Transform(tileSize, minZoom, maxZoom) {
	    _classCallCheck(this, Transform);

	    this.tileSize = tileSize || 512; // constant

	    this._minZoom = minZoom || 0;
	    this._maxZoom = maxZoom || 52;

	    this.latRange = [-85.05113, 85.05113];

	    this.width = 0;
	    this.height = 0;
	    this.zoom = 0;
	    this.center = new _lat_lng2.default(0, 0);
	    this.angle = 0;
	  }

	  _createClass(Transform, [{
	    key: 'zoomScale',
	    value: function zoomScale(zoom) {
	      return Math.pow(2, zoom);
	    }
	  }, {
	    key: 'scaleZoom',
	    value: function scaleZoom(scale) {
	      return Math.log(scale) / Math.LN2;
	    }
	  }, {
	    key: 'project',
	    value: function project(latlng, worldSize) {
	      return new _pointGeometry2.default(this.lngX(latlng.lng, worldSize), this.latY(latlng.lat, worldSize));
	    }
	  }, {
	    key: 'unproject',
	    value: function unproject(point, worldSize) {
	      return new _lat_lng2.default(this.yLat(point.y, worldSize), this.xLng(point.x, worldSize));
	    }
	  }, {
	    key: 'lngX',


	    // lat/lon <-> absolute pixel coords convertion
	    value: function lngX(lon, worldSize) {
	      return (180 + lon) * (worldSize || this.worldSize) / 360;
	    }

	    // latitude to absolute y coord

	  }, {
	    key: 'latY',
	    value: function latY(lat, worldSize) {
	      var y = 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
	      return (180 - y) * (worldSize || this.worldSize) / 360;
	    }
	  }, {
	    key: 'xLng',
	    value: function xLng(x, worldSize) {
	      return x * 360 / (worldSize || this.worldSize) - 180;
	    }
	  }, {
	    key: 'yLat',
	    value: function yLat(y, worldSize) {
	      var y2 = 180 - y * 360 / (worldSize || this.worldSize);
	      return 360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90;
	    }
	  }, {
	    key: 'locationPoint',
	    value: function locationPoint(latlng) {
	      var p = this.project(latlng);
	      return this.centerPoint._sub(this.point._sub(p)._rotate(this.angle));
	    }
	  }, {
	    key: 'pointLocation',
	    value: function pointLocation(p) {
	      var p2 = this.centerPoint._sub(p)._rotate(-this.angle);
	      return this.unproject(this.point.sub(p2));
	    }
	  }, {
	    key: 'minZoom',
	    get: function get() {
	      return this._minZoom;
	    },
	    set: function set(zoom) {
	      this._minZoom = zoom;
	      this.zoom = Math.max(this.zoom, zoom);
	    }
	  }, {
	    key: 'maxZoom',
	    get: function get() {
	      return this._maxZoom;
	    },
	    set: function set(zoom) {
	      this._maxZoom = zoom;
	      this.zoom = Math.min(this.zoom, zoom);
	    }
	  }, {
	    key: 'worldSize',
	    get: function get() {
	      return this.tileSize * this.scale;
	    }
	  }, {
	    key: 'centerPoint',
	    get: function get() {
	      return new _pointGeometry2.default(0, 0); // this.size._div(2);
	    }
	  }, {
	    key: 'size',
	    get: function get() {
	      return new _pointGeometry2.default(this.width, this.height);
	    }
	  }, {
	    key: 'bearing',
	    get: function get() {
	      return -this.angle / Math.PI * 180;
	    },
	    set: function set(bearing) {
	      this.angle = -(0, _wrap.wrap)(bearing, -180, 180) * Math.PI / 180;
	    }
	  }, {
	    key: 'zoom',
	    get: function get() {
	      return this._zoom;
	    },
	    set: function set(zoom) {
	      var zoomV = Math.min(Math.max(zoom, this.minZoom), this.maxZoom);
	      this._zoom = zoomV;
	      this.scale = this.zoomScale(zoomV);
	      this.tileZoom = Math.floor(zoomV);
	      this.zoomFraction = zoomV - this.tileZoom;
	    }
	  }, {
	    key: 'x',
	    get: function get() {
	      return this.lngX(this.center.lng);
	    }
	  }, {
	    key: 'y',
	    get: function get() {
	      return this.latY(this.center.lat);
	    }
	  }, {
	    key: 'point',
	    get: function get() {
	      return new _pointGeometry2.default(this.x, this.y);
	    }
	  }]);

	  return Transform;
	}();

	exports.default = Transform;

/***/ }),
/* 389 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isArraysEqualEps;
	function isArraysEqualEps(arrayA, arrayB, eps) {
	  if (arrayA && arrayB) {
	    for (var i = 0; i !== arrayA.length; ++i) {
	      if (Math.abs(arrayA[i] - arrayB[i]) > eps) {
	        return false;
	      }
	    }
	    return true;
	  }
	  return false;
	}

/***/ }),
/* 390 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = isPlainObject;
	// source taken from https://github.com/rackt/redux/blob/master/src/utils/isPlainObject.js
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject(obj) {
	  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}

/***/ }),
/* 391 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = pick;
	// source taken from https://github.com/rackt/redux/blob/master/src/utils/pick.js

	function pick(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    if (fn(obj[key])) {
	      result[key] = obj[key]; // eslint-disable-line
	    }
	    return result;
	  }, {});
	}

/***/ }),
/* 392 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = raf;
	function raf(callback) {
	  if (window.requestAnimationFrame) {
	    return window.requestAnimationFrame(callback);
	  }

	  var nativeRaf = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

	  return nativeRaf ? nativeRaf(callback) : window.setTimeout(callback, 1e3 / 60);
	}

/***/ }),
/* 393 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var log2 = Math.log2 ? Math.log2 : function (x) {
	  return Math.log(x) / Math.LN2;
	};

	exports.default = log2;

/***/ }),
/* 394 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = isNumber;
	function isObjectLike(value) {
	  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
	}

	var objectToString = Object.prototype.toString;

	function isNumber(value) {
	  var numberTag = '[object Number]';
	  return typeof value === 'number' || isObjectLike(value) && objectToString.call(value) === numberTag;
	}

/***/ }),
/* 395 */
/***/ (function(module, exports) {

	'use strict';

	/* eslint-disable */
	/**
	* Detect Element Resize.
	* Forked in order to guard against unsafe 'window' and 'document' references.
	*
	* https://github.com/sdecima/javascript-detect-element-resize
	* Sebastian Decima
	*
	* version: 0.5.3
	**/

	// Reliable `window` and `document` detection
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	// Check `document` and `window` in case of server-side rendering
	var _window;
	if (canUseDOM) {
	  _window = window;
	} else if (typeof self !== 'undefined') {
	  _window = self;
	} else {
	  _window = undefined;
	}

	var attachEvent = typeof document !== 'undefined' && document.attachEvent;
	var stylesCreated = false;

	if (canUseDOM && !attachEvent) {
	  var requestFrame = function () {
	    var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
	      return _window.setTimeout(fn, 20);
	    };
	    return function (fn) {
	      return raf(fn);
	    };
	  }();

	  var cancelFrame = function () {
	    var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
	    return function (id) {
	      return cancel(id);
	    };
	  }();

	  var resetTriggers = function resetTriggers(element) {
	    var triggers = element.__resizeTriggers__,
	        expand = triggers.firstElementChild,
	        contract = triggers.lastElementChild,
	        expandChild = expand.firstElementChild;
	    contract.scrollLeft = contract.scrollWidth;
	    contract.scrollTop = contract.scrollHeight;
	    expandChild.style.width = expand.offsetWidth + 1 + 'px';
	    expandChild.style.height = expand.offsetHeight + 1 + 'px';
	    expand.scrollLeft = expand.scrollWidth;
	    expand.scrollTop = expand.scrollHeight;
	  };

	  var checkTriggers = function checkTriggers(element) {
	    return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
	  };

	  var scrollListener = function scrollListener(e) {
	    var element = this;
	    resetTriggers(this);
	    if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
	    this.__resizeRAF__ = requestFrame(function () {
	      if (checkTriggers(element)) {
	        element.__resizeLast__.width = element.offsetWidth;
	        element.__resizeLast__.height = element.offsetHeight;
	        element.__resizeListeners__.forEach(function (fn) {
	          fn.call(element, e);
	        });
	      }
	    });
	  };

	  /* Detect CSS Animations support to detect element display/re-attach */
	  var animation = false,
	      animationstring = 'animation',
	      keyframeprefix = '',
	      animationstartevent = 'animationstart',
	      domPrefixes = 'Webkit Moz O ms'.split(' '),
	      startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
	      pfx = '';

	  if (canUseDOM) {
	    var elm = document.createElement('fakeelement');
	    if (elm.style.animationName !== undefined) {
	      animation = true;
	    }

	    if (animation === false) {
	      for (var i = 0; i < domPrefixes.length; i++) {
	        if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
	          pfx = domPrefixes[i];
	          animationstring = pfx + 'Animation';
	          keyframeprefix = '-' + pfx.toLowerCase() + '-';
	          animationstartevent = startEvents[i];
	          animation = true;
	          break;
	        }
	      }
	    }
	  }

	  var animationName = 'resizeanim';
	  var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
	  var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
	}

	var createStyles = function createStyles() {
	  if (!stylesCreated) {
	    //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
	    var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
	        head = document.head || document.getElementsByTagName('head')[0],
	        style = document.createElement('style');

	    style.type = 'text/css';
	    if (style.styleSheet) {
	      style.styleSheet.cssText = css;
	    } else {
	      style.appendChild(document.createTextNode(css));
	    }

	    head.appendChild(style);
	    stylesCreated = true;
	  }
	};

	var addResizeListener = function addResizeListener(element, fn) {
	  if (element.parentNode === undefined) {
	    var tempParentDiv = document.createElement('div');
	    element.parentNode = tempParentDiv;
	  }
	  element = element.parentNode;
	  if (attachEvent) element.attachEvent('onresize', fn);else {
	    if (!element.__resizeTriggers__) {
	      if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
	      createStyles();
	      element.__resizeLast__ = {};
	      element.__resizeListeners__ = [];
	      (element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
	      element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
	      element.appendChild(element.__resizeTriggers__);
	      resetTriggers(element);
	      element.addEventListener('scroll', scrollListener, true);

	      /* Listen for a css animation to detect element display/re-attach */
	      animationstartevent && element.__resizeTriggers__.addEventListener(animationstartevent, function (e) {
	        if (e.animationName == animationName) resetTriggers(element);
	      });
	    }
	    element.__resizeListeners__.push(fn);
	  }
	};

	var removeResizeListener = function removeResizeListener(element, fn) {
	  element = element.parentNode;
	  if (attachEvent) element.detachEvent('onresize', fn);else {
	    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
	    if (!element.__resizeListeners__.length) {
	      element.removeEventListener('scroll', scrollListener);
	      element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
	    }
	  }
	};

	module.exports = {
	  addResizeListener: addResizeListener,
	  removeResizeListener: removeResizeListener
	};

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(397);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Listingpage = function (_Component) {
	    (0, _inherits3.default)(Listingpage, _Component);

	    function Listingpage() {
	        (0, _classCallCheck3.default)(this, Listingpage);
	        return (0, _possibleConstructorReturn3.default)(this, (Listingpage.__proto__ || (0, _getPrototypeOf2.default)(Listingpage)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Listingpage, [{
	        key: "render",
	        value: function render() {
	            var schools = this.props.schools;


	            var schoolListDiv = [];
	            var schoolList = schools.list;
	            for (var schoolIndex in schoolList) {
	                var schoolDetails = schoolList[schoolIndex];
	                schoolListDiv.push(_react2.default.createElement(
	                    "li",
	                    { className: "mix color-3 check1 radio2 option3", key: schoolIndex },
	                    _react2.default.createElement(_index2.default, { name: schoolDetails.name, location: schoolDetails.location, review: schoolDetails.review, website: schoolDetails.website, schoolrating: schoolDetails.schoolrating })
	                ));
	            }

	            return _react2.default.createElement(
	                "div",
	                null,
	                schoolListDiv
	            );
	        }
	    }]);
	    return Listingpage;
	}(_react.Component);

	exports.default = Listingpage;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ListUnit = function (_Component) {
	  (0, _inherits3.default)(ListUnit, _Component);

	  function ListUnit(props) {
	    (0, _classCallCheck3.default)(this, ListUnit);
	    return (0, _possibleConstructorReturn3.default)(this, (ListUnit.__proto__ || (0, _getPrototypeOf2.default)(ListUnit)).call(this, props));
	  }

	  (0, _createClass3.default)(ListUnit, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "row" },
	        _react2.default.createElement(
	          "div",
	          { className: "col-xs-7 col-sm-5 col-md-7 col-lg-6 clearfix school-info" },
	          _react2.default.createElement(
	            "div",
	            { className: " fl js-schoolPhoto" },
	            _react2.default.createElement("img", { src: "./../assets/img/product.jpg", alt: "No school photo available", className: "thumbnail-border" })
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "fl pll" },
	            _react2.default.createElement(
	              "div",
	              { className: "ptm notranslate" },
	              _react2.default.createElement("div", { className: "mtm " }),
	              _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                  "a",
	                  { style: { lineHeight: '1.1em' }, className: "open-sans_sb mbs font-size-medium rs-schoolName", href: "detail.html" },
	                  this.props.name
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: " font-size-small rs-schoolAddress" },
	                this.props.location
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "clearfix visible-xs font-size-small" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "prs fl " },
	                  "Public district"
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "fl" },
	                  "9-12,",
	                  this.props.website
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "font-size-small mvm clearfix ptm " },
	              _react2.default.createElement(
	                "div",
	                { className: "fl" },
	                _react2.default.createElement(
	                  "span",
	                  { className: "prm vam" },
	                  _react2.default.createElement("span", { className: "iconx16-stars i-16-orange-star i-16-star-2" }),
	                  _react2.default.createElement("span", { className: "iconx16-stars i-16-grey-star i-16-star-3" })
	                ),
	                _react2.default.createElement(
	                  "a",
	                  { className: "font-size-small js-reviewCount", href: "/missouri/moberly/1249-Moberly-Sr.-High-School/#Reviews" },
	                  this.props.review,
	                  " reviews"
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "phm fl" },
	                "|"
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "prs fl" },
	                "Public district"
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "fl" },
	                "9-12"
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "col-xs-5 col-sm-4 col-md-3 col-lg-4 icons" },
	          _react2.default.createElement("div", { className: "ptl " }),
	          _react2.default.createElement(
	            "div",
	            { className: "row" },
	            _react2.default.createElement(
	              "div",
	              { className: "col-xs-6 col-sm-4 mvl tac" },
	              _react2.default.createElement(
	                "a",
	                { href: "/missouri/moberly/1249-Moberly-Sr.-High-School/" },
	                _react2.default.createElement(
	                  "span",
	                  { className: "gs-rating circle-rating--5 circle-rating--xtra-small ma" },
	                  this.props.schoolrating
	                ),
	                _react2.default.createElement("div", { className: "pts" }),
	                _react2.default.createElement(
	                  "span",
	                  { className: "tac font-size-xs db link-darkgray", style: { lineheight: '1.3em' } },
	                  "SchoolCounty",
	                  _react2.default.createElement("br", null),
	                  "Rating"
	                )
	              ),
	              "            "
	            ),
	            _react2.default.createElement("div", { className: "col-xs-6 col-sm-4 mtl mbs js-schoolFitScore" })
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: " col-sm-3 col-md-2 tar pvl" },
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "btn btn-default full-width clearfix mbm db fl js-compareSchoolButton", id: "js-compareSchool1249", "data-schoolname": "Moberly Sr. High School", "data-schoolstate": "mo", "data-schoolid": "1249", "data-schoolrating": "5",
	                style: { cursor: 'pointer', backgroundColor: '#9dc997', padding: '.6em 2em' } },
	              _react2.default.createElement("input", { type: "checkbox", style: { margin: '2px !important', float: 'left' } }),
	              _react2.default.createElement(
	                "div",
	                { className: "fl js-compareSchoolsButtonText" },
	                _react2.default.createElement(
	                  "a",
	                  { href: "compare.html", "data-toggle": "tooltip", title: "Compare" },
	                  "Compare"
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return ListUnit;
	}(_react.Component);

	exports.default = ListUnit;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Filter = function (_Component) {
	    (0, _inherits3.default)(Filter, _Component);

	    function Filter(props) {
	        (0, _classCallCheck3.default)(this, Filter);
	        return (0, _possibleConstructorReturn3.default)(this, (Filter.__proto__ || (0, _getPrototypeOf2.default)(Filter)).call(this, props));
	    }

	    (0, _createClass3.default)(Filter, [{
	        key: "getTypes",
	        value: function getTypes() {
	            var filterParams = this.props.filterParams;

	            var schoolTypeList = [];
	            var typesOfSchools = filterParams.typeOfSchool;
	            for (var typeIndex in typesOfSchools) {
	                var schoolType = typesOfSchools[typeIndex];
	                schoolTypeList.push(_react2.default.createElement(
	                    "li",
	                    { key: typeIndex },
	                    _react2.default.createElement("input", { className: "filter", "data-filter": ".radio2", type: "radio", name: "radioButton", id: 'radio' + typeIndex }),
	                    _react2.default.createElement(
	                        "label",
	                        { className: "radio-label", htmlFor: 'radio' + typeIndex },
	                        schoolType
	                    )
	                ));
	            }

	            return schoolTypeList;
	        }
	    }, {
	        key: "getLevels",
	        value: function getLevels() {
	            var filterParams = this.props.filterParams;

	            var schoolLevelList = [];
	            var schoolsLevels = filterParams.level;
	            for (var levelIndex in schoolsLevels) {
	                var schoolLevel = schoolsLevels[levelIndex];
	                schoolLevelList.push(_react2.default.createElement(
	                    "li",
	                    { key: levelIndex },
	                    _react2.default.createElement("input", { className: "filter", "data-filter": '.check1' + levelIndex, type: "checkbox", id: 'checkbox' + levelIndex }),
	                    _react2.default.createElement(
	                        "label",
	                        { className: "checkbox-label", htmlFor: 'checkbox' + levelIndex },
	                        schoolLevel
	                    )
	                ));
	            }
	            return schoolLevelList;
	        }
	    }, {
	        key: "getSyllabus",
	        value: function getSyllabus() {
	            var filterParams = this.props.filterParams;

	            var syllabusList = [];
	            var syllabusTypes = filterParams.typesOfSyllabus;
	            for (var syllabusIndex in syllabusTypes) {
	                var syllabusType = syllabusTypes[syllabusIndex];
	                syllabusList.push(_react2.default.createElement(
	                    "option",
	                    { key: syllabusIndex, value: '.option' + syllabusIndex },
	                    syllabusType
	                ));
	            }

	            return syllabusList;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var filterParams = this.props.filterParams;

	            if (!filterParams.fetched) {
	                return null;
	            }

	            var schoolTypeList = this.getTypes();

	            var schoolLevelList = this.getLevels();

	            var syllabusList = this.getSyllabus();

	            return _react2.default.createElement(
	                "div",
	                { className: "cd-filter" },
	                _react2.default.createElement(
	                    "form",
	                    null,
	                    _react2.default.createElement(
	                        "div",
	                        { className: "cd-filter-block" },
	                        _react2.default.createElement(
	                            "h4",
	                            null,
	                            "Search"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "cd-filter-content" },
	                            _react2.default.createElement("input", { type: "search", placeholder: "Try color-1,color-2,color-3..." })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "cd-filter-block" },
	                        _react2.default.createElement(
	                            "h4",
	                            null,
	                            "Levels of Education"
	                        ),
	                        _react2.default.createElement(
	                            "ul",
	                            { className: "cd-filter-content cd-filters list" },
	                            schoolLevelList
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "cd-filter-block" },
	                        _react2.default.createElement(
	                            "h4",
	                            null,
	                            "Select"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "cd-filter-content" },
	                            _react2.default.createElement(
	                                "div",
	                                { className: "cd-select cd-filters" },
	                                _react2.default.createElement(
	                                    "select",
	                                    { className: "filter", name: "selectThis", id: "selectThis" },
	                                    _react2.default.createElement(
	                                        "option",
	                                        { value: "" },
	                                        "Choose an Syllabus"
	                                    ),
	                                    syllabusList
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "cd-filter-block" },
	                        _react2.default.createElement(
	                            "h4",
	                            null,
	                            "Type of School"
	                        ),
	                        _react2.default.createElement(
	                            "ul",
	                            { className: "cd-filter-content cd-filters list" },
	                            schoolTypeList
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "a",
	                    { href: "#0", className: "cd-close" },
	                    "Close"
	                )
	            );
	        }
	    }]);
	    return Filter;
	}(_react.Component);

	exports.default = Filter;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var getSchoolsList = exports.getSchoolsList = function getSchoolsList() {
	    var schoolList = [{
	        name: 'Wisdom School',
	        location: 'Rajajinagar',
	        review: '16',
	        website: 'wisdomschool.edu',
	        schoolrating: '5'
	    }, {
	        name: 'DPS Bangalore South',
	        location: 'JayaNagar',
	        review: '25',
	        website: 'dpssouthbangalore.edu',
	        schoolrating: '4.6'
	    }, {
	        name: 'Timpany School',
	        location: 'Kanakapura',
	        review: '22',
	        website: 'timpanybangalore.edu',
	        schoolrating: '3.8'
	    }];
	    return { type: "GET_SCHOOLS_SUCCESS", payload: schoolList };
	};

	var getFilterParams = exports.getFilterParams = function getFilterParams() {
	    var levelOfEducation = ['Primary(1st-4th)', 'Middle(5th-7th)', 'Secondary(8th-10th)'];

	    var syllabus = ['CBSE', 'STATE BOARD', 'ICSE', 'IB'];
	    var type = ['Army', 'KV', 'International'];

	    var filterParams = { levelOfEducation: levelOfEducation, syllabus: syllabus, type: type };

	    return { type: "GET_FILTER_PARAMS_SUCCESS", payload: filterParams };
	};

	/*
	export const getCompareSchoolUnitParams =()=>{


	    let schoolList = [
	        {
	            schoolNameAdress : {
	                name: 'DPS South Bangalore',
	                address: 'kanakapura Road,Bangalore-21'

	            },

	             schoolCountyRating : {
	                schoolscountyrating:'5',
	                testscorerating:'5',
	            },

	             schoolFacilities : {
	                studentsenrolled:'500',
	                transportation:'20',
	                beforecare:'6',
	                afterschool:'15',
	            },

	             schoolActivites : {
	                worldlanguage:'5',
	                clubs:'15',
	                sports:'18',
	                artsmusic:'5',
	            },

	             schoolDiversity :{
	                hindu:'30',
	                muslim:'13',
	                jain:'7',
	                christian:'18',
	                sikh:'12',
	                scst:'13',
	                nri:'7'

	            }
	        },
	        {
	            schoolNameAdress : {
	                name: 'DPS South Bangalore',
	                address: 'kanakapura Road,Bangalore-21'

	            },

	            schoolCountyRating : {
	                schoolscountyrating:'5',
	                testscorerating:'5',
	            },

	            schoolFacilities : {
	                studentsenrolled:'500',
	                transportation:'20',
	                beforecare:'6',
	                afterschool:'15',
	            },

	            schoolActivites : {
	                worldlanguage:'5',
	                clubs:'15',
	                sports:'18',
	                artsmusic:'5',
	            },

	            schoolDiversity :{
	                hindu:'30',
	                muslim:'13',
	                jain:'7',
	                christian:'18',
	                sikh:'12',
	                scst:'13',
	                nri:'7'

	            }
	        }
	    ];






	    return {type:"GET_COMPARESCHOOLUNIT_SUCCESS",payload:schoolList};
	}*/

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "schools.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(108);

	var _reactRedux = __webpack_require__(99);

	var _Header = __webpack_require__(354);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(360);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _index = __webpack_require__(401);

	var _index2 = _interopRequireDefault(_index);

	var _schools = __webpack_require__(399);

	var SchoolUnitAction = _interopRequireWildcard(_schools);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SchoolCompare = function (_Component) {
	    (0, _inherits3.default)(SchoolCompare, _Component);

	    function SchoolCompare(props) {
	        (0, _classCallCheck3.default)(this, SchoolCompare);
	        return (0, _possibleConstructorReturn3.default)(this, (SchoolCompare.__proto__ || (0, _getPrototypeOf2.default)(SchoolCompare)).call(this, props));
	    }

	    (0, _createClass3.default)(SchoolCompare, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            //action to get schools data
	            this.props.getSchools();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                todos = _props.todos,
	                actions = _props.actions,
	                children = _props.children,
	                schoolList = _props.schoolList;

	            console.log(schoolList);
	            if (!schoolList.fetched) {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    'no data'
	                );
	            }

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Header2.default, null),
	                _react2.default.createElement(_index2.default, { schoolUnits: schoolList.list }),
	                _react2.default.createElement(_Footer2.default, null)
	            );
	        }
	    }]);
	    return SchoolCompare;
	}(_react.Component);

	function mapStateToProps(state) {

	    return {
	        schoolList: state.schools.schoolList
	    };
	}

	function mapDispatchToProps(dispatch) {
	    return {
	        getSchools: function getSchools() {
	            console.log('called');
	            dispatch(SchoolUnitAction.getSchoolsList());
	        }
	    };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SchoolCompare);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(402);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(403);

	var _index4 = _interopRequireDefault(_index3);

	var _schools = __webpack_require__(399);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Comparepage = function (_Component) {
	    (0, _inherits3.default)(Comparepage, _Component);

	    function Comparepage(props) {
	        (0, _classCallCheck3.default)(this, Comparepage);
	        return (0, _possibleConstructorReturn3.default)(this, (Comparepage.__proto__ || (0, _getPrototypeOf2.default)(Comparepage)).call(this, props));
	    }

	    (0, _createClass3.default)(Comparepage, [{
	        key: 'getSchoolUnits',
	        value: function getSchoolUnits() {

	            var schoolList = this.props.schoolUnits;
	            var schoolUnitHtml = [];
	            for (var unitIndex in schoolList) {
	                var schoolUnitData = schoolList[unitIndex];
	                schoolUnitHtml.push(_react2.default.createElement(_index2.default, { schoolunit: schoolUnitData }));
	            }

	            return schoolUnitHtml;
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var schoolUnits = this.getSchoolUnits();
	            return _react2.default.createElement(
	                'div',
	                { style: { padding: "20px" } },
	                _react2.default.createElement(_index4.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'limit-width-1200' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mha oh js-comparedSchoolsListContainer' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'js-comparedSchoolsList', style: { width: "1200px" } },
	                            schoolUnits,
	                            _react2.default.createElement(
	                                'a',
	                                { id: 'back-to-top', href: '#', className: 'btn btn-primary btn-lg back-to-top', role: 'button', title: 'Click to return on the top page', 'data-toggle': 'tooltip', 'data-placement': 'left' },
	                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-up' })
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Comparepage;
	}(_react.Component);

	exports.default = Comparepage;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CompareUnit = function (_Component) {
	    (0, _inherits3.default)(CompareUnit, _Component);

	    function CompareUnit(props) {
	        (0, _classCallCheck3.default)(this, CompareUnit);
	        return (0, _possibleConstructorReturn3.default)(this, (CompareUnit.__proto__ || (0, _getPrototypeOf2.default)(CompareUnit)).call(this, props));
	    }

	    (0, _createClass3.default)(CompareUnit, [{
	        key: "getNameAddress",
	        value: function getNameAddress() {
	            var schoolunit = this.props.schoolunit;

	            var details = schoolunit;

	            return _react2.default.createElement(
	                "div",
	                { className: "mam" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "js-schoolName full-width notranslate", style: { height: " 21px" } },
	                    _react2.default.createElement(
	                        "a",
	                        {
	                            style: { lineHeight: "1.1em" }, className: "open-sans_sb mbs font-size-medium",
	                            href: "detail.html" },
	                        details.name
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "ptm full-width js-gradeLevel", style: { height: " 31px" } },
	                    details.address,
	                    " Road, bangalore-21"
	                )
	            );
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var schoolunit = this.props.schoolunit;


	            return _react2.default.createElement(
	                "div",
	                { className: "pull-left di mal js-comparedSchool js-comparedSchool1", "data-school-id": "1255" },
	                _react2.default.createElement(
	                    "a",
	                    { className: "fr pointer js-removeComparedSchool" },
	                    "remove",
	                    _react2.default.createElement("i", { className: "mls vam iconx16 i-16-blue-x-circle" })
	                ),
	                _react2.default.createElement("div", { className: "clearfix" }),
	                _react2.default.createElement(
	                    "div",
	                    { style: { borderRadius: " 4px", border: " 1.5px solid #d3d3d3", width: "260px", backgroundColor: "white" } },
	                    this.getNameAddress(),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "ptl tac" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "pbm phl" },
	                            _react2.default.createElement(
	                                "button",
	                                { className: "btn btn-default tal clearfix js-save-this-school-button", "data-link-value": "1255", style: { width: "80%" }, rel: "", "data-link-use-new-window": "" },
	                                _react2.default.createElement("span", { className: "vat iconx16 i-16-heart mrs" }),
	                                "Follow this school"
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        null,
	                        _react2.default.createElement(
	                            "div",
	                            { className: "mtm mbm pts tac full-width header-bg-color pointer js-categoryTitle", style: { height: "42px", fontSize: " 16pt" } },
	                            "Quality"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "js-qualityCategoryData js-categoryData" },
	                            _react2.default.createElement(
	                                "div",
	                                { className: "phm" },
	                                _react2.default.createElement(
	                                    "span",
	                                    { className: "open-sans_sb" },
	                                    "SchoolCounty Rating"
	                                ),
	                                _react2.default.createElement("br", null)
	                            ),
	                            _react2.default.createElement(
	                                "div",
	                                { className: "phm" },
	                                _react2.default.createElement(
	                                    "table",
	                                    { className: "full-width" },
	                                    _react2.default.createElement(
	                                        "tbody",
	                                        null,
	                                        _react2.default.createElement(
	                                            "tr",
	                                            null,
	                                            _react2.default.createElement(
	                                                "td",
	                                                null,
	                                                "SchoolCounty rating"
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                { className: "tac open-sans_sb", style: { width: "40px" } },
	                                                _react2.default.createElement(
	                                                    "div",
	                                                    { className: "gs-rating-sm average ma" },
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "dib" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "" },
	                                                            "5"
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "tr",
	                                            null,
	                                            _react2.default.createElement(
	                                                "td",
	                                                null,
	                                                "Test score rating"
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                { className: "tac open-sans_sb", style: { width: "40px" } },
	                                                "5"
	                                            )
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                "div",
	                                { className: "phm" },
	                                _react2.default.createElement("table", { className: "full-width" })
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        null,
	                        _react2.default.createElement(
	                            "div",
	                            { className: "mtm mbm pts tac full-width header-bg-color pointer js-categoryTitle", style: { height: "42px", fontSize: " 16pt" } },
	                            "Details"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "js-detailsCategoryData js-categoryData" },
	                            _react2.default.createElement(
	                                "div",
	                                { className: "phm" },
	                                _react2.default.createElement(
	                                    "span",
	                                    { className: "open-sans_sb" },
	                                    "At a glance"
	                                ),
	                                _react2.default.createElement("br", null)
	                            ),
	                            _react2.default.createElement(
	                                "div",
	                                { className: "phm" },
	                                _react2.default.createElement(
	                                    "table",
	                                    { className: "full-width " },
	                                    _react2.default.createElement(
	                                        "tbody",
	                                        null,
	                                        _react2.default.createElement(
	                                            "tr",
	                                            null,
	                                            _react2.default.createElement(
	                                                "td",
	                                                { style: { width: "30px" } },
	                                                _react2.default.createElement("i", { className: "iconx16 i-16-blue-students-enrolled" })
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                null,
	                                                "Students enrolled"
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                { className: "tac open-sans_sb", style: { width: "40px" } },
	                                                "500"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "tr",
	                                            null,
	                                            _react2.default.createElement(
	                                                "td",
	                                                { style: { width: "30px" } },
	                                                _react2.default.createElement("i", { className: "iconx16 i-16-blue-transportation" })
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                null,
	                                                "Transportation"
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                { className: "tac open-sans_sb", style: { width: "40px" } },
	                                                _react2.default.createElement(
	                                                    "div",
	                                                    { className: "pr js-compareNoDataWrapper" },
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "pointer js-compareNoDataSymbol" },
	                                                        _react2.default.createElement("i", { className: "iconx16 i-16-question-mark" })
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "panel pa dn tal pal font-size-xs open-sans js-compareNoDataPopup" },
	                                                        "This school has not provided SchoolCounty with information about this program/service. Contact the school directly to find out more."
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "tr",
	                                            null,
	                                            _react2.default.createElement(
	                                                "td",
	                                                { style: { width: "30px" } },
	                                                _react2.default.createElement("i", { className: "iconx16 i-16-blue-before-care" })
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                null,
	                                                "Before care"
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                { className: "tac open-sans_sb", style: { width: "40px" } },
	                                                _react2.default.createElement(
	                                                    "div",
	                                                    { className: "pr js-compareNoDataWrapper" },
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "pointer js-compareNoDataSymbol" },
	                                                        _react2.default.createElement("i", { className: "iconx16 i-16-question-mark" })
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "panel pa dn tal pal font-size-xs open-sans js-compareNoDataPopup" },
	                                                        "This school has not provided SchoolCounty with information about this program/service. Contact the school directly to find out more."
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "tr",
	                                            null,
	                                            _react2.default.createElement(
	                                                "td",
	                                                { style: { width: "30px" } },
	                                                _react2.default.createElement("i", { className: "iconx16 i-16-blue-after-school" })
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                null,
	                                                "After school"
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                { className: "tac open-sans_sb", style: { width: "40px" } },
	                                                _react2.default.createElement(
	                                                    "div",
	                                                    { className: "pr js-compareNoDataWrapper" },
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "pointer js-compareNoDataSymbol" },
	                                                        _react2.default.createElement("i", { className: "iconx16 i-16-question-mark" })
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "panel pa dn tal pal font-size-xs open-sans js-compareNoDataPopup" },
	                                                        "This school has not provided SchoolCounty with information about this program/service. Contact the school directly to find out more."
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                "div",
	                                { className: "pam mvn" },
	                                _react2.default.createElement("div", { className: "hbs" })
	                            ),
	                            "              ",
	                            _react2.default.createElement(
	                                "div",
	                                { className: "phm" },
	                                _react2.default.createElement(
	                                    "span",
	                                    { className: "open-sans_sb" },
	                                    "Programs"
	                                ),
	                                _react2.default.createElement("br", null)
	                            ),
	                            _react2.default.createElement(
	                                "div",
	                                { className: "phm" },
	                                _react2.default.createElement(
	                                    "table",
	                                    { className: "full-width " },
	                                    _react2.default.createElement(
	                                        "tbody",
	                                        null,
	                                        _react2.default.createElement(
	                                            "tr",
	                                            null,
	                                            _react2.default.createElement(
	                                                "td",
	                                                { style: { width: "30px" } },
	                                                _react2.default.createElement("i", { className: "iconx16 i-16-blue-world-languages" })
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                null,
	                                                "World language"
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                { className: "tac open-sans_sb", style: { width: "40px" } },
	                                                _react2.default.createElement(
	                                                    "div",
	                                                    { className: "pr js-compareNoDataWrapper" },
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "pointer js-compareNoDataSymbol" },
	                                                        _react2.default.createElement("i", { className: "iconx16 i-16-question-mark" })
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "panel pa dn tal pal font-size-xs open-sans js-compareNoDataPopup" },
	                                                        "This school has not provided SchoolCounty with information about this program/service. Contact the school directly to find out more."
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "tr",
	                                            null,
	                                            _react2.default.createElement(
	                                                "td",
	                                                { style: { width: "30px" } },
	                                                _react2.default.createElement("i", { className: "iconx16 i-16-blue-clubs" })
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                null,
	                                                "Clubs"
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                { className: "tac open-sans_sb", style: { width: "40px" } },
	                                                _react2.default.createElement(
	                                                    "div",
	                                                    { className: "pr js-compareNoDataWrapper" },
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "pointer js-compareNoDataSymbol" },
	                                                        _react2.default.createElement("i", { className: "iconx16 i-16-question-mark" })
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "panel pa dn tal pal font-size-xs open-sans js-compareNoDataPopup" },
	                                                        "This school has not provided SchoolCounty with information about this program/service. Contact the school directly to find out more."
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "tr",
	                                            null,
	                                            _react2.default.createElement(
	                                                "td",
	                                                { style: { width: "30px" } },
	                                                _react2.default.createElement("i", { className: "iconx16 i-16-blue-sports-trophy" })
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                null,
	                                                "Sports"
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                { className: "tac open-sans_sb", style: { width: "40px" } },
	                                                _react2.default.createElement(
	                                                    "div",
	                                                    { className: "pr js-compareNoDataWrapper" },
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "pointer js-compareNoDataSymbol" },
	                                                        _react2.default.createElement("i", { className: "iconx16 i-16-question-mark" })
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "panel pa dn tal pal font-size-xs open-sans js-compareNoDataPopup" },
	                                                        "This school has not provided SchoolCounty with information about this program/service. Contact the school directly to find out more."
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "tr",
	                                            null,
	                                            _react2.default.createElement(
	                                                "td",
	                                                { style: { width: "30px" } },
	                                                _react2.default.createElement("i", { className: "iconx16 i-16-blue-arts-and-music" })
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                null,
	                                                "Arts & Music"
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                { className: "tac open-sans_sb", style: { width: "40px" } },
	                                                _react2.default.createElement(
	                                                    "div",
	                                                    { className: "pr js-compareNoDataWrapper" },
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "pointer js-compareNoDataSymbol" },
	                                                        _react2.default.createElement("i", { className: "iconx16 i-16-question-mark" })
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "panel pa dn tal pal font-size-xs open-sans js-compareNoDataPopup" },
	                                                        "This school has not provided SchoolCounty with information about this program/service. Contact the school directly to find out more."
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                "div",
	                                { className: "pam mvn" },
	                                _react2.default.createElement("div", { className: "hbs" })
	                            ),
	                            "              ",
	                            _react2.default.createElement(
	                                "div",
	                                { className: "phm" },
	                                _react2.default.createElement(
	                                    "span",
	                                    { className: "open-sans_sb" },
	                                    "Student Diversity"
	                                ),
	                                _react2.default.createElement("br", null)
	                            ),
	                            _react2.default.createElement(
	                                "div",
	                                { id: "pie-chart1255", className: "notranslate", style: { width: " 250px" } },
	                                _react2.default.createElement(
	                                    "div",
	                                    { style: { position: "relative" } },
	                                    _react2.default.createElement(
	                                        "div",
	                                        { dir: "ltr", style: { position: " relative", width: " 250px", height: "250px" } },
	                                        _react2.default.createElement(
	                                            "div",
	                                            { style: { position: "absolute", left: "0px", top: "0px", width: "100%", height: "100%" }, "aria-label": "A chart." },
	                                            _react2.default.createElement(
	                                                "svg",
	                                                { width: "250", height: "250", "aria-label": "A chart.", style: { overflow: " hidden" } },
	                                                _react2.default.createElement("defs", { id: "defs" }),
	                                                _react2.default.createElement("rect", { x: "0", y: "0", width: "250", height: "250", stroke: "none", "stroke-width": "0", fill: "#ffffff" }),
	                                                _react2.default.createElement(
	                                                    "g",
	                                                    null,
	                                                    _react2.default.createElement("path", { d: "M128,128L128,16A112,112,0,0,1,135.0325381872831,16.22100641603359L128,128A0,0,0,0,0,128,128", stroke: "#ffffff", "stroke-width": "1", fill: "#6cbfb5" })
	                                                ),
	                                                _react2.default.createElement(
	                                                    "g",
	                                                    null,
	                                                    _react2.default.createElement("path", { d: "M128,128L135.0325381872831,16.22100641603359A112,112,0,0,1,193.831948256757,37.390096630005885L128,128A0,0,0,0,0,128,128", stroke: "#ffffff", "stroke-width": "1", fill: "#fcc769" })
	                                                ),
	                                                _react2.default.createElement(
	                                                    "g",
	                                                    null,
	                                                    _react2.default.createElement("path", { d: "M128,128L193.831948256757,37.390096630005885A112,112,0,0,1,209.6444862711981,51.33072413598687L128,128A0,0,0,0,0,128,128", stroke: "#ffffff", "stroke-width": "1", fill: "#ef975b" })
	                                                ),
	                                                _react2.default.createElement(
	                                                    "g",
	                                                    null,
	                                                    _react2.default.createElement("path", { d: "M128,128L209.6444862711981,51.33072413598687A112,112,0,0,1,234.5183298250572,93.3900966300059L128,128A0,0,0,0,0,128,128", stroke: "#ffffff", "stroke-width": "1", fill: "#c4d66b" })
	                                                ),
	                                                _react2.default.createElement(
	                                                    "g",
	                                                    null,
	                                                    _react2.default.createElement("path", { d: "M128,128L234.5183298250572,93.3900966300059A112,112,0,1,1,128,16L128,128A0,0,0,1,0,128,128", stroke: "#ffffff", "stroke-width": "1", fill: "#836d93" })
	                                                ),
	                                                _react2.default.createElement("g", null)
	                                            ),
	                                            _react2.default.createElement(
	                                                "div",
	                                                { "aria-label": "A tabular representation of the data in the chart.", style: { position: "absolute", left: "-10000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" } },
	                                                _react2.default.createElement(
	                                                    "table",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "thead",
	                                                        null,
	                                                        _react2.default.createElement(
	                                                            "tr",
	                                                            null,
	                                                            _react2.default.createElement(
	                                                                "th",
	                                                                null,
	                                                                "Label"
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                "th",
	                                                                null,
	                                                                "Value"
	                                                            )
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        "tbody",
	                                                        null,
	                                                        _react2.default.createElement(
	                                                            "tr",
	                                                            null,
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "American Indian/Alaska Native"
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "0"
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            "tr",
	                                                            null,
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "Asian or Asian/Pacific Islander"
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "1"
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            "tr",
	                                                            null,
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "Black"
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "9"
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            "tr",
	                                                            null,
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "Hawaiian Native/Pacific Islander"
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "0"
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            "tr",
	                                                            null,
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "Hispanic"
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "3"
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            "tr",
	                                                            null,
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "Two or more races"
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "7"
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            "tr",
	                                                            null,
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "White"
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "80"
	                                                            )
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        "div",
	                                        { "aria-hidden": "true", style: { display: "none", position: "absolute", top: "260px", left: "260px", whiteSpace: " nowrap", fontFamily: "Arial", fontSize: "13px", fontWeight: "bold" } },
	                                        "diversity"
	                                    ),
	                                    _react2.default.createElement("div", null)
	                                )
	                            ),
	                            _react2.default.createElement(
	                                "div",
	                                { className: "phm" },
	                                _react2.default.createElement(
	                                    "table",
	                                    { className: "full-width js-comparePieChartTable", style: { height: " 147px" } },
	                                    _react2.default.createElement(
	                                        "tbody",
	                                        null,
	                                        _react2.default.createElement(
	                                            "tr",
	                                            null,
	                                            _react2.default.createElement(
	                                                "td",
	                                                { style: { width: " 30px" } },
	                                                _react2.default.createElement("i", { className: "fl square js-comparePieChartSquare", style: { background: "rgb(105, 182, 132)" } })
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                null,
	                                                _react2.default.createElement(
	                                                    "div",
	                                                    { className: "pr js-popupWrapper" },
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "pointer js-popupActivator" },
	                                                        "Hindu"
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "panel pa dn tal pal font-size-xs open-sans js-popupBody" },
	                                                        "American Indian/Alaska Native"
	                                                    )
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                { className: "tac open-sans_sb", style: { width: "40px" } },
	                                                "0%"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "tr",
	                                            null,
	                                            _react2.default.createElement(
	                                                "td",
	                                                { style: { width: " 30px" } },
	                                                _react2.default.createElement("i", { className: "fl square js-comparePieChartSquare", style: { background: "rgb(108, 191, 181)" } })
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                null,
	                                                _react2.default.createElement(
	                                                    "div",
	                                                    { className: "pr js-popupWrapper" },
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "pointer js-popupActivator" },
	                                                        "Muslim"
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "panel pa dn tal pal font-size-xs open-sans js-popupBody" },
	                                                        "Asian or Asian/Pacific Islander"
	                                                    )
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                { className: "tac open-sans_sb", style: { width: "40px" } },
	                                                "1%"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "tr",
	                                            null,
	                                            _react2.default.createElement(
	                                                "td",
	                                                { style: { width: " 30px" } },
	                                                _react2.default.createElement("i", { className: "fl square js-comparePieChartSquare", style: { background: "rgb(252, 199, 105)" } })
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                null,
	                                                "Jain"
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                { className: "tac open-sans_sb", style: { width: "40px" } },
	                                                "9%"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "tr",
	                                            null,
	                                            _react2.default.createElement(
	                                                "td",
	                                                { style: { width: " 30px" } },
	                                                _react2.default.createElement("i", { className: "fl square js-comparePieChartSquare", style: { background: "rgb(231, 113, 93)" } })
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                null,
	                                                _react2.default.createElement(
	                                                    "div",
	                                                    { className: "pr js-popupWrapper" },
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "pointer js-popupActivator" },
	                                                        "Christian"
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "panel pa dn tal pal font-size-xs open-sans js-popupBody" },
	                                                        "Hawaiian Native/Pacific Islander"
	                                                    )
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                { className: "tac open-sans_sb", style: { width: "40px" } },
	                                                "n/a"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "tr",
	                                            null,
	                                            _react2.default.createElement(
	                                                "td",
	                                                { style: { width: " 30px" } },
	                                                _react2.default.createElement("i", { className: "fl square js-comparePieChartSquare", style: { background: "rgb(239, 151, 91)" } })
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                null,
	                                                "Sikh"
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                { className: "tac open-sans_sb", style: { width: "40px" } },
	                                                "3%"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "tr",
	                                            null,
	                                            _react2.default.createElement(
	                                                "td",
	                                                { style: { width: " 30px" } },
	                                                _react2.default.createElement("i", { className: "fl square js-comparePieChartSquare", style: { background: "rgb(196, 214, 107)" } })
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                null,
	                                                "SC/ST"
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                { className: "tac open-sans_sb", style: { width: "40px" } },
	                                                "7%"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "tr",
	                                            null,
	                                            _react2.default.createElement(
	                                                "td",
	                                                { style: { width: " 30px" } },
	                                                _react2.default.createElement("i", { className: "fl square js-comparePieChartSquare", style: { background: "rgb(131, 109, 147)" } })
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                null,
	                                                "NRI"
	                                            ),
	                                            _react2.default.createElement(
	                                                "td",
	                                                { className: "tac open-sans_sb", style: { width: "40px" } },
	                                                "80%"
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    ),
	                    "              ",
	                    _react2.default.createElement(
	                        "div",
	                        null,
	                        _react2.default.createElement(
	                            "div",
	                            { className: "mtm mbm pts tac full-width header-bg-color pointer js-categoryTitle", style: { height: "42px", fontSize: " 16pt" } },
	                            "Reviews"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "js-reviewsCategoryData js-categoryData" },
	                            _react2.default.createElement(
	                                "div",
	                                { className: "ptm tac js-reviewSnapshot", style: { height: " 143px" } },
	                                _react2.default.createElement(
	                                    "div",
	                                    { className: "js-reviewStars", style: { height: " 61px" } },
	                                    _react2.default.createElement(
	                                        "div",
	                                        { className: "pts" },
	                                        _react2.default.createElement("span", { className: "iconx24-stars i-24-orange-star i-24-star-3" }),
	                                        _react2.default.createElement("span", { className: "iconx24-stars i-24-grey-star i-24-star-2" })
	                                    ),
	                                    _react2.default.createElement(
	                                        "div",
	                                        { className: "font-size-large" },
	                                        "3 stars"
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    "div",
	                                    null,
	                                    "Based on 9 ratings"
	                                ),
	                                _react2.default.createElement(
	                                    "div",
	                                    { className: "ptm pbl" },
	                                    _react2.default.createElement(
	                                        "a",
	                                        { href: "/missouri/moberly/1255-Moberly-Middle-School/reviews/" },
	                                        "18 reviews"
	                                    )
	                                )
	                            )
	                        )
	                    ),
	                    "              ",
	                    _react2.default.createElement(
	                        "div",
	                        { className: "ptl tac" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "pbm phl" },
	                            _react2.default.createElement(
	                                "button",
	                                { className: "btn btn-primary tac clearfix js-button-link", "data-link-value": "https://www.SchoolCounty.org/missouri/moberly/1255-Moberly-Middle-School/", style: { width: "80%" }, rel: "", "data-link-use-new-window": "" },
	                                _react2.default.createElement("span", { className: "vat  mrs" }),
	                                "View full profile"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "pbm phl" },
	                            _react2.default.createElement(
	                                "button",
	                                { className: "btn btn-default tal clearfix js-save-this-school-button", "data-link-value": "1255", style: { width: "80%" }, rel: "", "data-link-use-new-window": "" },
	                                _react2.default.createElement("span", { className: "vat iconx16 i-16-heart mrs" }),
	                                "Follow this school"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "pbm phl" },
	                            _react2.default.createElement(
	                                "button",
	                                { className: "btn btn-default tal clearfix js-button-link", "data-link-value": "https://www.zillow.com/MO-65270?cbpartner=Great+Schools&utm_source=SchoolCounty&utm_medium=referral&utm_campaign=schoolsearch", style: { width: "80%" }, rel: "nofollow", "data-link-use-new-window": "true" },
	                                _react2.default.createElement("span", { className: "vat iconx16 i-16-blue-home mrs" }),
	                                "Homes for sale"
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return CompareUnit;
	}(_react.Component);

	exports.default = CompareUnit;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CompareFilter = function (_Component) {
	    (0, _inherits3.default)(CompareFilter, _Component);

	    function CompareFilter() {
	        (0, _classCallCheck3.default)(this, CompareFilter);
	        return (0, _possibleConstructorReturn3.default)(this, (CompareFilter.__proto__ || (0, _getPrototypeOf2.default)(CompareFilter)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(CompareFilter, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "header",
	                { style: { padding: " 20px" } },
	                _react2.default.createElement(
	                    "h2",
	                    null,
	                    "Compare Schools"
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "actions", style: { float: " right" } },
	                    _react2.default.createElement(
	                        "a",
	                        { href: "listing.html", className: "filter", style: { cursor: " pointer", backgroundColor: "#9dc997", padding: ".6em 2em", marginLeft: "1.6em" } },
	                        "Reset"
	                    )
	                )
	            );
	        }
	    }]);
	    return CompareFilter;
	}(_react.Component);

	exports.default = CompareFilter;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(269);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(295);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(296);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(300);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(346);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(99);

	var _index = __webpack_require__(354);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(360);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SchoolDetails = function (_Component) {
	    (0, _inherits3.default)(SchoolDetails, _Component);

	    function SchoolDetails() {
	        (0, _classCallCheck3.default)(this, SchoolDetails);
	        return (0, _possibleConstructorReturn3.default)(this, (SchoolDetails.__proto__ || (0, _getPrototypeOf2.default)(SchoolDetails)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(SchoolDetails, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_index2.default, null),
	                _react2.default.createElement(
	                    'main',
	                    { style: { marginTop: '60px', marginBottom: '20px' } },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'school-profile' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'breadcrumbs' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'container' },
	                                _react2.default.createElement('span', null),
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: '/missouri/' },
	                                        'Karnataka'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    ' > '
	                                ),
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: '/missouri/moberly/' },
	                                        'Bangalore'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    ' > '
	                                ),
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: '/missouri/moberly/schools/' },
	                                        'Schools'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    ' > '
	                                ),
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    'School Profile'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'hero' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'container' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'school-name-container' },
	                                    _react2.default.createElement(
	                                        'h1',
	                                        { className: 'school-name' },
	                                        'Wisdom School'
	                                    ),
	                                    _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        _react2.default.createElement(
	                                            'span',
	                                            { className: 'osp-label' },
	                                            'Unclaimed'
	                                        ),
	                                        _react2.default.createElement(
	                                            'a',
	                                            { 'data-content-type': 'info_box', 'data-content-html': 'This school has not yet claimed its profile.<br /><br /> School leaders - <a href=\'/official-school-profile/register.page?city=Moberly&schoolId=1249&state=MO\'>claim your school\'s profile</a> to edit general information and share what makes your school unique. <a href=\'/gk/schools/\'>Learn more</a>.\n', className: 'gs-tipso info-circle tipso_style', 'data-ga-click-label': 'Unclaimed badge', href: 'javascript:void(0)', 'data-remodal-target': 'modal_info_box' },
	                                            _react2.default.createElement('span', { className: 'icon-question' })
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'school-contact' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'school-contact__item school-contact__address' },
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: '#Neighborhood', className: 'js-gaClick', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Hero links', 'data-ga-click-label': 'Neighborhood' },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'badge-and-content' },
	                                                _react2.default.createElement('span', { className: 'badge icon-location' }),
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    { className: 'content' },
	                                                    'Rajaji Nagar, bangalore-11'
	                                                )
	                                            )
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'school-contact__item school-contact__district-name' },
	                                        _react2.default.createElement(
	                                            'a',
	                                            { className: 'js-gaClick', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Hero links', 'data-ga-click-label': 'District', href: '/missouri/moberly/moberly-school-district/' },
	                                            'Bangalore District'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'school-contact__item school-contact__phone' },
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: 'tel:(660) 269-2660', className: 'js-gaClick', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Hero links', 'data-ga-click-label': 'Phone' },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'badge-and-content' },
	                                                _react2.default.createElement('span', { className: 'badge icon-phone' }),
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    { className: 'content' },
	                                                    '            (660) 269-2660'
	                                                )
	                                            )
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'school-contact__item school-contact__more' },
	                                        _react2.default.createElement(
	                                            'a',
	                                            { className: 'js-gaClick', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Hero links', 'data-ga-click-label': 'More Contact', href: '#Neighborhood' },
	                                            'More contact'
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'school-info' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'school-info__item school-info__gs-rating' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'gs-rating-with-label' },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'gs-rating-with-label__rating' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rs-gs-rating circle-rating--large-responsive circle-rating--5' },
	                                                    '5',
	                                                    _react2.default.createElement(
	                                                        'span',
	                                                        { className: 'rating-circle-small' },
	                                                        '/10'
	                                                    )
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'gs-rating-with-label__label' },
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    { className: 'coming-soon' },
	                                                    'Coming soon!'
	                                                ),
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    { className: 'info-circle' },
	                                                    _react2.default.createElement('span', { className: 'icon-question' })
	                                                ),
	                                                'SchoolCounty Rating'
	                                            )
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'school-info__item school-info__five-star-rating school-info-reviews-mobile', onclick: 'analyticsEvent(\'Profile\', \'Review CTA Clicked\',\'Hero stars\'); window.location.href=\'#Reviews\';' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'label' },
	                                            'Reviews'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'five-star-rating ' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'five-star-rating__number' },
	                                                '16'
	                                            ),
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'rs-five-star-rating five-star-rating__stars' },
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    { className: 'five-stars' },
	                                                    _react2.default.createElement('span', { className: 'icon-star filled-star' }),
	                                                    _react2.default.createElement('span', { className: 'icon-star filled-star' }),
	                                                    _react2.default.createElement('span', { className: 'icon-star empty-star' }),
	                                                    _react2.default.createElement('span', { className: 'icon-star empty-star' }),
	                                                    _react2.default.createElement('span', { className: 'icon-star empty-star' })
	                                                )
	                                            )
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'school-info__item' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'label' },
	                                            'Grades'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            null,
	                                            '9-12'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'school-info__item' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'label' },
	                                            'Students'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            null,
	                                            '722'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'school-info__item' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'label' },
	                                            'Type'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            null,
	                                            'Public'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'vertical-items js-toggle-target', style: { display: 'none' } },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'school-info__item-mobile' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'label' },
	                                                'Grades'
	                                            ),
	                                            _react2.default.createElement(
	                                                'span',
	                                                null,
	                                                '9-12'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'school-info__item-mobile' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'label' },
	                                                'Students'
	                                            ),
	                                            _react2.default.createElement(
	                                                'span',
	                                                null,
	                                                '722'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'school-info__item-mobile' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'label' },
	                                                'Type'
	                                            ),
	                                            _react2.default.createElement(
	                                                'span',
	                                                null,
	                                                'Public'
	                                            )
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: 'javascript:void(0);', className: 'see-more js-toggle-button' },
	                                        'Show more'
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'static-container' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'right_rail' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'schoollist', style: { marginTop: '10px', marginBottom: '10px' } },
	                                    _react2.default.createElement(
	                                        'h2',
	                                        { style: { fontWeight: 'bold', textAlign: 'center', backgroundColor: 'cornflowerblue', padding: '5px' } },
	                                        'Recommending/Related Schools'
	                                    ),
	                                    _react2.default.createElement(
	                                        'ul',
	                                        { className: 'images', style: { height: '700px', margin: '0', padding: '0', whiteSpace: 'nowrap', width: '100%', overflowY: 'auto' } },
	                                        _react2.default.createElement(
	                                            'li',
	                                            null,
	                                            ' style=',
	                                            { height: '100px', padding: '10px' },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--8' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/bucklin/289-Bucklin-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/bucklin/289-Bucklin-High-School/' },
	                                                        'Carmel High School'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Basaveshwaranagar'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--9' },
	                                                        '9',
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/prairie-home/1597-Prairie-Home-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/prairie-home/1597-Prairie-Home-High-School/' },
	                                                        'National Public School'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Koramangala'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--9' },
	                                                        '9',
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/hale/687-Hale-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/hale/687-Hale-High-School/' },
	                                                        'St. Germain High School'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            ' Fraser Town'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--8' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/bucklin/289-Bucklin-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/bucklin/289-Bucklin-High-School/' },
	                                                        'Kendriya Vidyalaya'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Malleswaram'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--8' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/bucklin/289-Bucklin-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/bucklin/289-Bucklin-High-School/' },
	                                                        'Bangalore Education Society'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Malleswaram'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--9' },
	                                                        '9',
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/prairie-home/1597-Prairie-Home-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/prairie-home/1597-Prairie-Home-High-School/' },
	                                                        'National Public School'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Indiranagar'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--8' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/bucklin/289-Bucklin-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/bucklin/289-Bucklin-High-School/' },
	                                                        'Notre Dame Academy'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Choodasandra'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--8' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/bucklin/289-Bucklin-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/bucklin/289-Bucklin-High-School/' },
	                                                        'St. Joseph\'s  College'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'JP Nagar'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--8' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/bucklin/289-Bucklin-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/bucklin/289-Bucklin-High-School/' },
	                                                        'Carmel High School'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Basaveshwaranagar'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--9' },
	                                                        '9',
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/prairie-home/1597-Prairie-Home-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/prairie-home/1597-Prairie-Home-High-School/' },
	                                                        'National Public School'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Koramangala'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--9' },
	                                                        '9',
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/hale/687-Hale-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/hale/687-Hale-High-School/' },
	                                                        'St. Germain High School'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            ' Fraser Town'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--8' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/bucklin/289-Bucklin-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/bucklin/289-Bucklin-High-School/' },
	                                                        'Kendriya Vidyalaya'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Malleswaram'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--8' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/bucklin/289-Bucklin-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/bucklin/289-Bucklin-High-School/' },
	                                                        'Bangalore Education Society'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Malleswaram'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--9' },
	                                                        '9',
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/prairie-home/1597-Prairie-Home-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/prairie-home/1597-Prairie-Home-High-School/' },
	                                                        'National Public School'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Indiranagar'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--8' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/bucklin/289-Bucklin-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/bucklin/289-Bucklin-High-School/' },
	                                                        'Notre Dame Academy'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Choodasandra'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--8' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/bucklin/289-Bucklin-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/bucklin/289-Bucklin-High-School/' },
	                                                        'St. Joseph\'s  College'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'JP Nagar'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--8' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/bucklin/289-Bucklin-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/bucklin/289-Bucklin-High-School/' },
	                                                        'Carmel High School'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Basaveshwaranagar'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--9' },
	                                                        '9',
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/prairie-home/1597-Prairie-Home-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/prairie-home/1597-Prairie-Home-High-School/' },
	                                                        'National Public School'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Koramangala'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--9' },
	                                                        '9',
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/hale/687-Hale-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/hale/687-Hale-High-School/' },
	                                                        'St. Germain High School'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            ' Fraser Town'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--8' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/bucklin/289-Bucklin-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/bucklin/289-Bucklin-High-School/' },
	                                                        'Kendriya Vidyalaya'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Malleswaram'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--8' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/bucklin/289-Bucklin-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/bucklin/289-Bucklin-High-School/' },
	                                                        'Bangalore Education Society'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Malleswaram'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--9' },
	                                                        '9',
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/prairie-home/1597-Prairie-Home-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/prairie-home/1597-Prairie-Home-High-School/' },
	                                                        'National Public School'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Indiranagar'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--8' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/bucklin/289-Bucklin-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/bucklin/289-Bucklin-High-School/' },
	                                                        'Notre Dame Academy'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Choodasandra'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { style: { height: '100px', padding: '10px' } },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'nearby-school' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'circle-rating circle-rating--small circle-rating--8' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'rating-circle-small' },
	                                                            '/10'
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'a',
	                                                        { className: 'js-gaClick', href: '/missouri/bucklin/289-Bucklin-High-School/', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'Nearest high-performing', 'data-ga-click-label': '/missouri/bucklin/289-Bucklin-High-School/' },
	                                                        'St. Joseph\'s  College'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'school-info' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'JP Nagar'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        null,
	                                                        'Bangalore,Karnataka'
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'content' },
	                                _react2.default.createElement(
	                                    'div',
	                                    null,
	                                    _react2.default.createElement(
	                                        'div',
	                                        { id: 'toc' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'toc-container-box' },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'row' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'col-xs-12 col-sm-4', id: 'academics-tour-anchor' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'toc-section-title' },
	                                                        'ACADEMICS\xA0',
	                                                        _react2.default.createElement('span', { className: 'icon-question' })
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'clearfix toc-entry' },
	                                                        _react2.default.createElement(
	                                                            'a',
	                                                            { href: '#Test_scores', className: 'js-gaClick', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'TOC Clicked', 'data-ga-click-label': 'Test scores' },
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                null,
	                                                                'Test scores'
	                                                            ),
	                                                            _react2.default.createElement('span', { className: 'icon-chevron-right' }),
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                { className: 'gs-rating circle-rating--5 circle-rating--xtra-small' },
	                                                                '5',
	                                                                _react2.default.createElement(
	                                                                    'span',
	                                                                    { className: 'denominator' },
	                                                                    '/10'
	                                                                )
	                                                            )
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'clearfix toc-entry' },
	                                                        _react2.default.createElement(
	                                                            'a',
	                                                            { href: '#College_readiness', className: 'js-gaClick', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'TOC Clicked', 'data-ga-click-label': 'College readiness' },
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                null,
	                                                                'College readiness'
	                                                            ),
	                                                            _react2.default.createElement('span', { className: 'icon-chevron-right' }),
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                { className: 'gs-rating circle-rating--5 circle-rating--xtra-small' },
	                                                                '5',
	                                                                _react2.default.createElement(
	                                                                    'span',
	                                                                    { className: 'denominator' },
	                                                                    '/10'
	                                                                )
	                                                            )
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'clearfix toc-entry' },
	                                                        _react2.default.createElement(
	                                                            'a',
	                                                            { href: '#Advanced_courses', className: 'js-gaClick', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'TOC Clicked', 'data-ga-click-label': 'Advanced courses' },
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                null,
	                                                                'Advanced courses'
	                                                            ),
	                                                            _react2.default.createElement('span', { className: 'icon-chevron-right' })
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'col-xs-12 col-sm-4', id: 'equity-tour-anchor' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'toc-section-title' },
	                                                        'EQUITY\xA0',
	                                                        _react2.default.createElement('span', { className: 'icon-question' })
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'clearfix toc-entry' },
	                                                        _react2.default.createElement(
	                                                            'a',
	                                                            { href: '#Race_ethnicity', className: 'js-gaClick', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'TOC Clicked', 'data-ga-click-label': 'Race/ethnicity' },
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                null,
	                                                                'Race/ethnicity'
	                                                            ),
	                                                            _react2.default.createElement('span', { className: 'icon-chevron-right' })
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'clearfix toc-entry' },
	                                                        _react2.default.createElement(
	                                                            'a',
	                                                            { href: '#Low-income_students', className: 'js-gaClick', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'TOC Clicked', 'data-ga-click-label': 'Low-income students' },
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                null,
	                                                                'Low-income students'
	                                                            ),
	                                                            _react2.default.createElement('span', { className: 'icon-chevron-right' }),
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                { className: 'gs-rating circle-rating--4 circle-rating--xtra-small' },
	                                                                '4',
	                                                                _react2.default.createElement(
	                                                                    'span',
	                                                                    { className: 'denominator' },
	                                                                    '/10'
	                                                                )
	                                                            )
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'clearfix toc-entry' },
	                                                        _react2.default.createElement(
	                                                            'a',
	                                                            { href: '#Students_with_Disabilities', className: 'js-gaClick', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'TOC Clicked', 'data-ga-click-label': 'Students with disabilities' },
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                null,
	                                                                'Students with disabilities'
	                                                            ),
	                                                            _react2.default.createElement('span', { className: 'icon-chevron-right' })
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'col-xs-12 col-sm-4', id: 'environment-tour-anchor' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'toc-section-title' },
	                                                        'ENVIRONMENT\xA0',
	                                                        _react2.default.createElement('span', { className: 'icon-question' })
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'clearfix toc-entry' },
	                                                        _react2.default.createElement(
	                                                            'a',
	                                                            { href: '#Students', className: 'js-gaClick', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'TOC Clicked', 'data-ga-click-label': 'Students' },
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                null,
	                                                                'Students'
	                                                            ),
	                                                            _react2.default.createElement('span', { className: 'icon-chevron-right' })
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'clearfix toc-entry' },
	                                                        _react2.default.createElement(
	                                                            'a',
	                                                            { href: '#Race_ethnicity*Discipline_and_attendance', className: 'js-gaClick', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'TOC Clicked', 'data-ga-click-label': 'Discipline & attendance' },
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                null,
	                                                                'Discipline & attendance'
	                                                            ),
	                                                            _react2.default.createElement('span', { className: 'icon-chevron-right' })
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'clearfix toc-entry' },
	                                                        _react2.default.createElement(
	                                                            'a',
	                                                            { href: '#Teachers_staff', className: 'js-gaClick', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'TOC Clicked', 'data-ga-click-label': 'Teachers & staff' },
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                null,
	                                                                'Teachers & staff'
	                                                            ),
	                                                            _react2.default.createElement('span', { className: 'icon-chevron-right' })
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'clearfix toc-entry' },
	                                                        _react2.default.createElement(
	                                                            'a',
	                                                            { href: '#Neighborhood', className: 'js-gaClick', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'TOC Clicked', 'data-ga-click-label': 'Neighborhood' },
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                null,
	                                                                'Neighborhood'
	                                                            ),
	                                                            _react2.default.createElement('span', { className: 'icon-chevron-right' })
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'js-Profiles_First2_Ad-wrapper hidden-print visible-xs visible-sm' },
	                                    _react2.default.createElement('div', { className: 'gs_ad_slot ad-slot tac', id: 'Profiles_First2_Ad', 'data-ad-size': '[300, 250]', 'data-dfp': 'Profiles_First', 'data-ad-setting': 'box_or_tall' }),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: '', width: '100%' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'advertisement-text ma dn' },
	                                            'ADVERTISEMENT'
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement('a', { className: 'anchor-mobile-offset', name: 'Academics' }),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'academics-container' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'row' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-xs-12 col-lg-3' },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'rating-container__title', style: { position: 'static', width: 'auto', top: '20px' } },
	                                                'Academics'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-xs-12 col-lg-9' },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { id: 'TestScores', className: 'rating-container rs-test-scores', 'data-ga-click-label': 'Test scores' },
	                                                _react2.default.createElement('a', { className: 'anchor-mobile-offset', name: 'Test_scores' }),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating-container__rating js-historical-module' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'module-header' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'row' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'col-xs-12 col-md-8' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'circle-rating--5 circle-rating--medium' },
	                                                                    '5',
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        { className: 'rating-circle-small' },
	                                                                        '/10'
	                                                                    )
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'title-container' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        null,
	                                                                        _react2.default.createElement(
	                                                                            'span',
	                                                                            { className: 'title' },
	                                                                            'Test scores'
	                                                                        ),
	                                                                        _react2.default.createElement('span', { className: 'icon-question' })
	                                                                    ),
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        null,
	                                                                        'Find out ',
	                                                                        _react2.default.createElement(
	                                                                            'a',
	                                                                            { href: '/gk/articles/state-standardized-test-scores-issues-to-consider/' },
	                                                                            'what state standardized test scores really tell you'
	                                                                        ),
	                                                                        ' about a school \u2013 and what they don\u2019t.'
	                                                                    )
	                                                                )
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'col-xs-12 col-md-4 show-history-button' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    null,
	                                                                    _react2.default.createElement(
	                                                                        'button',
	                                                                        { className: 'js-historical-button' },
	                                                                        _react2.default.createElement('span', { className: 'icon-clock' }),
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'dib' },
	                                                                            'Past ratings'
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'historical-ratings js-historical-target' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'title' },
	                                                            _react2.default.createElement(
	                                                                'h4',
	                                                                null,
	                                                                'Past SchoolCounty Test Score Ratings'
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'p',
	                                                                null,
	                                                                'This chart shows how this school\'s SchoolCounty Test Score Rating has changed over time.'
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'row panel' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'col-xs-12 col-md-5' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'header' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        null,
	                                                                        'Rating'
	                                                                    ),
	                                                                    'Year'
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'rating-row clearfix' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'gs-rating-inline circle-rating--xtra-small circle-rating--5' },
	                                                                        '5',
	                                                                        _react2.default.createElement(
	                                                                            'span',
	                                                                            { className: 'rating-circle-small' },
	                                                                            '/10'
	                                                                        )
	                                                                    ),
	                                                                    '2016'
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'rating-row clearfix' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'gs-rating-inline circle-rating--xtra-small circle-rating--5' },
	                                                                        '5',
	                                                                        _react2.default.createElement(
	                                                                            'span',
	                                                                            { className: 'rating-circle-small' },
	                                                                            '/10'
	                                                                        )
	                                                                    ),
	                                                                    '2015'
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'rating-row clearfix' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'gs-rating-inline circle-rating--xtra-small circle-rating--5' },
	                                                                        '5',
	                                                                        _react2.default.createElement(
	                                                                            'span',
	                                                                            { className: 'rating-circle-small' },
	                                                                            '/10'
	                                                                        )
	                                                                    ),
	                                                                    '2014'
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'rating-row clearfix' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'gs-rating-inline circle-rating--xtra-small circle-rating--6' },
	                                                                        '6',
	                                                                        _react2.default.createElement(
	                                                                            'span',
	                                                                            { className: 'rating-circle-small' },
	                                                                            '/10'
	                                                                        )
	                                                                    ),
	                                                                    '2013'
	                                                                )
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'col-xs-12 col-md-6 col-md-offset-1 text' },
	                                                                _react2.default.createElement(
	                                                                    'p',
	                                                                    { className: 'parent-tip' },
	                                                                    _react2.default.createElement('img', { src: '/assets/school_profiles/owl.png', alt: 'Owl' }),
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        { className: 'speech-bubble left' },
	                                                                        'Notes'
	                                                                    )
	                                                                ),
	                                                                'Ratings show a school\u2019s performance relative to other schools in the state. Ratings can change for a variety of reasons, including changes in assessments or changes in rating methodology. Because the underlying data and methodology can vary over time, comparing past ratings to current ones may not accurately reflect changes in the school\u2019s quality. If we are missing a rating year, it\u2019s most likely because we did not receive the underlying data from the state Department of Education for that year and so did not compute a rating.'
	                                                            )
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'panel' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'auto-narration' },
	                                                            _react2.default.createElement(
	                                                                'h3',
	                                                                { className: 'neutral' },
	                                                                'Worth a deeper look:'
	                                                            ),
	                                                            ' ',
	                                                            _react2.default.createElement(
	                                                                'p',
	                                                                null,
	                                                                'Test scores at this school are ',
	                                                                _react2.default.createElement(
	                                                                    'span',
	                                                                    { className: 'emphasis' },
	                                                                    'about the same as'
	                                                                ),
	                                                                ' the state average, though still below the top-performing schools in the state. Because test scores in some states are so low, many students at this school may not be performing at grade level. '
	                                                            ),
	                                                            ' ',
	                                                            _react2.default.createElement(
	                                                                'p',
	                                                                { className: 'parent-tip' },
	                                                                _react2.default.createElement('img', { src: '/assets/school_profiles/owl.png' }),
	                                                                _react2.default.createElement(
	                                                                    'span',
	                                                                    { className: 'speech-bubble left' },
	                                                                    'Parent tips'
	                                                                )
	                                                            ),
	                                                            ' ',
	                                                            _react2.default.createElement(
	                                                                'p',
	                                                                { className: 'footnote' },
	                                                                'Ask the school what it\u2019s doing to help students who are behind. Understand what ',
	                                                                _react2.default.createElement(
	                                                                    'a',
	                                                                    { href: '/gk/milestones/' },
	                                                                    'on-track learning looks like'
	                                                                ),
	                                                                ', and ask the school what it\u2019s doing to accelerate progress for students.'
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'row bar-graph-display' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'test-score-container clearfix' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'col-xs-12 col-sm-5 subject' },
	                                                                        'English'
	                                                                    ),
	                                                                    _react2.default.createElement('div', { className: 'col-sm-1' }),
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'col-xs-9 col-sm-4' },
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'bar-graph-container' },
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'score' },
	                                                                                '71%'
	                                                                            ),
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'viz' },
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'item-bar' },
	                                                                                    _react2.default.createElement(
	                                                                                        'div',
	                                                                                        { className: 'single-bar-viz' },
	                                                                                        _react2.default.createElement('div', { className: 'color-row rating_8', style: { width: '70.6%' } }),
	                                                                                        _react2.default.createElement('div', { className: 'grey-row', style: { width: '29.400000000000006%' } }),
	                                                                                        _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { className: 'arrow-up' },
	                                                                                            _react2.default.createElement('span', { style: { top: '11px', left: '66.3%' } })
	                                                                                        )
	                                                                                    )
	                                                                                ),
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'state-average' },
	                                                                                    'State avg: 66%'
	                                                                                )
	                                                                            )
	                                                                        )
	                                                                    ),
	                                                                    _react2.default.createElement('div', { className: 'col-xs-3 col-sm-2' })
	                                                                )
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            null,
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'row bar-graph-display' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'test-score-container clearfix' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'col-xs-12 col-sm-5 subject' },
	                                                                        'Government'
	                                                                    ),
	                                                                    _react2.default.createElement('div', { className: 'col-sm-1' }),
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'col-xs-9 col-sm-4' },
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'bar-graph-container' },
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'score' },
	                                                                                '58%'
	                                                                            ),
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'viz' },
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'item-bar' },
	                                                                                    _react2.default.createElement(
	                                                                                        'div',
	                                                                                        { className: 'single-bar-viz' },
	                                                                                        _react2.default.createElement('div', { className: 'color-row rating_6', style: { width: '58.20000000000001%' } }),
	                                                                                        _react2.default.createElement('div', { className: 'grey-row', style: { width: '41.79999999999999%' } }),
	                                                                                        _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { className: 'arrow-up' },
	                                                                                            _react2.default.createElement('span', { style: { top: '11px', left: '63.3%' } })
	                                                                                        )
	                                                                                    )
	                                                                                ),
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'state-average' },
	                                                                                    'State avg: 63%'
	                                                                                )
	                                                                            )
	                                                                        )
	                                                                    ),
	                                                                    _react2.default.createElement('div', { className: 'col-xs-3 col-sm-2' })
	                                                                )
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            null,
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'row bar-graph-display' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'test-score-container clearfix' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'col-xs-12 col-sm-5 subject' },
	                                                                        'English 2'
	                                                                    ),
	                                                                    _react2.default.createElement('div', { className: 'col-sm-1' }),
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'col-xs-9 col-sm-4' },
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'bar-graph-container' },
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'score' },
	                                                                                '73%'
	                                                                            ),
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'viz' },
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'item-bar' },
	                                                                                    _react2.default.createElement(
	                                                                                        'div',
	                                                                                        { className: 'single-bar-viz' },
	                                                                                        _react2.default.createElement('div', { className: 'color-row rating_8', style: { width: '73.1%' } }),
	                                                                                        _react2.default.createElement('div', { className: 'grey-row', style: { width: '26.900000000000006%' } }),
	                                                                                        _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { className: 'arrow-up' },
	                                                                                            _react2.default.createElement('span', { style: { top: '11px', left: '79.2%' } })
	                                                                                        )
	                                                                                    )
	                                                                                ),
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'state-average' },
	                                                                                    'State avg: 79%'
	                                                                                )
	                                                                            )
	                                                                        )
	                                                                    ),
	                                                                    _react2.default.createElement('div', { className: 'col-xs-3 col-sm-2' })
	                                                                )
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'rating-container__more-items' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'js-drawer show-more show-more--closed', 'data-ga-category': 'Profile', 'data-ga-label': 'Test Scores' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'show-more__items js-toggle-target' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        null,
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'row bar-graph-display' },
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'test-score-container clearfix' },
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'col-xs-12 col-sm-5 subject' },
	                                                                                    'Algebra I'
	                                                                                ),
	                                                                                _react2.default.createElement('div', { className: 'col-sm-1' }),
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'col-xs-9 col-sm-4' },
	                                                                                    _react2.default.createElement(
	                                                                                        'div',
	                                                                                        { className: 'bar-graph-container' },
	                                                                                        _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { className: 'score' },
	                                                                                            '40%'
	                                                                                        ),
	                                                                                        _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { className: 'viz' },
	                                                                                            _react2.default.createElement(
	                                                                                                'div',
	                                                                                                { className: 'item-bar' },
	                                                                                                _react2.default.createElement(
	                                                                                                    'div',
	                                                                                                    { className: 'single-bar-viz' },
	                                                                                                    _react2.default.createElement('div', { className: 'color-row rating_4', style: { width: '39.8%' } }),
	                                                                                                    _react2.default.createElement('div', { className: 'grey-row', style: { width: '60.2%' } }),
	                                                                                                    _react2.default.createElement(
	                                                                                                        'div',
	                                                                                                        { className: 'arrow-up' },
	                                                                                                        _react2.default.createElement('span', { style: { top: '11px', left: '65.8%' } })
	                                                                                                    )
	                                                                                                )
	                                                                                            ),
	                                                                                            _react2.default.createElement(
	                                                                                                'div',
	                                                                                                { className: 'state-average' },
	                                                                                                'State avg: 66%'
	                                                                                            )
	                                                                                        )
	                                                                                    )
	                                                                                ),
	                                                                                _react2.default.createElement('div', { className: 'col-xs-3 col-sm-2' })
	                                                                            )
	                                                                        )
	                                                                    ),
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        null,
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'row bar-graph-display' },
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'test-score-container clearfix' },
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'col-xs-12 col-sm-5 subject' },
	                                                                                    'Geometry'
	                                                                                ),
	                                                                                _react2.default.createElement('div', { className: 'col-sm-1' }),
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'col-xs-9 col-sm-4' },
	                                                                                    _react2.default.createElement(
	                                                                                        'div',
	                                                                                        { className: 'bar-graph-container' },
	                                                                                        _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { className: 'score' },
	                                                                                            '46%'
	                                                                                        ),
	                                                                                        _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { className: 'viz' },
	                                                                                            _react2.default.createElement(
	                                                                                                'div',
	                                                                                                { className: 'item-bar' },
	                                                                                                _react2.default.createElement(
	                                                                                                    'div',
	                                                                                                    { className: 'single-bar-viz' },
	                                                                                                    _react2.default.createElement('div', { className: 'color-row rating_5', style: { width: '46.2%' } }),
	                                                                                                    _react2.default.createElement('div', { className: 'grey-row', style: { width: '53.8%' } }),
	                                                                                                    _react2.default.createElement(
	                                                                                                        'div',
	                                                                                                        { className: 'arrow-up' },
	                                                                                                        _react2.default.createElement('span', { style: { top: '11px', left: '61.0%' } })
	                                                                                                    )
	                                                                                                )
	                                                                                            ),
	                                                                                            _react2.default.createElement(
	                                                                                                'div',
	                                                                                                { className: 'state-average' },
	                                                                                                'State avg: 61%'
	                                                                                            )
	                                                                                        )
	                                                                                    )
	                                                                                ),
	                                                                                _react2.default.createElement('div', { className: 'col-xs-3 col-sm-2' })
	                                                                            )
	                                                                        )
	                                                                    ),
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        null,
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'row bar-graph-display' },
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'test-score-container clearfix' },
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'col-xs-12 col-sm-5 subject' },
	                                                                                    'US History'
	                                                                                ),
	                                                                                _react2.default.createElement('div', { className: 'col-sm-1' }),
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'col-xs-9 col-sm-4' },
	                                                                                    _react2.default.createElement(
	                                                                                        'div',
	                                                                                        { className: 'bar-graph-container' },
	                                                                                        _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { className: 'score' },
	                                                                                            '70%'
	                                                                                        ),
	                                                                                        _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { className: 'viz' },
	                                                                                            _react2.default.createElement(
	                                                                                                'div',
	                                                                                                { className: 'item-bar' },
	                                                                                                _react2.default.createElement(
	                                                                                                    'div',
	                                                                                                    { className: 'single-bar-viz' },
	                                                                                                    _react2.default.createElement('div', { className: 'color-row rating_7', style: { width: '69.8%' } }),
	                                                                                                    _react2.default.createElement('div', { className: 'grey-row', style: { width: '30.200000000000003%' } }),
	                                                                                                    _react2.default.createElement(
	                                                                                                        'div',
	                                                                                                        { className: 'arrow-up' },
	                                                                                                        _react2.default.createElement('span', { style: { top: '11px', left: '49.4%' } })
	                                                                                                    )
	                                                                                                )
	                                                                                            ),
	                                                                                            _react2.default.createElement(
	                                                                                                'div',
	                                                                                                { className: 'state-average' },
	                                                                                                'State avg: 49%'
	                                                                                            )
	                                                                                        )
	                                                                                    )
	                                                                                ),
	                                                                                _react2.default.createElement('div', { className: 'col-xs-3 col-sm-2' })
	                                                                            )
	                                                                        )
	                                                                    ),
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        null,
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'row bar-graph-display' },
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'test-score-container clearfix' },
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'col-xs-12 col-sm-5 subject' },
	                                                                                    'Biology I'
	                                                                                ),
	                                                                                _react2.default.createElement('div', { className: 'col-sm-1' }),
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'col-xs-9 col-sm-4' },
	                                                                                    _react2.default.createElement(
	                                                                                        'div',
	                                                                                        { className: 'bar-graph-container' },
	                                                                                        _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { className: 'score' },
	                                                                                            '68%'
	                                                                                        ),
	                                                                                        _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { className: 'viz' },
	                                                                                            _react2.default.createElement(
	                                                                                                'div',
	                                                                                                { className: 'item-bar' },
	                                                                                                _react2.default.createElement(
	                                                                                                    'div',
	                                                                                                    { className: 'single-bar-viz' },
	                                                                                                    _react2.default.createElement('div', { className: 'color-row rating_7', style: { width: '68.4%' } }),
	                                                                                                    _react2.default.createElement('div', { className: 'grey-row', style: { width: '31.599999999999994%' } }),
	                                                                                                    _react2.default.createElement(
	                                                                                                        'div',
	                                                                                                        { className: 'arrow-up' },
	                                                                                                        _react2.default.createElement('span', { style: { top: '11px', left: '66.8%' } })
	                                                                                                    )
	                                                                                                )
	                                                                                            ),
	                                                                                            _react2.default.createElement(
	                                                                                                'div',
	                                                                                                { className: 'state-average' },
	                                                                                                'State avg: 67%'
	                                                                                            )
	                                                                                        )
	                                                                                    )
	                                                                                ),
	                                                                                _react2.default.createElement('div', { className: 'col-xs-3 col-sm-2' })
	                                                                            )
	                                                                        )
	                                                                    ),
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        null,
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'row bar-graph-display' },
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'test-score-container clearfix' },
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'col-xs-12 col-sm-5 subject' },
	                                                                                    'Algebra II'
	                                                                                ),
	                                                                                _react2.default.createElement('div', { className: 'col-sm-1' }),
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'col-xs-9 col-sm-4' },
	                                                                                    _react2.default.createElement(
	                                                                                        'div',
	                                                                                        { className: 'bar-graph-container' },
	                                                                                        _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { className: 'score' },
	                                                                                            '40%'
	                                                                                        ),
	                                                                                        _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { className: 'viz' },
	                                                                                            _react2.default.createElement(
	                                                                                                'div',
	                                                                                                { className: 'item-bar' },
	                                                                                                _react2.default.createElement(
	                                                                                                    'div',
	                                                                                                    { className: 'single-bar-viz' },
	                                                                                                    _react2.default.createElement('div', { className: 'color-row rating_4', style: { width: '39.5%' } }),
	                                                                                                    _react2.default.createElement('div', { className: 'grey-row', style: { width: '60.5%' } }),
	                                                                                                    _react2.default.createElement(
	                                                                                                        'div',
	                                                                                                        { className: 'arrow-up' },
	                                                                                                        _react2.default.createElement('span', { style: { top: '11px', left: '70.2%' } })
	                                                                                                    )
	                                                                                                )
	                                                                                            ),
	                                                                                            _react2.default.createElement(
	                                                                                                'div',
	                                                                                                { className: 'state-average' },
	                                                                                                'State avg: 70%'
	                                                                                            )
	                                                                                        )
	                                                                                    )
	                                                                                ),
	                                                                                _react2.default.createElement('div', { className: 'col-xs-3 col-sm-2' })
	                                                                            )
	                                                                        )
	                                                                    )
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'show-more__button js-toggle-button' },
	                                                                    'Show more Test scores'
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                'div',
	                                                { id: 'CollegeReadiness', className: 'rating-container rs-college-readiness', 'data-ga-click-label': 'College readiness' },
	                                                _react2.default.createElement('a', { className: 'anchor-mobile-offset', name: 'College_readiness' }),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating-container__rating js-historical-module' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'module-header' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'row' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'col-xs-12 col-md-12' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'circle-rating--5 circle-rating--medium' },
	                                                                    '5',
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        { className: 'rating-circle-small' },
	                                                                        '/10'
	                                                                    )
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'title-container' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        null,
	                                                                        _react2.default.createElement(
	                                                                            'span',
	                                                                            { className: 'title' },
	                                                                            'College readiness'
	                                                                        )
	                                                                    ),
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        null,
	                                                                        'Learn more about how to help your child graduate ready for college. ',
	                                                                        _react2.default.createElement(
	                                                                            'a',
	                                                                            { href: '/gk/articles/jump-start-college-planning/', target: '_blank' },
	                                                                            'See how.'
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'panel' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'auto-narration' },
	                                                            _react2.default.createElement(
	                                                                'h3',
	                                                                { className: 'neutral' },
	                                                                'Worth a deeper look:'
	                                                            ),
	                                                            ' ',
	                                                            _react2.default.createElement(
	                                                                'p',
	                                                                null,
	                                                                'This school is ',
	                                                                _react2.default.createElement(
	                                                                    'span',
	                                                                    { className: 'emphasis' },
	                                                                    'about the same as'
	                                                                ),
	                                                                ' the state average in key measures of college and career readiness, but depending on the state, average can mean only a minority of students are ready for college and career.'
	                                                            ),
	                                                            ' ',
	                                                            _react2.default.createElement(
	                                                                'p',
	                                                                null,
	                                                                '(Remember: ',
	                                                                _react2.default.createElement(
	                                                                    'span',
	                                                                    { className: 'emphasis' },
	                                                                    'high graduation rates don\'t mean much'
	                                                                ),
	                                                                ' if students are graduating without the coursework and test scores they need to succeed.)'
	                                                            ),
	                                                            '  ',
	                                                            _react2.default.createElement(
	                                                                'p',
	                                                                { className: 'parent-tip' },
	                                                                _react2.default.createElement('img', { src: '/assets/school_profiles/owl.png' }),
	                                                                _react2.default.createElement(
	                                                                    'span',
	                                                                    { className: 'speech-bubble left' },
	                                                                    'Parent tip'
	                                                                )
	                                                            ),
	                                                            ' ',
	                                                            _react2.default.createElement(
	                                                                'p',
	                                                                { className: 'footnote' },
	                                                                'Ask the school what it\u2019s doing to help all students succeed in advanced classes and prepare for ',
	                                                                _react2.default.createElement(
	                                                                    'a',
	                                                                    { href: '/gk/articles/improving-sat-scores/' },
	                                                                    'college entrance tests'
	                                                                ),
	                                                                '.'
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'row bar-graph-display' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'test-score-container clearfix' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'col-xs-12 col-sm-5 subject' },
	                                                                    '4-year high school graduation rate'
	                                                                ),
	                                                                _react2.default.createElement('div', { className: 'col-sm-1' }),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'col-xs-12 col-sm-6' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'bar-graph-container' },
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'score' },
	                                                                            '89%'
	                                                                        ),
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'person-bar-viz' },
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'person-progress' },
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'background' },
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' })
	                                                                                ),
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'foreground rating_color_9', style: { width: '89.33%' } },
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' })
	                                                                                )
	                                                                            ),
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'state-average', style: { paddingLeft: '0px' } },
	                                                                                'State avg: '
	                                                                            )
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'row bar-graph-display' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'test-score-container clearfix' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'col-xs-12 col-sm-5 subject' },
	                                                                    'Average ACT score'
	                                                                ),
	                                                                _react2.default.createElement('div', { className: 'col-sm-1' }),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'col-xs-12 col-sm-6' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'bar-graph-container' },
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'score' },
	                                                                            '20'
	                                                                        ),
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'viz' },
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'item-bar' },
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'single-bar-viz' },
	                                                                                    _react2.default.createElement('div', { className: 'color-row rating_6', style: { width: '54.57142857142857%' } }),
	                                                                                    _react2.default.createElement('div', { className: 'grey-row', style: { width: '45.42857142857143%' } })
	                                                                                )
	                                                                            )
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'row bar-graph-display' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'test-score-container clearfix' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'col-xs-12 col-sm-5 subject' },
	                                                                    'AP course participation'
	                                                                ),
	                                                                _react2.default.createElement('div', { className: 'col-sm-1' }),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'col-xs-12 col-sm-6' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'bar-graph-container' },
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'score' },
	                                                                            '17%'
	                                                                        ),
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'person-bar-viz' },
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'person-progress' },
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'background' },
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' })
	                                                                                ),
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'foreground rating_color_2', style: { width: '17.0%' } },
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' }),
	                                                                                    _react2.default.createElement('span', { className: 'icon-person' })
	                                                                                ),
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'arrow-up' },
	                                                                                    _react2.default.createElement('span', { style: { left: '11.72%', top: '1px' } })
	                                                                                )
	                                                                            ),
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'state-average', style: { paddingLeft: '0px' } },
	                                                                                'State avg: 12%'
	                                                                            )
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'rating-container__more-items' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'js-drawer show-more show-more--closed', 'data-ga-category': 'Profile', 'data-ga-label': 'College Readiness' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'show-more__items js-toggle-target' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'row bar-graph-display' },
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'test-score-container clearfix' },
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'col-xs-12 col-sm-5 subject' },
	                                                                                'Percentage of students passing 1 or more AP exams grades 9-12'
	                                                                            ),
	                                                                            _react2.default.createElement('div', { className: 'col-sm-1' }),
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'col-xs-12 col-sm-6' },
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'bar-graph-container' },
	                                                                                    _react2.default.createElement(
	                                                                                        'div',
	                                                                                        { className: 'score' },
	                                                                                        '<1%'
	                                                                                    ),
	                                                                                    _react2.default.createElement(
	                                                                                        'div',
	                                                                                        { className: 'viz' },
	                                                                                        _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { className: 'item-bar' },
	                                                                                            _react2.default.createElement(
	                                                                                                'div',
	                                                                                                { className: 'single-bar-viz' },
	                                                                                                _react2.default.createElement('div', { className: 'color-row rating_1', style: { width: '0.0%' } }),
	                                                                                                _react2.default.createElement('div', { className: 'grey-row', style: { width: '100.0%' } }),
	                                                                                                _react2.default.createElement(
	                                                                                                    'div',
	                                                                                                    { className: 'arrow-up' },
	                                                                                                    _react2.default.createElement('span', { style: { top: '11px', left: '65.79%' } })
	                                                                                                )
	                                                                                            )
	                                                                                        ),
	                                                                                        _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { className: 'state-average' },
	                                                                                            'State avg: 66%'
	                                                                                        )
	                                                                                    )
	                                                                                )
	                                                                            )
	                                                                        )
	                                                                    )
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'show-more__button js-toggle-button' },
	                                                                    'Show more College readiness'
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'environment-container' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'row' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-xs-12 col-lg-3' },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'rating-container__title', style: { position: 'static', width: 'auto' } },
	                                                'Environment'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-xs-12 col-lg-9' },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { style: { marginBottom: '40px' } },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { id: 'osp-school-info', className: 'rating-container' },
	                                                    _react2.default.createElement('a', { className: 'anchor-mobile-offset', name: 'General_info' }),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'rating-container__rating' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'module-header' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'circle-rating--equity-blue circle-rating--medium' },
	                                                                _react2.default.createElement('span', { className: 'icon-user' })
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'title-container' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'title' },
	                                                                    'General Information',
	                                                                    _react2.default.createElement(
	                                                                        'a',
	                                                                        { className: 'anchor-button', href: '/official-school-profile/register.page?city=Moberly&schoolId=1249&state=MO' },
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            null,
	                                                                            'Edit'
	                                                                        )
	                                                                    )
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'ptm' },
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        { className: 'no-data' },
	                                                                        'Here you can learn about this school\u2019s hours, enrollment, sports, classes and more. An administrator from this school will need to \u201Cclaim\u201D the profile to add this information.'
	                                                                    ),
	                                                                    _react2.default.createElement(
	                                                                        'ul',
	                                                                        { style: { padding: '20px' } },
	                                                                        _react2.default.createElement(
	                                                                            'li',
	                                                                            { className: 'no-data' },
	                                                                            'Are you an administrator at this school?',
	                                                                            _react2.default.createElement('br', null),
	                                                                            ' ',
	                                                                            _react2.default.createElement(
	                                                                                'a',
	                                                                                { href: '/official-school-profile/' },
	                                                                                'Claim your school\u2019s profile'
	                                                                            ),
	                                                                            ' to edit general information and share what makes your school unique.',
	                                                                            _react2.default.createElement('br', null),
	                                                                            ' ',
	                                                                            _react2.default.createElement(
	                                                                                'a',
	                                                                                { href: '/gk/schools/' },
	                                                                                'Learn more.'
	                                                                            ),
	                                                                            _react2.default.createElement('br', null),
	                                                                            _react2.default.createElement('br', null)
	                                                                        ),
	                                                                        _react2.default.createElement(
	                                                                            'li',
	                                                                            { className: 'no-data' },
	                                                                            'Are you a parent or student at this school?',
	                                                                            _react2.default.createElement('br', null),
	                                                                            ' ',
	                                                                            _react2.default.createElement(
	                                                                                'a',
	                                                                                { href: 'mailto:Avitt@Moberly.K12.Mo.Us?subject=Claim your school\u2019s profile on SchoolCounty.org!&body=Dear Mr. George Vitt,%0D%0A\n%0D%0A\nSchoolCounty.org offers school administrators like you the ability to \u201Cclaim\u201D your school\u2019s SchoolCounty profile page so you can add and edit information. It\u2019s a great way to help tell your school\u2019s story and ensure parents see robust and accurate information.%0D%0A\n%0D%0A\nGet started by claiming your school\u2019s profile page here: http%3A%2F%2Fwww.SchoolCounty.org%2Fofficial-school-profile%2Fregister.page%3Fcity%3DMoberly%26schoolId%3D1249%26state%3DMO%0D%0A\n%0D%0A\nThank you,%0D%0A\n(your name)\n' },
	                                                                                'Encourage school administrators'
	                                                                            ),
	                                                                            ' to claim this school\u2019s profile.'
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                )
	                                            ),
	                                            _react2.default.createElement('a', { className: 'anchor-mobile-offset', name: 'Students' }),
	                                            _react2.default.createElement(
	                                                'div',
	                                                { id: 'Students', className: 'students-container', 'data-ga-click-label': 'Students' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating-container__rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'module-header' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'circle-rating--equity-blue circle-rating--medium' },
	                                                            _react2.default.createElement('span', { className: 'icon-users' })
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'title-container' },
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                { className: 'title' },
	                                                                'Students'
	                                                            ),
	                                                            _react2.default.createElement('br', null),
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                null,
	                                                                'Studies show that diversity in school leads to long-term benefits for students. ',
	                                                                _react2.default.createElement(
	                                                                    'a',
	                                                                    { href: '/gk/articles/why-diversity-in-classrooms-matters/', target: '_blank' },
	                                                                    'Discover why!'
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'row' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'col-xs-12 col-sm-7' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { id: 'ethnicity-graph', 'data-highcharts-chart': '0' },
	                                                            _react2.default.createElement('div', { id: 'highcharts-0', className: 'highcharts-container ', style: { position: 'relative', overflow: 'hidden', width: '361px', height: '321px', textAlign: 'left', lineHeight: 'normal', zIndex: '0' } })
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'col-xs-12 col-sm-5' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'legend-separator js-highlightPieChart clearfix', 'data-slice-id': '0' },
	                                                            _react2.default.createElement('div', { className: 'legend-square', style: { float: 'left', backgroundColor: '#0f69c4' } }),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'legend-title', style: { float: 'left' } },
	                                                                'Hindu'
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'legend-title', style: { float: 'right' } },
	                                                                '85%'
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'legend-separator js-highlightPieChart clearfix', 'data-slice-id': '1' },
	                                                            _react2.default.createElement('div', { className: 'legend-square', style: { float: 'left', backgroundColor: '#2bdc99' } }),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'legend-title', style: { float: 'left' } },
	                                                                'Muslim'
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'legend-title', style: { float: 'right' } },
	                                                                '7%'
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'legend-separator js-highlightPieChart clearfix', 'data-slice-id': '2' },
	                                                            _react2.default.createElement('div', { className: 'legend-square', style: { float: 'left', backgroundColor: '#f1830f' } }),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'legend-title', style: { float: 'left' } },
	                                                                'Christian'
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'legend-title', style: { float: 'right' } },
	                                                                '5%'
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'legend-separator js-highlightPieChart clearfix', 'data-slice-id': '3' },
	                                                            _react2.default.createElement('div', { className: 'legend-square', style: { float: 'left', backgroundColor: '#f1e634' } }),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'legend-title', style: { float: 'left' } },
	                                                                'Sikh'
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'legend-title', style: { float: 'right' } },
	                                                                '2%'
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'legend-separator js-highlightPieChart clearfix', 'data-slice-id': '4' },
	                                                            _react2.default.createElement('div', { className: 'legend-square', style: { float: 'left', backgroundColor: '#6f2eb4' } }),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'legend-title', style: { float: 'left' } },
	                                                                'SC/ST '
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'legend-title', style: { float: 'right' } },
	                                                                '1%'
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'legend-separator js-highlightPieChart clearfix', 'data-slice-id': '5' },
	                                                            _react2.default.createElement('div', { className: 'legend-square', style: { float: 'left', backgroundColor: '#ef60d0' } }),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'legend-title', style: { float: 'left' } },
	                                                                'NRIs'
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'legend-title', style: { float: 'right' } },
	                                                                '<1%'
	                                                            )
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'subgroups' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'row' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'subgroup col-xs-6 col-sm-4 col-md-6 col-lg-4' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'title' },
	                                                                ' Students from low-income families '
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { id: 'students-participating-in-free-or-reduced-price-lunch-program', 'data-highcharts-chart': '1' },
	                                                                _react2.default.createElement('div', { id: 'highcharts-2', className: 'highcharts-container ', style: { position: 'relative', overflow: 'hidden', width: '206px', height: '140px', textAlign: 'left', lineHeight: 'normal', zIndex: '0' } })
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'subgroup col-xs-6 col-sm-4 col-md-6 col-lg-4' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'title gender' },
	                                                                'Gender'
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { id: 'gender', 'data-highcharts-chart': '2' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { id: 'highcharts-4', className: 'highcharts-container ', style: { position: 'relative', overflow: 'hidden', width: '205px', height: '175px', textAlign: 'left', lineHeight: 'normal', zIndex: '0' } },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'highcharts-data-labels highcharts-series-0 highcharts-pie-series highcharts-color-undefined ', style: { position: 'absolute', left: '5px', top: '10px', opacity: '1', visibility: 'visible' } },
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'highcharts-label highcharts-data-label highcharts-data-label-color-0 ', style: { position: 'absolute', left: '116px', top: '57px', opacity: '1', visibility: 'inherit' } },
	                                                                            _react2.default.createElement(
	                                                                                'span',
	                                                                                { style: { fontFamily: '&quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif', fontSize: '14px', position: 'absolute', whiteSpace: 'nowrap', color: 'black', marginLeft: '0px', marginTop: '0px', left: '5px', top: '5px' } },
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'open-sans' },
	                                                                                    '50%'
	                                                                                )
	                                                                            )
	                                                                        ),
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'highcharts-label highcharts-data-label highcharts-data-label-color-1 ', style: { position: 'absolute', left: '42px', top: '58px', opacity: '1', visibility: 'inherit' } },
	                                                                            _react2.default.createElement(
	                                                                                'span',
	                                                                                { style: { fontFamily: '&quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif', fontSize: '14px', position: 'absolute', whiteSpace: 'nowrap', color: 'black', marginLeft: '0px', marginTop: '0px', left: '5px', top: '5px' } },
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'open-sans' },
	                                                                                    '50%'
	                                                                                )
	                                                                            )
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'gender' },
	                                                    ' '
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                'div',
	                                                { id: 'TeachersStaff', className: 'teachers-staff', 'data-ga-click-label': 'Teachers and staff' },
	                                                _react2.default.createElement('a', { className: 'anchor-mobile-offset', name: 'Teachers_staff' }),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating-container__rating' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'module-header' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'circle-rating--equity-blue circle-rating--medium' },
	                                                            _react2.default.createElement('span', { className: 'icon-user' })
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'title-container' },
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                { className: 'title' },
	                                                                'Teachers & staff'
	                                                            ),
	                                                            _react2.default.createElement('br', null),
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                null,
	                                                                'Parents often value small class sizes, but the ',
	                                                                _react2.default.createElement(
	                                                                    'a',
	                                                                    { href: '/gk/articles/class-size/' },
	                                                                    'truth is more complicated'
	                                                                ),
	                                                                '.'
	                                                            )
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating-container__score-item' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'rating-score-item' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'row' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'col-xs-6 rating-score-item__label' },
	                                                                'Students per teacher',
	                                                                _react2.default.createElement(
	                                                                    'a',
	                                                                    { 'data-remodal-target': 'modal_info_box', 'data-content-type': 'info_box', 'data-content-html': 'The average number of students per full-time teacher at this school; please note that this is not a reflection of average class size.', className: 'gs-tipso info-circle tipso_style', href: 'javascript:void(0)' },
	                                                                    _react2.default.createElement('span', { className: 'icon-question' })
	                                                                )
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'col-xs-6' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'rating-score-item__score' },
	                                                                    '18',
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        { className: 'ratio-viz' },
	                                                                        ':1'
	                                                                    )
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'rating-score-item__state-average' },
	                                                                    'State avg: 14',
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        { className: 'ratio-viz-state-avg' },
	                                                                        ':1'
	                                                                    )
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating-container__score-item' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'rating-score-item' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'row' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'col-xs-6 rating-score-item__label' },
	                                                                'Students per counselor',
	                                                                _react2.default.createElement(
	                                                                    'a',
	                                                                    { 'data-remodal-target': 'modal_info_box', 'data-content-type': 'info_box', 'data-content-html': 'The average number of students per counselor at this school.', className: 'gs-tipso info-circle tipso_style', href: 'javascript:void(0)' },
	                                                                    _react2.default.createElement('span', { className: 'icon-question' })
	                                                                )
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'col-xs-6' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'rating-score-item__score' },
	                                                                    '364',
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        { className: 'ratio-viz' },
	                                                                        ':1'
	                                                                    )
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'rating-score-item__state-average' },
	                                                                    'State avg: 346',
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        { className: 'ratio-viz-state-avg' },
	                                                                        ':1'
	                                                                    )
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'row bar-graph-display' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'test-score-container clearfix' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'col-xs-12 col-sm-5 subject' },
	                                                            'Percent of teachers with 3 or more years experience',
	                                                            _react2.default.createElement(
	                                                                'a',
	                                                                { 'data-remodal-target': 'modal_info_box', 'data-content-type': 'info_box', 'data-content-html': 'The percentage of full-time teachers at this school who have been teaching for 3 or more years.', className: 'gs-tipso info-circle tipso_style', href: 'javascript:void(0)' },
	                                                                _react2.default.createElement('span', { className: 'icon-question' })
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement('div', { className: 'col-sm-1' }),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'col-xs-12 col-sm-6' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'bar-graph-container' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'score' },
	                                                                    '84%'
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'viz' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'item-bar' },
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'single-bar-viz' },
	                                                                            _react2.default.createElement('div', { className: 'color-row rating_9', style: { width: '84.15%' } }),
	                                                                            _react2.default.createElement('div', { className: 'grey-row', style: { width: '15.849999999999994%' } }),
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'arrow-up' },
	                                                                                _react2.default.createElement('span', { style: { top: '11px', left: '88.53%' } })
	                                                                            )
	                                                                        )
	                                                                    ),
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'state-average' },
	                                                                        'State avg: 89%'
	                                                                    )
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'rating-container__more-items' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'js-drawer show-more show-more--closed', 'data-ga-category': 'Profile', 'data-ga-label': 'Teachers Staff' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'show-more__items js-toggle-target' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'row bar-graph-display' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'test-score-container clearfix' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'col-xs-12 col-sm-5 subject' },
	                                                                        '% of full time teachers who are certified',
	                                                                        _react2.default.createElement(
	                                                                            'a',
	                                                                            { 'data-remodal-target': 'modal_info_box', 'data-content-type': 'info_box', 'data-content-html': 'The percentage of full-time teachers at this school who have met all applicable state standard teacher certification requirements.', className: 'gs-tipso info-circle tipso_style', href: 'javascript:void(0)' },
	                                                                            _react2.default.createElement('span', { className: 'icon-question' })
	                                                                        )
	                                                                    ),
	                                                                    _react2.default.createElement('div', { className: 'col-sm-1' }),
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'col-xs-12 col-sm-6' },
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'bar-graph-container' },
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'score' },
	                                                                                '100%'
	                                                                            ),
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'viz' },
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'item-bar' },
	                                                                                    _react2.default.createElement(
	                                                                                        'div',
	                                                                                        { className: 'single-bar-viz' },
	                                                                                        _react2.default.createElement('div', { className: 'color-row rating_10', style: { width: '100.0%' } }),
	                                                                                        _react2.default.createElement('div', { className: 'grey-row', style: { width: '0.0%' } }),
	                                                                                        _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { className: 'arrow-up' },
	                                                                                            _react2.default.createElement('span', { style: { top: '11px', left: '99.16%' } })
	                                                                                        )
	                                                                                    )
	                                                                                ),
	                                                                                _react2.default.createElement(
	                                                                                    'div',
	                                                                                    { className: 'state-average' },
	                                                                                    'State avg: 99%'
	                                                                                )
	                                                                            )
	                                                                        )
	                                                                    )
	                                                                )
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'rating-container__score-item' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'rating-score-item' },
	                                                                    _react2.default.createElement(
	                                                                        'div',
	                                                                        { className: 'row' },
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'col-xs-6 rating-score-item__label' },
	                                                                            'Average teacher salary',
	                                                                            _react2.default.createElement(
	                                                                                'a',
	                                                                                { 'data-remodal-target': 'modal_info_box', 'data-content-type': 'info_box', 'data-content-html': 'The average salary for full-time teachers at this school.', className: 'gs-tipso info-circle tipso_style', href: 'javascript:void(0)' },
	                                                                                _react2.default.createElement('span', { className: 'icon-question' })
	                                                                            )
	                                                                        ),
	                                                                        _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'col-xs-6' },
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'rating-score-item__score' },
	                                                                                '$60,936'
	                                                                            ),
	                                                                            _react2.default.createElement(
	                                                                                'div',
	                                                                                { className: 'rating-score-item__state-average' },
	                                                                                'State avg: $44,804'
	                                                                            )
	                                                                        )
	                                                                    )
	                                                                )
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'show-more__button js-toggle-button' },
	                                                            'Show more Teachers & staff'
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { id: 'ReviewSummary', className: 'review-summary rs-review-summary' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'review-sumary__info' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'number-of-reviews' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'count' },
	                                                '16'
	                                            ),
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'label' },
	                                                'Reviews'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'span',
	                                            { className: 'five-stars' },
	                                            _react2.default.createElement('span', { className: 'icon-star filled-star' }),
	                                            _react2.default.createElement('span', { className: 'icon-star filled-star' }),
	                                            _react2.default.createElement('span', { className: 'icon-star empty-star' }),
	                                            _react2.default.createElement('span', { className: 'icon-star empty-star' }),
	                                            _react2.default.createElement('span', { className: 'icon-star empty-star' })
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'n-out-of-5-stars' },
	                                            '2 out of 5 stars'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'review-summary__distribution', style: { color: 'grey' } },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'star-rating-bar-viz' },
	                                            _react2.default.createElement('span', { className: 'icon-star' }),
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'number-of-stars' },
	                                                '5'
	                                            ),
	                                            _react2.default.createElement('span', { className: 'bar rating_scale-5_5', style: { width: '17%' } }),
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'answer-count' },
	                                                '2'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'star-rating-bar-viz' },
	                                            _react2.default.createElement('span', { className: 'icon-star' }),
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'number-of-stars' },
	                                                '4'
	                                            ),
	                                            _react2.default.createElement('span', { className: 'bar rating_scale-5_4', style: { width: '17%' } }),
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'answer-count' },
	                                                '2'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'star-rating-bar-viz' },
	                                            _react2.default.createElement('span', { className: 'icon-star' }),
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'number-of-stars' },
	                                                '3'
	                                            ),
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'answer-count' },
	                                                '0'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'star-rating-bar-viz' },
	                                            _react2.default.createElement('span', { className: 'icon-star' }),
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'number-of-stars' },
	                                                '2'
	                                            ),
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'answer-count' },
	                                                '0'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'star-rating-bar-viz' },
	                                            _react2.default.createElement('span', { className: 'icon-star' }),
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'number-of-stars' },
	                                                '1'
	                                            ),
	                                            _react2.default.createElement('span', { className: 'bar rating_scale-5_1', style: { width: '51%' } }),
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'answer-count' },
	                                                '6'
	                                            )
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement('a', { className: 'anchor-mobile-offset', name: 'Topical_Review_Summary' }),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'topical-review' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'topical-review-summary' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'row' },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'col-xs-12 col-lg-3' },
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'topical-title' },
	                                                    'Topical reviews'
	                                                )
	                                            ),
	                                            _react2.default.createElement('div', { className: 'col-xs-12 col-lg-9' })
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { id: 'js-topical-review-distribution' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { 'data-reactroot': '', className: 'topical-review review-distribution' },
	                                            _react2.default.createElement(
	                                                'h4',
	                                                null,
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    { className: 'blue-highlight' },
	                                                    'Teachers'
	                                                ),
	                                                ' at this school are effective:'
	                                            ),
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'rating-bar-viz' },
	                                                _react2.default.createElement('span', { className: 'answer-icon topic-icon strongly-agree' }),
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    { className: 'title' },
	                                                    'Strongly agree'
	                                                ),
	                                                _react2.default.createElement('span', { className: 'bar rating_scale-5_5', style: { width: '26.6667%' } }),
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    { className: 'answer-count' },
	                                                    '2'
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'rating-bar-viz' },
	                                                _react2.default.createElement('span', { className: 'answer-icon topic-icon agree' }),
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    { className: 'title' },
	                                                    'Agree'
	                                                ),
	                                                _react2.default.createElement('span', { className: 'bar rating_scale-5_4', style: { width: '0.5%' } }),
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    { className: 'answer-count' },
	                                                    '0'
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'rating-bar-viz' },
	                                                _react2.default.createElement('span', { className: 'answer-icon topic-icon neutral' }),
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    { className: 'title' },
	                                                    'Neutral'
	                                                ),
	                                                _react2.default.createElement('span', { className: 'bar rating_scale-5_3', style: { width: '0.5%' } }),
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    { className: 'answer-count' },
	                                                    '0'
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'rating-bar-viz' },
	                                                _react2.default.createElement('span', { className: 'answer-icon topic-icon disagree' }),
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    { className: 'title' },
	                                                    'Disagree'
	                                                ),
	                                                _react2.default.createElement('span', { className: 'bar rating_scale-5_2', style: { width: '0.5%' } }),
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    { className: 'answer-count' },
	                                                    '0'
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'rating-bar-viz' },
	                                                _react2.default.createElement('span', { className: 'answer-icon topic-icon strongly-disagree' }),
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    { className: 'title' },
	                                                    'Strongly disagree'
	                                                ),
	                                                _react2.default.createElement('span', { className: 'bar rating_scale-5_1', style: { width: '0.5%' } }),
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    { className: 'answer-count' },
	                                                    '0'
	                                                )
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'static-container', id: 'Reviews', style: { marginTop: '30px' } },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'rating-container' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'row' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-xs-12 col-lg-3' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'rating-container__title' },
	                                            'Recent comments'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-xs-12 col-lg-9' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'review-list' },
	                                            _react2.default.createElement('div', null),
	                                            _react2.default.createElement(
	                                                'div',
	                                                null,
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'user-reviews-container' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'row' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'col-xs-12 col-sm-2 user-info-column' },
	                                                            _react2.default.createElement('div', { className: 'avatar icon-avatar-1' }),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'user-type' },
	                                                                'Parent'
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'col-xs-12 col-sm-10 review-list-column' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'five-star-review' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'header' },
	                                                                    'Overall experience'
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'answer' },
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        { className: 'five-stars' },
	                                                                        _react2.default.createElement('span', { className: 'icon-star filled-star' }),
	                                                                        _react2.default.createElement('span', { className: 'icon-star filled-star' }),
	                                                                        _react2.default.createElement('span', { className: 'icon-star filled-star' }),
	                                                                        _react2.default.createElement('span', { className: 'icon-star filled-star' }),
	                                                                        _react2.default.createElement('span', { className: 'icon-star filled-star' })
	                                                                    )
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'comment' },
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        null,
	                                                                        'My son has trouble "fitting in" at school but he has really blossomed at MHS! He loves his teachers and classes and is all-around very comfortable.'
	                                                                    )
	                                                                )
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'type-and-date' },
	                                                                'Submitted by a parent \xB7 September 02, 2015'
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'review-button-bar' },
	                                                                _react2.default.createElement(
	                                                                    'span',
	                                                                    { className: 'button' },
	                                                                    _react2.default.createElement('span', { className: 'icon-flag' }),
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        { className: 'hidden-xs-inline pls' },
	                                                                        'Report Review'
	                                                                    )
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'user-reviews-container' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'row' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'col-xs-12 col-sm-2 user-info-column' },
	                                                            _react2.default.createElement('div', { className: 'avatar icon-avatar-1' }),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'user-type' },
	                                                                'Parent'
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'col-xs-12 col-sm-10 review-list-column' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'five-star-review' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'header' },
	                                                                    'Overall experience'
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'answer' },
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        { className: 'five-stars' },
	                                                                        _react2.default.createElement('span', { className: 'icon-star filled-star' }),
	                                                                        _react2.default.createElement('span', { className: 'icon-star filled-star' }),
	                                                                        _react2.default.createElement('span', { className: 'icon-star filled-star' }),
	                                                                        _react2.default.createElement('span', { className: 'icon-star filled-star' }),
	                                                                        _react2.default.createElement('span', { className: 'icon-star filled-star' })
	                                                                    )
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'comment' },
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        null,
	                                                                        'Having graduated from Moberly just over 10 years ago I have to say I am proud of everything Moberly\'s schools have to offer.  It is very diverse yet there is a great opportunity for every kid to learn',
	                                                                        _react2.default.createElement(
	                                                                            'span',
	                                                                            null,
	                                                                            '... ',
	                                                                            _react2.default.createElement(
	                                                                                'a',
	                                                                                null,
	                                                                                'More'
	                                                                            )
	                                                                        )
	                                                                    )
	                                                                )
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'type-and-date' },
	                                                                'Submitted by a parent \xB7 September 02, 2015'
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'review-button-bar' },
	                                                                _react2.default.createElement(
	                                                                    'span',
	                                                                    { className: 'button' },
	                                                                    _react2.default.createElement('span', { className: 'icon-flag' }),
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        { className: 'hidden-xs-inline pls' },
	                                                                        'Report Review'
	                                                                    )
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'user-reviews-container' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'row' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'col-xs-12 col-sm-2 user-info-column' },
	                                                            _react2.default.createElement('div', { className: 'avatar icon-avatar-2' }),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'user-type' },
	                                                                'Student'
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'col-xs-12 col-sm-10 review-list-column' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'five-star-review' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'header' },
	                                                                    'Overall experience'
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'answer' },
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        { className: 'five-stars' },
	                                                                        _react2.default.createElement('span', { className: 'icon-star filled-star' }),
	                                                                        _react2.default.createElement('span', { className: 'icon-star empty-star' }),
	                                                                        _react2.default.createElement('span', { className: 'icon-star empty-star' }),
	                                                                        _react2.default.createElement('span', { className: 'icon-star empty-star' }),
	                                                                        _react2.default.createElement('span', { className: 'icon-star empty-star' })
	                                                                    )
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'comment' },
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        null,
	                                                                        'I did not get my review put in, so I will try again I go to Moberly High School and it is not a fair school unless you are the kids of the coaches or principals then you are on top of the list, our club',
	                                                                        _react2.default.createElement(
	                                                                            'span',
	                                                                            null,
	                                                                            '... ',
	                                                                            _react2.default.createElement(
	                                                                                'a',
	                                                                                { href: 'javascript:void(0);' },
	                                                                                'More'
	                                                                            )
	                                                                        )
	                                                                    )
	                                                                )
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'type-and-date' },
	                                                                'Submitted by a student \xB7January 28, 2013'
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'review-button-bar' },
	                                                                _react2.default.createElement(
	                                                                    'span',
	                                                                    { className: 'button' },
	                                                                    _react2.default.createElement('span', { className: 'icon-flag' }),
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        { className: 'hidden-xs-inline pls' },
	                                                                        'Report Review'
	                                                                    )
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'user-reviews-container' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'row' },
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'col-xs-12 col-sm-2 user-info-column' },
	                                                            _react2.default.createElement('div', { className: 'avatar icon-avatar-2' }),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'user-type' },
	                                                                'Student'
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'col-xs-12 col-sm-10 review-list-column' },
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'five-star-review' },
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'header' },
	                                                                    'Overall experience'
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'answer' },
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        { className: 'five-stars' },
	                                                                        _react2.default.createElement('span', { className: 'icon-star filled-star' }),
	                                                                        _react2.default.createElement('span', { className: 'icon-star empty-star' }),
	                                                                        _react2.default.createElement('span', { className: 'icon-star empty-star' }),
	                                                                        _react2.default.createElement('span', { className: 'icon-star empty-star' }),
	                                                                        _react2.default.createElement('span', { className: 'icon-star empty-star' })
	                                                                    )
	                                                                ),
	                                                                _react2.default.createElement(
	                                                                    'div',
	                                                                    { className: 'comment' },
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        null,
	                                                                        'I am currently a student at Moberly High School, I would not recommend that anyone go here unless they have to, I could easily compare it to what I could imagine prison being like. The place is constantly',
	                                                                        _react2.default.createElement(
	                                                                            'span',
	                                                                            null,
	                                                                            '... ',
	                                                                            _react2.default.createElement(
	                                                                                'a',
	                                                                                { href: 'javascript:void(0);' },
	                                                                                'More'
	                                                                            )
	                                                                        )
	                                                                    )
	                                                                )
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'type-and-date' },
	                                                                'Submitted by a student \xB7 June 10, 2012'
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'div',
	                                                                { className: 'review-button-bar' },
	                                                                _react2.default.createElement(
	                                                                    'span',
	                                                                    { className: 'button' },
	                                                                    _react2.default.createElement('span', { className: 'icon-flag' }),
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        { className: 'hidden-xs-inline pls' },
	                                                                        'Report Review'
	                                                                    )
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'show-more__button' },
	                                                'Show more'
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(_index4.default, null)
	            );
	        }
	    }]);
	    return SchoolDetails;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)()(SchoolDetails);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configure;

	var _redux = __webpack_require__(108);

	var _middleware = __webpack_require__(406);

	var _reducers = __webpack_require__(408);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configure(initialState) {
	  var create = window.devToolsExtension ? window.devToolsExtension()(_redux.createStore) : _redux.createStore;

	  var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_middleware.logger)(create);

	  var store = createStoreWithMiddleware(_reducers2.default, initialState);

	  if (false) {
	    module.hot.accept('../reducers', function () {
	      var nextReducer = require('../reducers');
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.logger = undefined;

	var _logger = __webpack_require__(407);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.logger = _logger2.default;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (store) {
	  return function (next) {
	    return function (action) {
	      console.log(action);
	      return next(action);
	    };
	  };
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "logger.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouterRedux = __webpack_require__(94);

	var _redux = __webpack_require__(108);

	var _schools = __webpack_require__(409);

	var _schools2 = _interopRequireDefault(_schools);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	  routing: _reactRouterRedux.routerReducer,
	  schools: _schools2.default
	});

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(410);

	var _extends3 = _interopRequireDefault(_extends2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
	    schoolList: {
	        fetching: false,
	        fetched: false,
	        error: false,
	        list: []
	    },
	    schoolFilter: {
	        fetching: false,
	        fetched: false,
	        error: false,
	        level: [],
	        typeOfSchool: [],
	        typesOfSyllabus: []
	    },
	    schoolUnit: {
	        fetching: false,
	        fetched: false,
	        error: false,
	        nameAdd: [],
	        rating: [],
	        facilities: [],
	        activities: [],
	        diversity: []
	    }

	};

	var schools = function schools() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments[1];

	    switch (action.type) {
	        case 'GET_SCHOOLS_SUCCESS':
	            return (0, _extends3.default)({}, state, {
	                schoolList: {
	                    fetched: true,
	                    list: action.payload
	                }
	            });

	        case 'GET_FILTER_PARAMS_SUCCESS':
	            return (0, _extends3.default)({}, state, {
	                schoolFilter: {
	                    fetched: true,
	                    level: action.payload.levelOfEducation,
	                    typeOfSchool: action.payload.type,
	                    typesOfSyllabus: action.payload.syllabus
	                }
	            });

	        case 'GET_COMPARESCHOOLUNIT_SUCCESS':
	            return (0, _extends3.default)({}, state, {
	                schoolUnit: {
	                    fetched: true,
	                    schoolList: action.payload
	                }
	            });

	        default:
	            return state;
	    }
	};

	exports.default = schools;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/var/www/schoolcounty/schoolcounty/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "schools.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(411);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(412), __esModule: true };

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(413);
	module.exports = __webpack_require__(282).Object.assign;


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(281);

	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(414) });


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(314);
	var gOPS = __webpack_require__(337);
	var pIE = __webpack_require__(338);
	var toObject = __webpack_require__(272);
	var IObject = __webpack_require__(317);
	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(291)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ })
]);