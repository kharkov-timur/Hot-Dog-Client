import {
  GET_PRODUCTS,
  PRODUCT_ERROR,
  POPUP
} from '../types'
import axios from 'axios'

export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/api/product')
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data.rows
    })
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err
    })
  }
}

export const popup = (showPopup) => async dispatch => {
  dispatch({
    type: POPUP,
    payload: showPopup
  })
}
