import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT
} from '../types'

const initialState = {
  name: null,
  price: null,
  description: null,
  image: null,
}

const addHotDogReducer = (state = initialState, action) => {
  switch (action.type){
    case CREATE_PRODUCT:
      return {
        ...state,
        ...action.payload
      }
    case UPDATE_PRODUCT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default addHotDogReducer
