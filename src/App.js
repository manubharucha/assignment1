import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Account from './components/Account';
import UserInfo from './components/userInfo';


const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [account, setAccount] = useState({ name: '', address: '', email: '' });
    const [isEditing, setIsEditing] = useState(true);

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

    const updateAccount = (newAccount) => {
        setAccount(newAccount);
        setIsEditing(false);
    };

    const editAccount = () => {
        setIsEditing(true);
    };

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} updateCartItem={updateCartItem} removeCartItem={removeCartItem} />} />
                <Route path="/account" element={
                    isEditing 
                        ? <Account account={account} updateAccount={updateAccount} /> 
                        : <UserInfo account={account} editAccount={editAccount} />
                } />
            </Routes>
            
        </Router>
    );
};

export default App;
