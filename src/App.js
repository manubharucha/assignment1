import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Account from './components/Account';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [account, setAccount] = useState({ name: '', address: '' });

    const addToCart = (product, quantity) => {
        const existingItem = cartItems.find(item => item.product.id === product.id);
        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            ));
        } else {
            setCartItems([...cartItems, { product, quantity }]);
        }
    };

    const updateCartItem = (productId, quantity) => {
        setCartItems(cartItems.map(item =>
            item.product.id === productId ? { ...item, quantity } : item
        ));
    };

    const removeCartItem = productId => {
        setCartItems(cartItems.filter(item => item.product.id !== productId));
    };

    const updateAccount = (name, address) => {
        setAccount({ name, address });
    };

    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} updateCartItem={updateCartItem} removeCartItem={removeCartItem} />} />
                <Route path="/account" element={<Account account={account} updateAccount={updateAccount} />} />
            </Routes>
        </Router>
    );
};

export default App;
