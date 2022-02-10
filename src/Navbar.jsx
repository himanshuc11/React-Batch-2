import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
 
function Navbar() {
    return (
        <div>
            <ul className='navbar-ul'>
                <Link to="/"><li className='navbar-item'>Home</li></Link>
                <Link to="/categories"><li className='navbar-item'>Categories</li></Link>
                <Link to="/login"><li className='navbar-item'>Login</li></Link>
                <Link to="/register"><li className='navbar-item'>Register</li></Link>
                <Link to="/checkout"><li className='navbar-item'>Checkout</li></Link>
            </ul>
        </div>
    )
}

export default Navbar