import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  POPUP,
  PRODUCT_ERROR,
} from '../types'
import axios from 'axios'

export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get('https://shrouded-sea-08840.herokuapp.com/api/product')
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

export const addHotDog = (name, price, description, imgUrl) => async dispatch => {
  try {
    const res = await axios
      .post('https://shrouded-sea-08840.herokuapp.com/api/product', {
        name,
        price,
        description,
        imgUrl
      })
    dispatch({
      type: CREATE_PRODUCT,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err
    })
  }
}

export const updateHotDog = (id, name, price, description, imgUrl) => async dispatch => {
  try {
    const res = await axios
      .put(`https://shrouded-sea-08840.herokuapp.com/api/product/${id}`, {
        name,
        price,
        description,
        imgUrl
      })
    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err
    })
  }
}

export const deleteHotDog = (id) => async dispatch => {
  try {
    const res = await axios.delete(`https://shrouded-sea-08840.herokuapp.com/api/product/${id}`)
    dispatch({
      type: DELETE_PRODUCT,
      payload: res.data
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
