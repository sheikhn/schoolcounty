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

/***/ 425:
/*!****************************!*\
  !*** ./actions/schools.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ../~/react-hot-api/modules/index.js */ 2), RootInstanceProvider = __webpack_require__(/*! ../~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 12), React = __webpack_require__(/*! react */ 103); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getCompareSchoolDetailsParams = exports.getFilterLevels = exports.getFilterStates = exports.getSchoolsList = undefined;
	
	var _school = __webpack_require__(/*! ./apicalls/school */ 426);
	
	var getSchoolsList = exports.getSchoolsList = function getSchoolsList() {
	    var schoolList = [{
	        name: 'Wisdom School',
	        location: 'Rajajinagar',
	        review: '16',
	        website: 'wisdomschool.edu',
	        schoolrating: '5',
	        testscorerating: '5',
	        studentsenrolled: '500',
	        transportation: '20',
	        beforecare: '6',
	        afterschool: '15',
	        worldlanguage: '5',
	        clubs: '15',
	        sports: '18',
	        artsmusic: '5',
	        hindu: '30',
	        muslim: '13',
	        jain: '7',
	        christian: '18',
	        sikh: '12',
	        scst: '13',
	        nri: '7'
	
	    }, {
	        name: 'DPS Bangalore South',
	        location: 'JayaNagar',
	        review: '25',
	        website: 'dpssouthbangalore.edu',
	        schoolrating: '4.6',
	        testscorerating: '5',
	        studentsenrolled: '500',
	        transportation: '20',
	        beforecare: '6',
	        afterschool: '15',
	        worldlanguage: '5',
	        clubs: '15',
	        sports: '18',
	        artsmusic: '5',
	        hindu: '30',
	        muslim: '13',
	        jain: '7',
	        christian: '18',
	        sikh: '12',
	        scst: '13',
	        nri: '7'
	
	    }, {
	        name: 'Timpany School',
	        location: 'Kanakapura',
	        review: '22',
	        website: 'timpanybangalore.edu',
	        schoolrating: '3.8',
	        testscorerating: '5',
	        studentsenrolled: '500',
	        transportation: '20',
	        beforecare: '6',
	        afterschool: '15',
	        worldlanguage: '5',
	        clubs: '15',
	        sports: '18',
	        artsmusic: '5',
	        hindu: '30',
	        muslim: '13',
	        jain: '7',
	        christian: '18',
	        sikh: '12',
	        scst: '13',
	        nri: '7'
	    }, {
	        name: 'K.V.HAL School',
	        location: 'HAL Road',
	        review: '22',
	        website: 'kvhalbangalore.edu',
	        schoolrating: '3.8',
	        testscorerating: '5',
	        studentsenrolled: '500',
	        transportation: '20',
	        beforecare: '6',
	        afterschool: '15',
	        worldlanguage: '5',
	        clubs: '15',
	        sports: '18',
	        artsmusic: '5',
	        hindu: '30',
	        muslim: '13',
	        jain: '7',
	        christian: '18',
	        sikh: '12',
	        scst: '13',
	        nri: '7'
	    }];
	    return { type: "GET_SCHOOLS_SUCCESS", payload: schoolList };
	};
	
	var getFilterStates = exports.getFilterStates = function getFilterStates() {
	
	    return function (dispatch, getState) {
	        (0, _school.getStatesRepo)().then(function (response) {
	            if (response.data.status) {
	                // console.log(response);
	                var states = response.data.data;
	
	                var filterStates = { states: states };
	                console.log('store', getState());
	
	                dispatch({ type: "GET_FILTER_STATES_SUCCESS", payload: filterStates });
	            }
	        }).catch(function (err) {
	            console.log(err);
	        });
	    };
	};
	
	var getFilterLevels = exports.getFilterLevels = function getFilterLevels() {
	
	    return function (dispatch) {
	        (0, _school.getLevelsRepo)().then(function (response) {
	            if (response.data.status) {
	                // console.log(response);
	                var levels = response.data.data;
	                console.log(response);
	
	                var filterLevels = { levels: levels };
	
	                dispatch({ type: "GET_FILTER_LEVELS_SUCCESS", payload: filterLevels });
	            }
	        }).catch(function (err) {
	            console.log(err);
	        });
	    };
	};
	
	var getCompareSchoolDetailsParams = exports.getCompareSchoolDetailsParams = function getCompareSchoolDetailsParams() {
	
	    var schoolDetails = {
	        schoolData: {
	            name: 'DPS South Bangalore',
	            address: 'kanakapura Road,Bangalore-21',
	            district: 'Bangalore',
	            phonenumber: '(080) 269-2660',
	            schoolscountyrating: '5',
	            reviews: '16',
	            grades: '9-12',
	            students: '722',
	            type: 'Public',
	            testscore: '4',
	            collegescore: '5',
	            advancescore: '3',
	            attendancescore: '4',
	            lowincscore: '3',
	            disabilitiesscore: '4',
	            studentscore: '4',
	            disciplinescore: '5',
	            teacherscore: '5',
	            neighborscore: '4',
	            y16score: '4',
	            y15score: '5',
	            y14score: '4',
	            y13score: '3',
	            engscore: '70',
	            govscore: '60',
	            eng2score: '75',
	            avgengscore: '66',
	            avggovscore: '63',
	            avgeng2score: '79',
	            readinessscore: '5',
	            graduationscore: '97',
	            avggraduationscore: '74',
	            avgactscore: '20',
	            participationscore: '40',
	            avgparticipationscore: '17',
	            hindu: '85',
	            muslim: '7',
	            christian: '5',
	            sikh: '2',
	            scst: '1',
	            nri: '1',
	            comment1: 'My son has trouble "fitting in" at school but he has really blossomed at MHS! He loves his teachers and classes and is all-around very comfortable.',
	            comment2: 'Having graduated from Moberly just over 10 years ago I have to say I am proud of everything Moberlys schools have to offer. It is very diverse yet there is a great opportunity for every kid to learn',
	            comment3: 'I did not get my review put in, so I will try again I go to Moberly High School and it is not a fair school unless you are the kids of the coaches or principals then you are on top of the list, our club',
	            comment4: 'I am currently a student at Moberly High School, I would not recommend that anyone go here unless they have to, I could easily compare it to what I could imagine prison being like. The place is constantly',
	            comment1date: 'September 02, 2015',
	            comment2date: 'September 02, 2015',
	            comment3date: 'January 28, 2013',
	            comment4date: 'June 10, 2012'
	
	            /*  schoolCountyRating : {
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
	              }*/
	        } };
	
	    return { type: "GET_COMPARESCHOOLDETAIL_SUCCESS", payload: schoolDetails };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ../~/react-hot-loader/makeExportsHot.js */ 380); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "schools.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 1)(module)))

