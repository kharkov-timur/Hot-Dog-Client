import React, { useEffect } from 'react'
import classes from './Shop.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/actions/productAction'
import CardProductForm from '../components/Card/CardProductForm'

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
              .map((item) => {
                return <CardProductForm key={item.id} item={item} />
              })}
    </div>
  )
}

export default Shop
