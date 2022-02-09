import React from 'react'
import Product from './Product'
import "./Products.css"

import data from './data'

function Products() {

    let productList = data.map((product) => {
        return <Product key={product.id} {...product}></Product>
    })

    console.log(data, productList)

  return (
    <div className='product-list'>
        {productList}
    </div>
  )
}

export default Products