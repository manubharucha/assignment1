import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Earing from '../images/earing.jpeg';
import Perfume from '../images/perfume.jpg';
import Ring from "../images/ring.jpg";
import RK from "../images/rk.jpg";
import Bhagvadgita from "../images/bhagvatgita.jpg";
import '../styles/ProductList.css';

const products = [
    {
        id: 1,
        name: 'Perfume',
        description: 'A refreshing fragrance that combines floral notes with a hint of citrus, perfect for all occasions. Its long-lasting scent will keep you feeling fresh throughout the day.',
        image: Perfume,
        price: 50
    },
    {
        id: 2,
        name: 'Ring',
        description: 'An elegant sterling silver ring featuring a beautifully crafted design. Perfect for engagements, weddings, or simply as a statement piece to adorn your fingers.',
        image: Ring,
        price: 30
    },
    {
        id: 3,
        name: 'Earring',
        description: 'Stylish and chic earrings designed to complement any outfit. Made with high-quality materials, these earrings are perfect for both casual and formal occasions.',
        image: Earing,
        price: 25
    },
    {
        id: 4,
        name: 'Book',
        description: 'A captivating novel that takes you on an unforgettable journey through a world of mystery and adventure. A must-read for book lovers who enjoy a good story.',
        image: Bhagvadgita,
        price: 50
    },
    {
        id: 5,
        name: 'Radhe Krishna Murti',
        description: 'A beautifully crafted Radhe Krishna murti made with exquisite detail and care. Perfect for home decor, this murti brings a sense of peace and spirituality to any space.',
        image: RK,
        price: 80
    }
];

const ProductList = ({ addToCart }) => {
    const [notification, setNotification] = useState('');

    const handleAddToCart = (product) => {
        const quantity = 1; // Default quantity
        addToCart(product, quantity);
        setNotification(`${product.name} has been added to the cart!`);
        setTimeout(() => setNotification(''), 3000); 
    };

    return (
        <div>
            {notification && <div className="alert alert-success text-center" role="alert">{notification}</div>}
            <div className="row">
                {products.map(product => (
                    <div className="col-sm-4" key={product.id}>
                        <div className="card">
                            <img src={product.image} alt={product.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">${product.price}</p>
                                <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <Link to="/">
                    <button className="btn btn-lg btn-secondary" style={{ backgroundColor: 'blue', borderColor: 'blue' }}>Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductList;
