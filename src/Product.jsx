import React from 'react'
import "./Product.css"


function Product(props) {

    let product = props

    return (
        <div className='product'>
            <img src={product.image} alt={`${product.category} ${product.description}`} />
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <button>Add to Cart</button>
        </div>
    )
}
export default Product