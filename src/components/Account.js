import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Account = ({ account, updateAccount }) => {
    const [name, setName] = useState(account.name);
    const [address, setAddress] = useState(account.address);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateAccount(name, address);
        alert('Account updated successfully!');
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
            <Row className="w-100">
                <Col md={6} lg={4} className="mx-auto">
                    <div className="text-center mb-4">
                        <h2>Account Details</h2>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input
                                type="text"
                                name="address"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </FormGroup>
                        <Button color="primary" type="submit" className="w-100">Update Account</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Account;
