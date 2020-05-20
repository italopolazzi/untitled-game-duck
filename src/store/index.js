import { createStore } from 'redux'
// module with all reducers
import rootReducer from './reducers'

// store with the reducers functions combined as a root module
const store = createStore(rootReducer)

export default store