import React from 'react'
import { Card, Form } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import classes from './CardProduct.module.scss'
import { useDispatch } from 'react-redux'
import { deleteHotDog } from '../../store/actions/productAction'

const SwitchEditMode = (props) => {

  const { id, name, price, description, imgUrl } = props.item

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteHotDog(id))
    props.setEditMode(false)
  }

  if (props.editMode) {
    return (
      <form onSubmit={props.handleSubmit}>
        <Form.Group controlId="formImg">
          <Form.Label>Images Url</Form.Label>
          <Field className='form-control'
                 name='imgUrl'
                 component='input'
                 type='text'
                 placeholder='imageUrl'
                 value={imgUrl} />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Field className='form-control'
                 name='name'
                 component='input'
                 type='text'
                 placeholder='name'
                 value={name} />
        </Form.Group>
        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Field className='form-control'
                 name='price'
                 component='input'
                 type='text'
                 placeholder='price'
                 value={price} />
        </Form.Group>
        <Form.Group controlId="formPrice">
          <Form.Label>Description</Form.Label>
          <Field className='form-control'
                 name='description'
                 component='textarea'
                 type='text'
                 placeholder='description'
                 value={description} />
        </Form.Group>

        <div className={classes.btnBlock}>
          <div>
            <button className='btn btn-primary'
                    type='submit'>
              Update
            </button>
          </div>
          <div>
            <button className='btn btn-primary'
                    type='button'
                    onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </form>
    )
  } else {
    return (
      <>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price} $</Card.Text>
        <Card.Text>{description}</Card.Text>
        <div className={classes.btnBlock}>
          <div className='btn btn-primary'
               onClick={() => props.setEditMode(true)}>
            Edit
          </div>
        </div>
      </>
    )
  }
}

export const CardProductReduxForm = reduxForm({
  form: 'product'
})(SwitchEditMode)
