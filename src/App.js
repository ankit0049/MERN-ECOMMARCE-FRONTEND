import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetails from './features/product/components/ProductDetails';
import { store } from './app/store';
import {Provider} from 'react-redux'
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); 

function App() {
  return (
       <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Render Home component for root path */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/checkout" element={<Checkout/>}/> 
          <Route path="/product-details" element={<ProductDetails/>}/> 
        </Routes>
      </Router>
      </Provider>
  );
}

root.render(<App />);
export default App;
