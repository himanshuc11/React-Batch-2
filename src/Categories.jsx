import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function Categories() {

  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(categoryData => {
              setCategories(categoryData)
              setLoading(false)
            })
  }, [])

  const categoryList = () => {
    const renderData = categories.map((category) => {
      return <Link key={uuidv4()} to={`/categories/${category}`}><li>{category}</li></Link>
    })
    return renderData
  }


  return (
    <div>
      {loading ? <h1>Loading...</h1>: <ul>{categoryList()}</ul>}
    </div>
  )
}

export default Categories