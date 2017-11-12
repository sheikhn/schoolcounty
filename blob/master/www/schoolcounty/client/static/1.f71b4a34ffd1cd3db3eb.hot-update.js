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
	
	var _schools = __webpack_require__(/*! ../../actions/schools */ 425);
	
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

/***/ 424:
/*!************************************************!*\
  !*** ./components/Listingpage/Filter/index.js ***!
  \************************************************/
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Filter = function (_Component) {
	    (0, _inherits3.default)(Filter, _Component);
	
	    function Filter(props) {
	        (0, _classCallCheck3.default)(this, Filter);
	        return (0, _possibleConstructorReturn3.default)(this, (Filter.__proto__ || (0, _getPrototypeOf2.default)(Filter)).call(this, props));
	    }
	
	    /*getTypes() {
	        const {filterParams} =  this.props;
	        let schoolTypeList = []
	        let typesOfSchools = filterParams.typeOfSchool;
	        for (let typeIndex in typesOfSchools ) {
	            let schoolType = typesOfSchools[typeIndex];
	            schoolTypeList.push(
	                <li key={typeIndex}>
	                    <input class="filter" data-filter=".radio2" type="radio" name="radioButton" id={'radio'+typeIndex}/>
	                    <label class="radio-label" for={'radio'+typeIndex}>{schoolType}</label>
	                </li>
	            );
	        }
	         return schoolTypeList
	    }*/
	
	    /*getLevels() {
	        const {filterParams} =  this.props;
	        let schoolLevelList = []
	        let schoolsLevels = filterParams.level;
	        for (let levelIndex in  schoolsLevels) {
	            let schoolLevel = schoolsLevels[levelIndex];
	            schoolLevelList.push(
	                <li key={levelIndex}>
	                    <input class="filter" data-filter={'.check1'+levelIndex} type="checkbox" id={'checkbox'+levelIndex}/>
	                    <label class="checkbox-label" for={'checkbox'+levelIndex}>{schoolLevel}</label>
	                </li>
	            );
	        }
	        return schoolLevelList;
	    }*/
	
	    /*getSyllabus() {
	        const {filterParams} =  this.props;
	        let syllabusList = [];
	        let syllabusTypes = filterParams.typesOfSyllabus;
	        for (let syllabusIndex in syllabusTypes ) {
	            let syllabusType = syllabusTypes[syllabusIndex];
	            syllabusList.push(
	                <option key={syllabusIndex} value={'.option'+syllabusIndex}>{syllabusType}</option>
	            );
	        }
	         return syllabusList;
	    }*/
	
	    (0, _createClass3.default)(Filter, [{
	        key: 'getStates',
	        value: function getStates() {
	            var filterParams = this.props.filterParams;
	
	            var stateList = [];
	            var states = filterParams.states.list;
	            for (var stateIndex in states) {
	                var state = states[stateIndex];
	
	                stateList.push(_react2.default.createElement(
	                    'option',
	                    { key: stateIndex, value: '.option' + stateIndex },
	                    state['name']
	                ));
	            }
	            console.log(stateList);
	            return stateList;
	        }
	    }, {
	        key: 'getLevels',
	        value: function getLevels() {
	            var filterParams = this.props.filterParams;
	
	            var levelList = [];
	            console.log('levelnir', filterParams);
	            var levels = filterParams.levels;
	            for (var levelIndex in levels) {
	                var level = levels[levelIndex];
	
	                levelList.push(_react2.default.createElement(
	                    'option',
	                    { key: levelIndex, value: '.option' + levelIndex },
	                    level['level']
	                ));
	            }
	            console.log(levelList);
	            return levelList;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var filterParams = this.props.filterParams;
	
	            console.log(filterParams);
	            if (!filterParams.states.fetched) {
	                return null;
	            }
	
	            /* let schoolTypeList = this.getTypes();
	            */
	            var schoolLevelList = this.getLevels();
	
	            /*let syllabusList = this.getSyllabus();*/
	
	            var stateList = this.getStates();
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'cd-filter' },
	                _react2.default.createElement(
	                    'form',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'cd-filter-block' },
	                        _react2.default.createElement(
	                            'h4',
	                            null,
	                            'Search'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'cd-filter-content' },
	                            _react2.default.createElement('input', { type: 'search', placeholder: 'Try color-1,color-2,color-3...' })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'cd-filter-block' },
	                        _react2.default.createElement(
	                            'h4',
	                            null,
	                            'States'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'cd-filter-content' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'cd-select cd-filters' },
	                                _react2.default.createElement(
	                                    'select',
	                                    { className: 'filter', name: 'selectThis', id: 'selectThis' },
	                                    _react2.default.createElement(
	                                        'option',
	                                        { value: '' },
	                                        'Choose a state'
	                                    ),
	                                    stateList
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'cd-filter-block' },
	                        _react2.default.createElement(
	                            'h4',
	                            null,
	                            'Levels of Education'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            { className: 'cd-filter-content cd-filters list' },
	                            schoolLevelList
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'a',
	                    { href: '#0', className: 'cd-close' },
	                    'Close'
	                )
	            );
	        }
	    }]);
	    return Filter;
	}(_react.Component);
	
	exports.default = Filter;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ../~/react-hot-loader/makeExportsHot.js */ 380); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ })

})
//# sourceMappingURL=1.f71b4a34ffd1cd3db3eb.hot-update.js.map