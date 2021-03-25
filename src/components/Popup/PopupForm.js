import React, { useEffect } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, popup } from '../../store/actions/productAction'
import useForm from '../../hooks/useForm'
import { addHotDog } from '../../store/actions/hotDofAction';

const config = {
  form: 'testForm',
  initialValues: {
    name: 'name',
    price: 'price',
    description: 'description',
    img: 'img'
  }
}

const PopupForm = () => {
  const dispatch = useDispatch()
  const { showPopup } = useSelector(state => state.productsList)
  const handleClose = () => dispatch(popup(false))

  //****************************

  const { store, useField, reset, handleSubmit } = useForm(config)

  const name = useField('name')
  const price = useField('price')
  const description = useField('description')
  const img = useField('img')

  console.log(store)

  const create = () => dispatch(addHotDog(store))

  // useEffect(() => {
  //   dispatch(getProducts())
  // }, [dispatch])

  //******************************

  return (
    <Modal show={showPopup} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new hot-dog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <input className='form-control' {...name.input} />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <input className='form-control' {...price.input} />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <input className='form-control' {...description.input} />
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <input className='form-control' {...img.input} />
          </Form.Group>
          <div className='card-footer text-center'>
            <button className='btn btn-secondary'
                    onClick={handleClose}
            >No thanks
            </button>
            {' '}
            <button className='btn btn-primary'
                    type='submit'
                    onSubmit={create}
                    onClick={handleClose}>
              Add
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default PopupForm
