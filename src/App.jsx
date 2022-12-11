import './App.css'
import React from 'react'
import Product from './pages/Product'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <ShoppingCartProvider>
        <Navbar />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </section>
      </ShoppingCartProvider>
    </div>
  )
}

export default App
