webpackHotUpdate(1,{

/***/ 398:
/*!*************************************!*\
  !*** ./containers/Listing/index.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ../~/react-hot-api/modules/index.js */ 2), RootInstanceProvider = __webpack_require__(/*! ../~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 12), React = __webpack_require__(/*! react */ 103); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 292);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 318);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 319);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 323);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 369);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(/*! react */ 103);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(/*! redux */ 180);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 172);
	
	var _Header = __webpack_require__(/*! ../../components/Header */ 377);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(/*! ../../components/Footer */ 386);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _googleMapReact = __webpack_require__(/*! google-map-react */ 399);
	
	var _googleMapReact2 = _interopRequireDefault(_googleMapReact);
	
	var _index = __webpack_require__(/*! ../../components/Listingpage/index */ 422);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _Filter = __webpack_require__(/*! ../../components/Listingpage/Filter */ 424);
	
	var _Filter2 = _interopRequireDefault(_Filter);
	
	var _schools = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../actions/schools\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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
	      console.log('filter');
	      this.props.getFilterStates();
	      this.props.getFilterLevels();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      console.log('qwe', this.props.schools);
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
	                  api: 'AIzaSyB-GPNJUs1UB3t-rQ8dQAd7BNAyDBYOCXQ',
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
	      dispatch((0, _schools.getSchoolsList)());
	    },
	    getFilterStates: function getFilterStates() {
	      dispatch((0, _schools.getFilterStates)());
	    },
	    getFilterLevels: function getFilterLevels() {
	      dispatch((0, _schools.getFilterLevels)());
	    }
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Listing);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ../~/react-hot-loader/makeExportsHot.js */ 380); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ }),

/***/ 453:
/*!*******************************************!*\
  !*** ./containers/SchoolCompare/index.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ../~/react-hot-api/modules/index.js */ 2), RootInstanceProvider = __webpack_require__(/*! ../~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 12), React = __webpack_require__(/*! react */ 103); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 292);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 318);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 319);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 323);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 369);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(/*! react */ 103);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(/*! redux */ 180);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 172);
	
	var _Header = __webpack_require__(/*! ../../components/Header */ 377);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(/*! ../../components/Footer */ 386);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _index = __webpack_require__(/*! ../../components/Comparepage/index */ 454);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _schools = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../actions/schools\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ../~/react-hot-loader/makeExportsHot.js */ 380); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ }),

/***/ 454:
/*!*****************************************!*\
  !*** ./components/Comparepage/index.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ../~/react-hot-api/modules/index.js */ 2), RootInstanceProvider = __webpack_require__(/*! ../~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 12), React = __webpack_require__(/*! react */ 103); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 292);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 318);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 319);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 323);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 369);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(/*! react */ 103);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(/*! ./CompareUnit/index */ 455);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(/*! ./CompareFilter/index */ 456);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _schools = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../actions/schools\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ../~/react-hot-loader/makeExportsHot.js */ 380); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ }),

