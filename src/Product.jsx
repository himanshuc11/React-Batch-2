import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { cartContext } from './App'

function Product(props) {

    let product = props
    let [cart, setCart] = useContext(cartContext)

    const handleCartAddition = () => {
        // Check if the product is in cart
        let isPresent = cart.filter(item => item.id === product.id)
        if(isPresent.length === 1) {
            return
        }
        setCart(() => {
            let x = [...cart, {...product, quantity: 1}]
            // alert('Successfully added')
            setCart(x)
        } )
        console.log('Add to cart')
    }

    return (
        <div className='product'>
            <Link to={`/detail/${product.id}`}>
                <img src={product.image} alt={`${product.category} ${product.description}`} />
                <h3>{product.title}</h3>
            </Link>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <button onClick={handleCartAddition}>Add to Cart</button>
        </div>
    )
}
export default Product