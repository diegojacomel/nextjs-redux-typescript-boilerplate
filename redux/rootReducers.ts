/* Modules */
// Redux
import { combineReducers } from 'redux'

/* Reducers */
import example from './reducers/example'

// all the reducers are in one place
const rootReducers = combineReducers({
  example
})

export default rootReducers
