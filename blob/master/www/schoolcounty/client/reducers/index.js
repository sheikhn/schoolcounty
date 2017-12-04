
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import schools from './schools'

export default combineReducers({
  routing,
    schools
})