/***/ }),

/***/ 426:
/*!************************************!*\
  !*** ./actions/apicalls/school.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ../~/react-hot-api/modules/index.js */ 2), RootInstanceProvider = __webpack_require__(/*! ../~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 12), React = __webpack_require__(/*! react */ 103); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getLevelsRepo = exports.getStatesRepo = undefined;
	
	var _axios = __webpack_require__(/*! axios */ 427);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getStatesRepo = exports.getStatesRepo = function getStatesRepo() {
	    return (0, _axios2.default)({
	        method: 'GET',
	        url: 'http://35.154.63.76/api/states/get-states'
	    });
	};
	
	var getLevelsRepo = exports.getLevelsRepo = function getLevelsRepo() {
	    return (0, _axios2.default)({
	        method: 'GET',
	        url: 'http://localhost:8000/api/level/get-levels'
	    });
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ../~/react-hot-loader/makeExportsHot.js */ 380); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "school.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ }),

/***/ 427:
/*!***************************!*\
  !*** ../~/axios/index.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./lib/axios */ 428);

/***/ }),

/***/ 428:
/*!*******************************!*\
  !*** ../~/axios/lib/axios.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./utils */ 429);
	var bind = __webpack_require__(/*! ./helpers/bind */ 430);
	var Axios = __webpack_require__(/*! ./core/Axios */ 432);
	var defaults = __webpack_require__(/*! ./defaults */ 433);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance(defaults);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};
	
	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ 450);
	axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ 451);
	axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ 447);
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(/*! ./helpers/spread */ 452);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),

/***/ 429:
/*!*******************************!*\
  !*** ../~/axios/lib/utils.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(/*! ./helpers/bind */ 430);
	var isBuffer = __webpack_require__(/*! is-buffer */ 431);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ }),

/***/ 430:
/*!**************************************!*\
  !*** ../~/axios/lib/helpers/bind.js ***!
  \**************************************/
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ }),

/***/ 431:
/*!*******************************!*\
  !*** ../~/is-buffer/index.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}
	
	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	
	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ }),

/***/ 432:
/*!************************************!*\
  !*** ../~/axios/lib/core/Axios.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(/*! ./../defaults */ 433);
	var utils = __webpack_require__(/*! ./../utils */ 429);
	var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ 444);
	var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ 445);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	  config.method = config.method.toLowerCase();
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;


/***/ }),

