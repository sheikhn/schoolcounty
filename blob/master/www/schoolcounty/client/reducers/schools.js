
const initialState = {
    getFilter:{},
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
            error: false,
        },
        infrastructure: {
            fetching: false,
            fetched: false,
            error: false,
        },
        syllabus: {
            fetching: false,
            fetched: false,
            error: false,
        },
        states:{
            fetching: false,
            fetched: false,
            error: false,
        },
        activities:{
            fetching: false,
            fetched: false,
            error: false,
        }
    },
    schoolUnit:{
      fetching:false,
      fetched:false,
      error:false,
      nameAdd:[],
      rating:[],
        facilities:[],
        activities:[],
        diversity:[]
    },
    schoolDetail:{
      fetching:false,
        fetched:false,
        error:false,
        schoolDetail:[]

    }

}


const schools = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SCHOOLS_SUCCESS':
            return Object.assign({}, state, {
                schoolList: {
                    fetched: true,
                    list: action.payload
                }
            })

        case 'GET_FILTER_STATES_SUCCESS':
            let schoolFilter1 = state.schoolFilter;
            schoolFilter1.states = {
                        fetched: true,
                        list : action.payload
            };

             return Object.assign({}, state, {
                schoolFilter: schoolFilter1 
              });

        case 'GET_FILTER_LEVELS_SUCCESS':
            let schoolFilter2 = state.schoolFilter;

            schoolFilter2.level = {
                        fetched: true,
                        list : action.payload
            };

             return Object.assign({}, state, {
                schoolFilter: schoolFilter2 
              });

        case 'GET_FILTER_SYLLABUS_SUCCESS':
            let schoolFilter3 = state.schoolFilter;

            schoolFilter3.syllabus = {
                        fetched: true,
                        list : action.payload
            };

             return Object.assign({}, state, {
                schoolFilter: schoolFilter3 
              });

        case 'GET_FILTER_INFRASTRUCTURE_SUCCESS':
            let schoolFilter4 = state.schoolFilter;

            schoolFilter4.infrastructure = {
                        fetched: true,
                        list : action.payload
            };

             return Object.assign({}, state, {
                schoolFilter: schoolFilter4 
              });

        case 'GET_FILTER_ACTIVITIES_SUCCESS':
            let schoolFilter5 = state.schoolFilter;

            schoolFilter5.activities = {
                        fetched: true,
                        list : action.payload
            };

             return Object.assign({}, state, {
                schoolFilter: schoolFilter5 
              });

        case 'GET_COMPARESCHOOLUNIT_SUCCESS':
            return Object.assign({},state,{
                schoolUnit:{
                    fetched:true,
                    schoolList: action.payload
                }
            })

        case 'GET_COMPARESCHOOLDETAIL_SUCCESS':
            return Object.assign({},state,{
                schoolDetail:{
                    fetched:true,
                    schoolDetail:action.payload
                }
            })

        case 'SET_FILTER_PARAMS':
            let getFilter = state.getFilter;
            Object.assign(getFilter, action.payload);
            console.log(getFilter);
            return Object.assign({},state,{
                getFilter:getFilter
            })

        default:
            return state;
    }
}


export default schools;

