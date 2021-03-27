import React from 'react'
import { PopupReduxForm } from './PopupForm'
import { useDispatch } from 'react-redux'
import { addHotDog } from '../../store/actions/productAction'
import { reset } from 'redux-form'

const Popup = () => {
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(addHotDog(
      data.name,
      data.price,
      data.description,
      data.imgUrl
    ))
    dispatch(reset('popup'))
  }

  return (
    <PopupReduxForm onSubmit={onSubmit}/>
  )
}

export default Popup
