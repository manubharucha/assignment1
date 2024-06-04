    import React from 'react';
    import { Button } from 'reactstrap';
    import { Link } from 'react-router-dom';
    import homeImage from '../images/shopping.webp'; 

    const Home = () => {
        return (
            <div className="text-center" style={{ padding: '50px' }}>
                <h1>Welcome to the Shopping Website</h1>
                <img src={homeImage} alt="Home" style={{ maxWidth: '20%', height: 'auto', margin: '20px 0' }} />
                <div style={{ marginTop: '20px' }}>
                    <Link to="/products">
                        <Button color="primary" size="lg">
                            Go to Product List
                        </Button>
                    </Link>
                </div>
            </div>
        );
    };

    export default Home;
