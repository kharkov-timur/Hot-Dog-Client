import {combineReducers} from 'redux'
import productReducer from './productReducer'
import addHotDogReducer from './addHotDogReducer'

export default combineReducers({
  productsList: productReducer,
  addHotDog: addHotDogReducer
})
