import React, { useContext, useState } from 'react'
import { cartContext } from './App'

function CheckoutCard(props) {

    const [cart, setCart] = useContext(cartContext)

    const handleQuantityChange = (e) => {
        // What item's quantity Changed
        let item = cart.filter((item) => item.id === props.id)[0]

        let idx = -1;

        for(let i = 0; i < cart.length; i++) {
           if(cart[i].id === item.id) {
               idx = i
               break
           }
        }

        let before = cart.slice(0, idx)
        let after = cart.slice(idx + 1)

        // Change Quantity of That Item
        item.quantity = e.target.value
        let newCart = [...before, item, ...after]
        setCart(newCart)
    }

    // [X, X, X, Y, X, X, X ]
    // before = [X, X, X]
    // after = [X, X, X]

    return (
        <div style={{width: "80%", border: "2px solid black", padding: "20px",boxSizing: "border-box"}}>
            <img style={{width: "100px"}} src={props.image} alt="" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <label htmlFor="">
                Quantity: <input type="text" value={props.quantity} onChange={handleQuantityChange}/>
            </label>
        </div>
    )
}

export default CheckoutCard