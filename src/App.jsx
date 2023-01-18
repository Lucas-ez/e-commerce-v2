import './App.css';
import Header from './containers/Header'
import { HomePage, ProductPage, CartPage } from './pages';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [allProducts, setAllProducts] = useState([])

  useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setAllProducts(data)
      })
  }, [])

  return (
    <div className="App">
      <BrowserRouter >
        <Header/>
        <Routes>
          <Route exact path='/' element={<HomePage allProducts={allProducts}/>}/>
          <Route exact path='/product' element={<ProductPage allProducts={allProducts}/>}/>
          {/* 
          <CartPage/>
          */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
