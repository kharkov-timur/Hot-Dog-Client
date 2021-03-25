import React, { useEffect } from 'react'
import CardProduct from '../components/Card/CardProduct'
import classes from './Shop.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/actions/productAction'

const Shop = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productsList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className={classes.container}>
        {loading
          ? 'Loading...'
          : error
            ? error.message
            : products
              .map((obj) => {
                return <CardProduct key={obj.id} {...obj} />
              })}
    </div>
  )
}

export default Shop
