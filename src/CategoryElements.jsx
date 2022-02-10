import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from './Products'

function CategoryElements() {

    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])

    const category = useParams().category
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=> {
                console.log(json)
                setProduct(json)
                setLoading(false)
            })
    }, [category])
    

    return (
        <div>
            {loading === true ? <h1>Loading...</h1>: <Products data={product}></Products>} 
        </div>
    )
}

export default CategoryElements