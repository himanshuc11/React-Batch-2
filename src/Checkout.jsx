import React from 'react'
import { cartContext } from './App'
import { useContext } from 'react'
import CheckoutCard from './CheckoutCard'

function Checkout() {
  let [cart, setCart] = useContext(cartContext)
  const calculateTotal = () => {
    let total = 0
    for(let i = 0; i < cart.length; i++) {
      total += (cart[i].quantity * cart[i].price)
    }
    return total
  }

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Checkout Page</h1>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        {cart.map((item) => <CheckoutCard key={item.id} {...item}></CheckoutCard>)}
      </div>
      <h1>Your Total Bill is: {calculateTotal()}</h1>
    </div>
  )
}

export default Checkout