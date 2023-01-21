import './App.css';
import Header from './containers/Header'
import { HomePage, ProductPage, CartPage } from './pages';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const [allProducts, setAllProducts] = useState([])
  const [searchBar, setSearchBar] = useState('')

  const {search} = useLocation()
  const query = new URLSearchParams(search)

  console.log(query)

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
    
    console.log(posCategory);
    if(posCategory === 'null') return true    

    const conditions = [
      posCategory === '' || product.category === categories[posCategory],
      product.title.toLowerCase().includes(searchBar.toLowerCase()),
    ]

    return conditions.reduce((prev, current)=> prev && current, true)
  }

  return (
    <div className="App">
      <Header categories={categories} searchBar={searchBar} setSearchBar={setSearchBar}/>
      <Routes>
        <Route exact path='/' element={<HomePage products={allProducts.filter(p => filterProduct(p))}/>}/>
        <Route exact path='/product' element={<ProductPage allProducts={allProducts} categories={categories}/>}/>
        {/* 
        <CartPage/>
        */}
      </Routes>
    </div>
  );
}

export default App;
