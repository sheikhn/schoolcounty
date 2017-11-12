webpackHotUpdate(1,{

/***/ 463:
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ../~/react-hot-api/modules/index.js */ 2), RootInstanceProvider = __webpack_require__(/*! ../~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 12), React = __webpack_require__(/*! react */ 103); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 167);
	
	var _redux = __webpack_require__(/*! redux */ 180);
	
	var _schools = __webpack_require__(/*! ./schools */ 464);
	
	var _schools2 = _interopRequireDefault(_schools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _redux.combineReducers)({
	  routing: _reactRouterRedux.routerReducer,
	  schools: _schools2.default
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ../~/react-hot-loader/makeExportsHot.js */ 380); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 1)(module)))

/***/ }),

/***/ 464:
/*!*****************************!*\
  !*** ./reducers/schools.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ../~/react-hot-api/modules/index.js */ 2), RootInstanceProvider = __webpack_require__(/*! ../~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 12), React = __webpack_require__(/*! react */ 103); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 465);
	
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
	        level: {
	            fetching: false,
	            fetched: false,
	            error: false
	        },
	        typeOfSchool: {
	            fetching: false,
	            fetched: false,
	            error: false
	        },
	        typesOfSyllabus: {
	            fetching: false,
	            fetched: false,
	            error: false
	        },
	        states: {
	            fetching: false,
	            fetched: false,
	            error: false
	        }
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
	    },
	    schoolDetail: {
	        fetching: false,
	        fetched: false,
	        error: false,
	        schoolDetail: []
	
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
	
	        case 'GET_FILTER_STATES_SUCCESS':
	            var schoolFilter1 = state.schoolFilter;
	            schoolFilter1.states = {
	                fetched: true,
	                list: action.payload
	            };
	
	            (0, _extends3.default)({}, state, {
	                schoolFilter: schoolFilter1
	            });
	
	            state.schoolFilter = schoolFilter1;
	            console.log('state', state);
	            return state;
	
	        case 'GET_FILTER_LEVELS_SUCCESS':
	            var schoolFilter2 = state.schoolFilter;
	            (0, _extends3.default)(schoolFilter2.level, {
	                fetched: true,
	                list: action.payload
	            });
	            state.schoolFilter = schoolFilter2;
	            console.log('state', state);
	            return state;
	
	        case 'GET_COMPARESCHOOLUNIT_SUCCESS':
	            return (0, _extends3.default)({}, state, {
	                schoolUnit: {
	                    fetched: true,
	                    schoolList: action.payload
	                }
	            });
	
	        case 'GET_COMPARESCHOOLDETAIL_SUCCESS':
	            return (0, _extends3.default)({}, state, {
	                schoolDetail: {
	                    fetched: true,
	                    schoolDetail: action.payload
	                }
	            });
	
	        default:
	            return state;
	    }
	};
	
	exports.default = schools;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ../~/react-hot-loader/makeExportsHot.js */ 380); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "schools.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 1)(module)))

/***/ }),

/***/ 465:
/*!*********************************************!*\
  !*** ../~/babel-runtime/helpers/extends.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(/*! ../core-js/object/assign */ 466);
	
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

/***/ 466:
/*!***************************************************!*\
  !*** ../~/babel-runtime/core-js/object/assign.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ 467), __esModule: true };

/***/ }),

/***/ 467:
/*!************************************************!*\
  !*** ../~/core-js/library/fn/object/assign.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.assign */ 468);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 305).Object.assign;


/***/ }),

/***/ 468:
/*!*********************************************************!*\
  !*** ../~/core-js/library/modules/es6.object.assign.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(/*! ./_export */ 304);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ 469) });


/***/ }),

/***/ 469:
/*!******************************************************!*\
  !*** ../~/core-js/library/modules/_object-assign.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(/*! ./_object-keys */ 337);
	var gOPS = __webpack_require__(/*! ./_object-gops */ 360);
	var pIE = __webpack_require__(/*! ./_object-pie */ 361);
	var toObject = __webpack_require__(/*! ./_to-object */ 295);
	var IObject = __webpack_require__(/*! ./_iobject */ 340);
	var $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(/*! ./_fails */ 314)(function () {
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

})
//# sourceMappingURL=1.37d5ea197e7416e7fbe5.hot-update.js.map