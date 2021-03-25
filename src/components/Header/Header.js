import React from 'react'
import logo from '../../assets/images/logo.jpg'
import classes from './Header.module.scss'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { popup } from '../../store/actions/productAction'

const Header = () => {
  const dispatch = useDispatch()

  const handleOpenPopup = () => dispatch(popup(true))

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.logo}>
          <div className={classes.logoImg}>
            <img className={classes.img} src={logo} alt="hot-dog" />
          </div>
          <h1>CRUD</h1>
        </div>
        <Button variant='primary'
                onClick={handleOpenPopup}
        >Create</Button>
      </div>
    </div>
  )
}

export default Header
