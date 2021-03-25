import { combineReducers } from 'redux'
import productReducer from './productReducer'
import addHotDogReducer from './addHotDogReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  productsList: productReducer,
  addHotDog: addHotDogReducer,
  form: formReducer
})
