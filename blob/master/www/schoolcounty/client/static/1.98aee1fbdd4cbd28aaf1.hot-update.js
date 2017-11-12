webpackHotUpdate(1,{

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
	            var schoolFilter = state.schoolFilter;
	
	            (0, _extends3.default)({}, schoolFilter.states, {
	                fetched: true,
	                list: action.payload.states
	            });
	            state.schoolFilter = schoolFilter;
	            return state;
	
	        case 'GET_FILTER_LEVELS_SUCCESS':
	            (0, _extends3.default)({}, schoolFilter.states, {
	                fetched: true,
	                list: action.payload.states
	            });
	            state.schoolFilter = schoolFilter;
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

/***/ })

})
//# sourceMappingURL=1.98aee1fbdd4cbd28aaf1.hot-update.js.map