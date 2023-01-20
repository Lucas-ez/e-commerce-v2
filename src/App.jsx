import './App.css';
import Header from './containers/Header'
import { HomePage, ProductPage, CartPage } from './pages';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const [allProducts, setAllProducts] = useState([])

  const {search} = useLocation()
  const query = new URLSearchParams(search)

  useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setAllProducts(data)
      })
  }, [])

  const categories = Array.from(new Set(allProducts.map(p => p.category)))

  const filterProduct = product => {

    const posCategory = query.get('category')

    const isFromThisCategory = posCategory === '' || product.category.includes(categories[posCategory])

    return isFromThisCategory
  }

  return (
    <div className="App">
      <Header categories={categories}/>
      <Routes>
        <Route exact path='/' element={<HomePage products={allProducts.filter(p => filterProduct(p))}/>}/>
        <Route exact path='/product' element={<ProductPage allProducts={allProducts}/>}/>
        {/* 
        <CartPage/>
        */}
      </Routes>
    </div>
  );
}

export default App;
