
const initialState = {
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
        typeOfSchool: {
            fetching: false,
            fetched: false,
            error: false,
        },
        typesOfSyllabus: {
            fetching: false,
            fetched: false,
            error: false,
        },
        states:{
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

        default:
            return state;
    }
}


export default schools;

