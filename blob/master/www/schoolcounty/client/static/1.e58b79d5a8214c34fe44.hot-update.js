webpackHotUpdate(1,{

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
	
	var _school = __webpack_require__(/*! ./apicalls/school */ 469);
	
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
	
	    return function (dispatch) {
	        (0, _school.getStatesRepo)().then(function (response) {
	            if (response.data.status) {
	                // console.log(response);
	                var _states = response.data.data;
	
	                var _filterStates = { states: _states };
	
	                dispatch({ type: "GET_FILTER_STATES_SUCCESS", payload: _filterStates });
	            }
	        }).catch(function (err) {
	            console.log(err);
	        });
	    };
	};
	
	var getFilterLevels = exports.getFilterLevels = function getFilterLevels() {
	
	    return function (dispatch) {
	        getLevelsRepo().then(function (response) {
	            if (response.data.status) {
	                // console.log(response);
	                var levels = response.data.data;
	
	                var filterLevels = { states: states };
	
	                dispatch({ type: "GET_FILTER_STATES_SUCCESS", payload: filterStates });
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

/***/ })

})
//# sourceMappingURL=1.e58b79d5a8214c34fe44.hot-update.js.map