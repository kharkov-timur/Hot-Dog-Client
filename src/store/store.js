import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'

import rootReducer from './reducers'

const initialState = {

}

const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware, logger)))

export default store
