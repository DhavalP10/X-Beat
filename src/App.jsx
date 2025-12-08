import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import FeaturedProducts from './Components/FeaturedProducts'
import TopProducts from './Components/TopProducts'
import Footer from './Components/Footer'
import ProductDetails from './Components/ProductDetails'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
  <Home/>
  <FeaturedProducts/>
  <TopProducts/>
  <Footer/>
  <ProductDetails/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/' element={<ProductDetails/>}/>

  </Routes>
    </>
  )
}

export default App
