import {
  GET_PRODUCTS,
  PRODUCT_ERROR,
  POPUP
} from '../types'

const initialState = {
  products: [],
  loading: true,
  showPopup: false
}

const productReducer = (state = initialState, action) => {
  switch (action.type){
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      }
    case PRODUCT_ERROR:
      return {
        loading: false,
        error: action.payload
      }
    case POPUP:
      return {
        ...state,
        showPopup: action.payload
      }
    default:
      return state
  }
}

export default productReducer
