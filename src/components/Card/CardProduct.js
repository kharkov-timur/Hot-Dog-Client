import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import logo from '../../assets/images/logo.jpg'
import classes from './CardProduct.module.scss'

const CardProduct = ({ name, price, description, img }) => {
  const [editMode, setEditMode] = useState(false)

  return (
    <Card className={classes.card}>
      <Card.Img variant='top' src={logo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price} $</Card.Text>
        <Card.Text>{description}</Card.Text>
        <div className={classes.btnBlock}>
          {
            !editMode
              ? <Button variant='primary' onClick={() => setEditMode(true)}>Edit</Button>
              : <>
                <div>
                  <Button variant='primary' onClick={() => setEditMode(false)}>Update</Button>
                </div>
                <div>
                  <Button variant='primary' onClick={() => setEditMode(false)}>Delete</Button>
                </div>
              </>
          }
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardProduct
