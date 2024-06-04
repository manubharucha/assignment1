import React from 'react';
import { Table, Button } from 'reactstrap';

const Cart = ({ cartItems, updateCartItem, removeCartItem }) => {

    const handleQuantityChange = (productId, event) => {
        // Parse the quantity from the event
        const quantity = parseInt(event.target.value, 10);

        // Ensure the quantity is a positive number before updating the cart item
        if (quantity > 0) {
            updateCartItem(productId, quantity);
        } else {
            // If the quantity is not positive, you might want to provide feedback
            // or handle the situation differently, e.g., reset to the previous value
            console.warn(`Invalid quantity: ${quantity} for product ID: ${productId}`);
        }
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {cartItems.map(item => (
                    <tr key={item.product.id}>
                        <td>{item.product.name}</td>
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
            <Button color="primary">Finalize Purchase</Button>
        </div>
    );
};

export default Cart;
