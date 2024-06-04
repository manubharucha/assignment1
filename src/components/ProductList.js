import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap';
import Earing from '../images/earing.jpeg';
import Perfume from '../images/perfume.jpg';
import Ring from "../images/ring.jpg";
import RK from "../images/rk.jpg";
import Bhagvadgita from "../images/bhagvatgita.jpg"
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
    const handleAddToCart = (product) => {
        const quantity = parseInt(prompt('Enter quantity:', '1'), 10);
        if (quantity > 0) {
            addToCart(product, quantity);
        }
    };

    return (
        <Row>
            {products.map(product => (
                <Col sm="4" key={product.id}>
                    <Card>
                        <img src={product.image} alt={product.name} className="card-img-top" />
                        <CardBody>
                            <CardTitle tag="h5">{product.name}</CardTitle>
                            <CardText>{product.description}</CardText>
                            <CardText>${product.price}</CardText>
                            <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
        
    );
};

export default ProductList;