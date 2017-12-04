
import {getStatesRepo,getLevelsRepo,getSyllabusRepo,getInfrastructureRepo,
    getActivitiesRepo,getSchoollistRepo,getCompareSchoollistRepo, getSchoolByIdRepo} from './apicalls/school';

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


export const getCompareSchoolsList = (ids) => {
    return function(dispatch, getState){
        let state = getState();
        getCompareSchoollistRepo(ids)
            .then((response) => {
                 let compareSchoolList =response.data.data;
                 //console.log('action',response);
                 dispatch({type: "GET_SCHOOLS_SUCCESS", payload: compareSchoolList});
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


export const getSchoolDetails =(id)=>{
    console.log(id);
    return function(dispatch){
        getSchoolByIdRepo(id)
            .then((response) => {
            if (response.data.status) {
               console.log('action',response);
                let schoolDetails = response.data.data;

                dispatch({type: "GET_SCHOOLDETAIL_SUCCESS", payload: schoolDetails});
            }
        })
            .catch((err) => {
                console.log(err)
            });
    }

}


export const setFilter = (params) => {
    return function(dispatch){
        dispatch ({type:"SET_FILTER_PARAMS",payload:params});
        dispatch(getSchoolsList());
    }   
}