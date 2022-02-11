import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Product.css"

function Detailed() {
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.productId}`)
            .then(res=>res.json())
            .then(json=>{
                setProduct(json)
                setLoading(false)
            })
    }, [])

    if(loading){
        return (
            <div>Loading...</div>
        )
    }

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

export default Detailed
