import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import FeaturedProducts from './Components/FeaturedProducts'
import TopProducts from './pages/TopProducts'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { Routes, Route} from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductDetails from './pages/ProductDetails'

function App() {

  return (
    <>
    <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/featuredproducts' element={<FeaturedProducts/>}/>
  <Route path='/topproducts' element={<TopProducts/>}/>
</Routes>
  <Footer/>
    </>
  )
}

export default App
