
import {getStatesRepo,getLevelsRepo,getSyllabusRepo,getInfrastructureRepo,getActivitiesRepo,getSchoollistRepo} from './apicalls/school';

export const getSchoolsList = () => {
    return function(dispatch, getState){
        let state = getState();
        getSchoollistRepo(state.schools.getFilter)
            .then((response) => {
                 let schoolList =response.data.data;
                 //console.log('action',response);
                 dispatch({type: "GET_SCHOOLS_SUCCESS", payload: schoolList});
            })
               .catch((err) =>{
                    console.log(err)
                });
    }
}






export const getFilterStates = () => {

    return function(dispatch, getState){
        getStatesRepo()
            .then((response) => {
            if (response.data.status) {
               // console.log(response);
                let states = response.data.data;

                dispatch({type: "GET_FILTER_STATES_SUCCESS", payload: states});
            }
        })
            .catch((err) => {
                console.log(err)
            });
    }
}

export const getFilterLevels = () => {

    return function(dispatch){
        getLevelsRepo()
            .then((response) => {
            if (response.data.status) {
               // console.log(response);
                let levels = response.data.data;


                dispatch({type: "GET_FILTER_LEVELS_SUCCESS", payload: levels});
            }
        })
            .catch((err) => {
                console.log(err)
            });
    }
}

export const getFilterSyllabus = () => {

    return function(dispatch){
        getSyllabusRepo()
            .then((response) => {
            if (response.data.status) {
               //console.log('action',response);
                let syllabus = response.data.data;


                dispatch({type: "GET_FILTER_SYLLABUS_SUCCESS", payload: syllabus});
            }
        })
            .catch((err) => {
                console.log(err)
            });
    }
}

export const getFilterInfrastructure = () => {

    return function(dispatch){
        getInfrastructureRepo()
            .then((response) => {
            if (response.data.status) {
               //console.log('action',response);
                let infrastructure = response.data.data;


                dispatch({type: "GET_FILTER_INFRASTRUCTURE_SUCCESS", payload: infrastructure});
            }
        })
            .catch((err) => {
                console.log(err)
            });
    }
}


export const getFilterActivities = () => {

    return function(dispatch){
        getActivitiesRepo()
            .then((response) => {
            if (response.data.status) {
               //console.log('action',response);
                let activities = response.data.data;


                dispatch({type: "GET_FILTER_ACTIVITIES_SUCCESS", payload: activities});
            }
        })
            .catch((err) => {
                console.log(err)
            });
    }
}


export const getCompareSchoolDetailsParams =()=>{


    let schoolDetails =
        {
            schoolData : {
                name: 'DPS South Bangalore',
                address: 'kanakapura Road,Bangalore-21',
                district:'Bangalore',
                phonenumber:'(080) 269-2660',
                schoolscountyrating:'5',
                reviews:'16',
                grades:'9-12',
                students:'722',
                type:'Public',
                testscore:'4',
                collegescore:'5',
                advancescore:'3',
                attendancescore:'4',
                lowincscore:'3',
                disabilitiesscore:'4',
                studentscore:'4',
                disciplinescore:'5',
                teacherscore:'5',
                neighborscore:'4',
                y16score:'4',
                y15score:'5',
                y14score:'4',
                y13score:'3',
                engscore:'70',
                govscore:'60',
                eng2score:'75',
                avgengscore:'66',
                avggovscore:'63',
                avgeng2score:'79',
                readinessscore:'5',
                graduationscore:'97',
                avggraduationscore:'74',
                avgactscore:'20',
                participationscore:'40',
                avgparticipationscore:'17',
                hindu:'85',
                muslim:'7',
                christian:'5',
                sikh:'2',
                scst:'1',
                nri:'1',
                comment1:'My son has trouble "fitting in" at school but he has really blossomed at MHS! He loves his teachers and classes and is all-around very comfortable.',
                comment2:'Having graduated from Moberly just over 10 years ago I have to say I am proud of everything Moberlys schools have to offer. It is very diverse yet there is a great opportunity for every kid to learn',
                comment3:'I did not get my review put in, so I will try again I go to Moberly High School and it is not a fair school unless you are the kids of the coaches or principals then you are on top of the list, our club',
                comment4:'I am currently a student at Moberly High School, I would not recommend that anyone go here unless they have to, I could easily compare it to what I could imagine prison being like. The place is constantly',
                comment1date:'September 02, 2015',
                comment2date:'September 02, 2015',
                comment3date:'January 28, 2013',
                comment4date:'June 10, 2012',

            }

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
        };

    return {type:"GET_COMPARESCHOOLDETAIL_SUCCESS",payload:schoolDetails};
}


export const setFilter = (params) => {
    return function(dispatch){
        dispatch ({type:"SET_FILTER_PARAMS",payload:params});
        console.log('asddd');
        dispatch(getSchoolsList());
    }   
}