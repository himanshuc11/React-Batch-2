import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <ul className='navbar-ul'>
                <li className='navbar-item'>Home</li>
                <li className='navbar-item'>Categorie</li>
                <li className='navbar-item'>Login</li>
                <li className='navbar-item'>Register</li>
                <li className='navbar-item'>Checkout</li>
            </ul>
        </div>
    )
}

export default Navbar