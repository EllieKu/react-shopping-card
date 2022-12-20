import './App.css'
import React from 'react'
import Product from './pages/Product'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

const Section = styled.section`
  width: 100vw;
  height: calc(100vh - 88px);
  padding: 10px 20px;
  overflow-y: scroll;
`

function App() {
  return (
    <div className="app">
      <ShoppingCartProvider>
        <Navbar />
        <Section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </Section>
      </ShoppingCartProvider>
    </div>
  )
}

export default App
