import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Products from './Products';
import { Routes, Route } from 'react-router-dom'
import Categories from './Categories';
import Login from './Login';
import Register from './Register';
import Checkout from './Checkout';
import CategoryElements from './CategoryElements';
import { useEffect, useState } from 'react';

// import data from './data'

function App() {

  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data => {
              console.log(data)
              setProduct(data)
            })
  }, [])

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Products data={product}></Products>}></Route>
        <Route path='/categories' element={<Categories></Categories>}></Route>
        <Route path='/categories/:category' element={<CategoryElements></CategoryElements>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
