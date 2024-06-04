import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="text-center" style={{ padding: '50px' }}>
            <h1>Welcome to the Shopping Website</h1>
            <Link to="/products">
                <Button color="primary" size="lg" style={{ marginTop: '20px' }}>
                    Go to Product List
                </Button>
            </Link>
        </div>
    );
};

export default Home;
