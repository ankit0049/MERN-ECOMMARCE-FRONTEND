import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetails from './features/product/components/ProductDetails';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Render Home component for root path */}
          <Route path="home" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="cart" element={<CartPage />} /> 
          <Route path="checkout" element={<Checkout/>}/> 
          <Route path="product-details" element={<ProductDetails/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
