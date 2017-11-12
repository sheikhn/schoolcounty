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
	
	var _schools = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./schools\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _schools2 = _interopRequireDefault(_schools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _redux.combineReducers)({
	  routing: _reactRouterRedux.routerReducer,
	  schools: _schools2.default
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ../~/react-hot-loader/makeExportsHot.js */ 380); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 1)(module)))

/***/ })

})
//# sourceMappingURL=1.cfa31e4d5086763100c5.hot-update.js.map