import React, { useState } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Cart = ({ cartItems, updateCartItem, removeCartItem }) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    const handleQuantityChange = (productId, event) => {
        const quantity = parseInt(event.target.value, 10);
        if (quantity > 0) {
            updateCartItem(productId, quantity);
        } else {
            console.warn(`Invalid quantity: ${quantity} for product ID: ${productId}`);
        }
    };

    const handleFinalizePurchase = () => {
        toggleModal();
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {cartItems.map(item => (
                    <tr key={item.product.id}>
                        <td><img src={item.product.image} alt={item.product.name} style={{ maxWidth: '100px' }} /></td>
                        <td>{item.product.description}</td>
                        <td>
                            <input 
                                type="number" 
                                value={item.quantity} 
                                onChange={(e) => handleQuantityChange(item.product.id, e)} 
                                min="1"
                            />
                        </td>
                        <td>${item.product.price.toFixed(2)}</td>
                        <td>${(item.product.price * item.quantity).toFixed(2)}</td>
                        <td>
                            <Button color="danger" onClick={() => removeCartItem(item.product.id)}>
                                Remove
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Button color="primary" onClick={handleFinalizePurchase}>Finalize Purchase</Button>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Purchase Confirmation</ModalHeader>
                <ModalBody>
                    Thank you for shopping with us! Your purchase has been finalized.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleModal}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Cart;
