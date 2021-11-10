import React from 'react';
import './App.css'
// import { BrowserRouter } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom';
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Cart from './components/Cart';
import Header from './components/Header';
import Product from './components/Product';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
            <Header />
            <Routes>
              <Route path='/' element={<Product />}></Route>
              <Route path='/carts' element={<Cart />}></Route>
            </Routes>  
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
