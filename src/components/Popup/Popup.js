import React from 'react'
import { PopupReduxForm } from './PopupForm'
import { useDispatch } from 'react-redux'
import { addHotDog } from '../../store/actions/productAction'

const Popup = () => {
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    console.log(data)
    dispatch(addHotDog(
      data.name,
      data.price,
      data.description,
      data.imgUrl
    ))
  }

  return (
    <PopupReduxForm onSubmit={onSubmit}/>
  )
}

export default Popup
