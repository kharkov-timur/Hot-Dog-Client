import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import classes from './CardProduct.module.scss'
import { CardProductReduxForm } from './SwitchEditMode'
import { useDispatch } from 'react-redux'
import { updateHotDog } from '../../store/actions/productAction'

const CardProductForm = (props) => {
  const [editMode, setEditMode] = useState(false)
  const srcImg = props.item.imgUrl

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    console.log(data)
    dispatch(updateHotDog(
      props.item.id,
      data.name,
      data.price,
      data.description,
      data.imgUrl
    ))
    setEditMode(false)
  }

  return (
    <Card className={classes.card}>
      <Card.Img variant='top' src={srcImg} />
      <Card.Body>
        <CardProductReduxForm {...props} onSubmit={onSubmit}
                              editMode={editMode}
                              setEditMode={setEditMode} />
      </Card.Body>
    </Card>
  )
}

export default CardProductForm
