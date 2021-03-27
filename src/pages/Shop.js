import React, { useEffect } from 'react'
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
    <div className='container'>
      <div className='row justify-content-center'>
        {loading
          ? 'Loading...'
          : error
            ? error.message
            : products.map((item) => {
                return <CardProductForm key={item.id} item={item} />
              })}
      </div>

    </div>
  )
}

export default Shop
