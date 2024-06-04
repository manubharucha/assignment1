import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'reactstrap';

const Header = () => (
    <Navbar color="light" light expand="md">
        <Nav className="ms-auto" navbar>
            <Link className="nav-link" to="/products">Products</Link>
            <Link className="nav-link" to="/cart">Cart</Link>
            <Link className="nav-link" to="/account">Account</Link>
        </Nav>
    </Navbar>
);

export default Header;