/***/ 433:
/*!**********************************!*\
  !*** ../~/axios/lib/defaults.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(/*! ./utils */ 429);
	var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ 434);
	
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(/*! ./adapters/xhr */ 435);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(/*! ./adapters/http */ 435);
	  }
	  return adapter;
	}
	
	var defaults = {
	  adapter: getDefaultAdapter(),
	
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	
	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};
	
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});
	
	module.exports = defaults;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 45)))

/***/ }),

/***/ 434:
/*!*****************************************************!*\
  !*** ../~/axios/lib/helpers/normalizeHeaderName.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ../utils */ 429);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),

/***/ 435:
/*!**************************************!*\
  !*** ../~/axios/lib/adapters/xhr.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 429);
	var settle = __webpack_require__(/*! ./../core/settle */ 436);
	var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ 439);
	var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ 440);
	var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ 441);
	var createError = __webpack_require__(/*! ../core/createError */ 437);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ 442);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;
	
	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (("development") !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
	        request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(/*! ./../helpers/cookies */ 443);
	
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};


/***/ }),

/***/ 436:
/*!*************************************!*\
  !*** ../~/axios/lib/core/settle.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(/*! ./createError */ 437);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};


/***/ }),

/***/ 437:
/*!******************************************!*\
  !*** ../~/axios/lib/core/createError.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(/*! ./enhanceError */ 438);
	
	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};


/***/ }),

/***/ 438:
/*!*******************************************!*\
  !*** ../~/axios/lib/core/enhanceError.js ***!
  \*******************************************/
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.request = request;
	  error.response = response;
	  return error;
	};


/***/ }),

/***/ 439:
/*!******************************************!*\
  !*** ../~/axios/lib/helpers/buildURL.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 429);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ }),

/***/ 440:
/*!**********************************************!*\
  !*** ../~/axios/lib/helpers/parseHeaders.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 429);
	
	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });
	
	  return parsed;
	};


/***/ }),

/***/ 441:
/*!*************************************************!*\
  !*** ../~/axios/lib/helpers/isURLSameOrigin.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 429);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ }),

/***/ 442:
/*!**************************************!*\
  !*** ../~/axios/lib/helpers/btoa.js ***!
  \**************************************/
/***/ (function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;


/***/ }),

/***/ 443:
/*!*****************************************!*\
  !*** ../~/axios/lib/helpers/cookies.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 429);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));
	
	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }
	
	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }
	
	        if (secure === true) {
	          cookie.push('secure');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ }),

/***/ 444:
/*!*************************************************!*\
  !*** ../~/axios/lib/core/InterceptorManager.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 429);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ }),

/***/ 445:
/*!**********************************************!*\
  !*** ../~/axios/lib/core/dispatchRequest.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 429);
	var transformData = __webpack_require__(/*! ./transformData */ 446);
	var isCancel = __webpack_require__(/*! ../cancel/isCancel */ 447);
	var defaults = __webpack_require__(/*! ../defaults */ 433);
	var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ 448);
	var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ 449);
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}
	
	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  var adapter = config.adapter || defaults.adapter;
	
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	
	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );
	
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	
	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }
	
	    return Promise.reject(reason);
	  });
	};


/***/ }),

/***/ 446:
/*!********************************************!*\
  !*** ../~/axios/lib/core/transformData.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 429);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ }),

/***/ 447:
/*!*****************************************!*\
  !*** ../~/axios/lib/cancel/isCancel.js ***!
  \*****************************************/
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),

/***/ 448:
/*!***********************************************!*\
  !*** ../~/axios/lib/helpers/isAbsoluteURL.js ***!
  \***********************************************/
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ }),

/***/ 449:
/*!*********************************************!*\
  !*** ../~/axios/lib/helpers/combineURLs.js ***!
  \*********************************************/
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};


/***/ }),

/***/ 450:
/*!***************************************!*\
  !*** ../~/axios/lib/cancel/Cancel.js ***!
  \***************************************/
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}
	
	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	
	Cancel.prototype.__CANCEL__ = true;
	
	module.exports = Cancel;


/***/ }),

/***/ 451:
/*!********************************************!*\
  !*** ../~/axios/lib/cancel/CancelToken.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Cancel = __webpack_require__(/*! ./Cancel */ 450);
	
	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	
	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }
	
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	
	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};
	
	module.exports = CancelToken;


/***/ }),

/***/ 452:
/*!****************************************!*\
  !*** ../~/axios/lib/helpers/spread.js ***!
  \****************************************/
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


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
	
	var _schools = __webpack_require__(/*! ../../actions/schools */ 425);
	
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
	
	var _schools = __webpack_require__(/*! ../../actions/schools */ 425);
	
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
	
	var _schools = __webpack_require__(/*! ../../actions/schools */ 425);
	
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
//# sourceMappingURL=1.40995e98a57a348ea19e.hot-update.js.map