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
import { useEffect, useState, createContext } from 'react';
import app from './firebase';
import Detailed from './Detailed';

// import data from './data'
const userContext = createContext()
export { userContext }


function App() {

  const [product, setProduct] = useState([])
  const [user, setUser] = useState(null)

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
      <userContext.Provider value={[user, setUser]}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Products data={product}></Products>}></Route>
          <Route path='/detail/:productId' element={<Detailed></Detailed>}></Route>
          <Route path='/categories' element={<Categories></Categories>}></Route>
          <Route path='/categories/:category' element={<CategoryElements></CategoryElements>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/checkout' element={<Checkout></Checkout>}></Route>
          <Route path="*" element={<h1>404 Not Found</h1>}></Route>
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;


// Add to cart: User Should be logged In
// Checkout Page
// Hosting