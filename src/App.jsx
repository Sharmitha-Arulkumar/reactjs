import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import './App.css'

export default function App() {

  return (
    <>
      <ShopProvider>
        <Router>
           <div className="app-layout-wrapper">
          <Navbar />
           <main className="main-content-window">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/categories/*" element={<Categories />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          </main>
          <Footer /> {/* 2. Place it outside the Routes window */}
        </div>
        </Router>
      </ShopProvider>
    </>
  )
}


