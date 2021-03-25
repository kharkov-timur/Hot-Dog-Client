import { CREATE_PRODUCT, PRODUCT_ERROR } from '../types'
import axios from 'axios'

export const addHotDog = (name, price, description, img) => async dispatch => {
  try {
    await axios
      .post('http://localhost:5000/api/product', {
        name,
        price,
        description,
        img
      })
    dispatch({
      type: CREATE_PRODUCT,
      payload: { name, price, description, img }
    })
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err
    })
  }
}

export const updateHotDog = (id, name, price, description, img) => async dispatch => {
  try {
    await axios
      .put(`http://localhost:5000/api/product/${id}`, {
        name,
        price,
        description,
        img
      })
    dispatch({
      type: CREATE_PRODUCT,
      payload: { name, price, description, img }
    })
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err
    })
  }
}


