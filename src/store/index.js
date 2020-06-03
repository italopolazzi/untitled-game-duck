import { createStore, applyMiddleware } from 'redux'
// import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
// import promise from 'redux-promise-middleware'
// module with all reducers
import rootReducer from './reducers'

// store with the reducers functions combined as a root module
const store = createStore(rootReducer, {}, applyMiddleware(thunk))

export default store