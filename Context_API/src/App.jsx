import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './components/Home'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/products/:ProductId' element={<ProductDetails/>} />
    </Routes>
  )
}

export default App
