webpackHotUpdate(1,{

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
	            console.log('states', stateList);
	            return stateList;
	        }
	    }, {
	        key: 'getLevels',
	        value: function getLevels() {
	            var filterParams = this.props.filterParams;
	
	            var levelList = [];
	            console.log('levelnir', filterParams);
	            var levels = filterParams.level.list;
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
	
	            console.log('comporen', filterParams);
	
	            var schoolLevelList = this.getLevels();
	
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
//# sourceMappingURL=1.1daf05a00099e7c401a5.hot-update.js.map