import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Provider from './context/Provider';
import Login from './components/login/Login';


function App() {
  return (
    <Provider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
