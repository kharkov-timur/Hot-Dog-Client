import React from 'react'
import { Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { popup } from '../../store/actions/productAction'
import { Field, reduxForm } from 'redux-form'

const PopupForm = (props) => {
  const dispatch = useDispatch()
  const { showPopup } = useSelector(state => state.productsList)
  const handleClose = () => dispatch(popup(false))

  return (
    <Modal show={showPopup} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new hot-dog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={props.handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Field className='form-control'
                   name='name'
                   component='input'
                   type='text'
                   placeholder='name' />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Field className='form-control'
                   name='price'
                   component='input'
                   type='number'
                   placeholder='price' />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Field className='form-control'
                   name='description'
                   component='input'
                   type='text'
                   placeholder='description' />
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Field className='form-control'
                   name='imgUrl'
                   component='input'
                   type='text'
                   placeholder='imgUrl' />
          </Form.Group>
          <div className='card-footer text-center'>
            <button className='btn btn-secondary'
                    onClick={handleClose}
            >No thanks
            </button>
            {' '}
            <button className='btn btn-primary'
                    type='submit'
                    onClick={handleClose}>
              Add
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export const PopupReduxForm = reduxForm({
  form: 'form'
})(PopupForm)