/***/ 458:
/*!*************************************!*\
  !*** ./components/Details/index.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ../~/react-hot-api/modules/index.js */ 2), RootInstanceProvider = __webpack_require__(/*! ../~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 12), React = __webpack_require__(/*! react */ 103); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 292);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 318);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 319);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 323);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 369);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(/*! react */ 103);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 172);
	
	var _schools = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../actions/schools\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var SchoolDetailsAction = _interopRequireWildcard(_schools);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Details = function (_Component) {
	    (0, _inherits3.default)(Details, _Component);
	
	    function Details(props) {
	        (0, _classCallCheck3.default)(this, Details);
	        return (0, _possibleConstructorReturn3.default)(this, (Details.__proto__ || (0, _getPrototypeOf2.default)(Details)).call(this, props));
	    }
	
	    (0, _createClass3.default)(Details, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.props.getSchoolDetails();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                todos = _props.todos,
	                actions = _props.actions,
	                children = _props.children,
	                schoolDetail = _props.schoolDetail;
	
	            if (!schoolDetail.fetched) {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    'no data'
	                );
	            }
	
	            var _schoolDetail$schoolD = schoolDetail.schoolDetail,
	                schoolData = _schoolDetail$schoolD.schoolData,
	                schoolCountyRating = _schoolDetail$schoolD.schoolCountyRating,
	                schoolFacilities = _schoolDetail$schoolD.schoolFacilities;
	
	
	            return _react2.default.createElement(
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
	                                    schoolData.name
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
	                                        { 'data-content-type': 'info_box', 'data-content-html': 'This school has not yet claimed its profile.<br /><br /> School leaders - <a href=\'/official-school-profile/register.page?city=Moberly&schoolId=1249&state=MO\'>claim your school\'s profile</a> to edit general information and share what makes your school unique. <a href=\'/gk/schools/\'>Learn more</a>.\n', className: 'gs-tipso info-circle tipso_style', 'data-ga-click-label': 'Unclaimed badge', 'data-remodal-target': 'modal_info_box' },
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
	                                                schoolData.address
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
	                                        schoolData.district,
	                                        ' District'
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
	                                                '            ',
	                                                schoolData.phonenumber
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
	                                                schoolData.schoolscountyrating,
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
	                                    { className: 'school-info__item school-info__five-star-rating school-info-reviews-mobile' },
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
	                                            schoolData.reviews
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
	                                        schoolData.grades
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
	                                        schoolData.students
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
	                                        schoolData.type
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
	                                            schoolData.grades
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
	                                            schoolData.students
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
	                                            schoolData.type
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
	                                    { style: { fontSize: '100%', fontWeight: 'bold', textAlign: 'center', backgroundColor: 'cornflowerblue', padding: '5px' } },
	                                    'Recommending/Related Schools'
	                                ),
	                                _react2.default.createElement(
	                                    'ul',
	                                    { className: 'images', style: { height: '700px', margin: '0', padding: '0', whiteSpace: 'nowrap', width: '100%', overflowY: 'auto' } },
	                                    _react2.default.createElement(
	                                        'li',
	                                        { style: { height: '100px', padding: '10px' } },
	                                        ' ',
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
	                                                            schoolData.testscore,
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
	                                                            schoolData.collegescore,
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
	                                                        _react2.default.createElement('span', { className: 'icon-chevron-right' }),
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'gs-rating circle-rating--5 circle-rating--xtra-small' },
	                                                            schoolData.advancescore,
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                { className: 'denominator' },
	                                                                '/10'
	                                                            )
	                                                        )
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
	                                                            'Attendance'
	                                                        ),
	                                                        _react2.default.createElement('span', { className: 'icon-chevron-right' }),
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'gs-rating circle-rating--5 circle-rating--xtra-small' },
	                                                            schoolData.attendancescore,
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
	                                                            schoolData.lowincscore,
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
	                                                            'Disabled Students'
	                                                        ),
	                                                        _react2.default.createElement('span', { className: 'icon-chevron-right' }),
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'gs-rating circle-rating--5 circle-rating--xtra-small' },
	                                                            schoolData.disabilitiesscore,
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                { className: 'denominator' },
	                                                                '/10'
	                                                            )
	                                                        )
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
	                                                        _react2.default.createElement('span', { className: 'icon-chevron-right' }),
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'gs-rating circle-rating--5 circle-rating--xtra-small' },
	                                                            schoolData.studentscore,
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
	                                                        { href: '#Race_ethnicity*Discipline_and_attendance', className: 'js-gaClick', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'TOC Clicked', 'data-ga-click-label': 'Discipline & attendance' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Discipline'
	                                                        ),
	                                                        _react2.default.createElement('span', { className: 'icon-chevron-right' }),
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'gs-rating circle-rating--5 circle-rating--xtra-small' },
	                                                            schoolData.disciplinescore,
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
	                                                        { href: '#Teachers_staff', className: 'js-gaClick', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'TOC Clicked', 'data-ga-click-label': 'Teachers & staff' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Teachers & staff'
	                                                        ),
	                                                        _react2.default.createElement('span', { className: 'icon-chevron-right' }),
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'gs-rating circle-rating--5 circle-rating--xtra-small' },
	                                                            schoolData.teacherscore,
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
	                                                        { href: '#Neighborhood', className: 'js-gaClick', 'data-ga-click-category': 'Profile', 'data-ga-click-action': 'TOC Clicked', 'data-ga-click-label': 'Neighborhood' },
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            null,
	                                                            'Neighborhood'
	                                                        ),
	                                                        _react2.default.createElement('span', { className: 'icon-chevron-right' }),
	                                                        _react2.default.createElement(
	                                                            'span',
	                                                            { className: 'gs-rating circle-rating--5 circle-rating--xtra-small' },
	                                                            schoolData.neighborscore,
	                                                            _react2.default.createElement(
	                                                                'span',
	                                                                { className: 'denominator' },
	                                                                '/10'
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
	                                                                schoolData.testscore,
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
	                                                                    schoolData.y16score,
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
	                                                                    schoolData.y15score,
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
	                                                                    schoolData.y14score,
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
	                                                                    schoolData.y13score,
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
	                                                                            schoolData.engscore,
	                                                                            '%'
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
	                                                                                'State avg: ',
	                                                                                schoolData.avgengscore,
	                                                                                '%'
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
	                                                                            schoolData.govscore,
	                                                                            '%'
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
	                                                                                'State avg: ',
	                                                                                schoolData.avggovscore,
	                                                                                '%'
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
	                                                                            schoolData.eng2score,
	                                                                            '%'
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
	                                                                                'State avg: ',
	                                                                                schoolData.avgeng2score,
	                                                                                '%'
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
	                                                                schoolData.readinessscore,
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
	                                                                        schoolData.graduationscore,
	                                                                        '%'
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
	                                                                            'State avg: ',
	                                                                            schoolData.avggraduationscore
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
	                                                                        schoolData.avgactscore
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
	                                                                        schoolData.participationscore,
	                                                                        '%'
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
	                                                                            'State avg: ',
	                                                                            schoolData.avgparticipationscore,
	                                                                            '%'
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
	                                                        _react2.default.createElement('img', { src: '../../assets/img/det3.png' })
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
	                                                            schoolData.hindu,
	                                                            '%'
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
	                                                            schoolData.muslim,
	                                                            '%'
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
	                                                            schoolData.christian,
	                                                            '%'
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
	                                                            schoolData.sikh,
	                                                            '%'
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
	                                                            schoolData.scst,
	                                                            '%'
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
	                                                            '<',
	                                                            schoolData.nri,
	                                                            '%'
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
	                                                            _react2.default.createElement('img', { src: '../../assets/img/det1.png' })
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
	                                                            _react2.default.createElement('img', { src: '../../assets/img/det2.png' })
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
	                                                                    schoolData.comment1
	                                                                )
	                                                            )
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'type-and-date' },
	                                                            'Submitted by a parent \xB7 ',
	                                                            schoolData.comment1date
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
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        null,
	                                                                        schoolData.comment2,
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
	                                                            'Submitted by a parent \xB7',
	                                                            schoolData.comment2date,
	                                                            ' '
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
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        null,
	                                                                        schoolData.comment3,
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
	                                                            'Submitted by a student \xB7',
	                                                            schoolData.comment3date
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
	                                                                    _react2.default.createElement(
	                                                                        'span',
	                                                                        null,
	                                                                        schoolData.comment4,
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
	                                                            'Submitted by a student \xB7 ',
	                                                            schoolData.comment4date
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
	                ),
	                _react2.default.createElement(
	                    'a',
	                    { id: 'back-to-top', href: '#', className: 'btn btn-primary btn-lg back-to-top', role: 'button', title: 'Click to return on the top page', 'data-toggle': 'tooltip', 'data-placement': 'left' },
	                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-up' })
	                )
	            );
	        }
	    }]);
	    return Details;
	}(_react.Component);
	
	function mapStateToProps(state) {
	
	    return {
	        schoolDetail: state.schools.schoolDetail
	    };
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        getSchoolDetails: function getSchoolDetails() {
	            console.log('called');
	            dispatch(SchoolDetailsAction.getCompareSchoolDetailsParams());
	        }
	    };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Details);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ../~/react-hot-loader/makeExportsHot.js */ 380); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ })

})
//# sourceMappingURL=1.014cbcb045bce71067ee.hot-update.js.map