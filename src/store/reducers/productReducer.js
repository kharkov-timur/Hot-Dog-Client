import {
  CREATE_PRODUCT, DELETE_PRODUCT,
  GET_PRODUCTS, POPUP,
  PRODUCT_ERROR, UPDATE_PRODUCT
} from '../types'

const initialState = {
  products: [],
  loading: true,
  showPopup: false,
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      }
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    case UPDATE_PRODUCT:
      return {
        ...state,
        ...action.payload
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        ...action.payload
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
