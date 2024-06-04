import React, { useState } from 'react';

const Account = ({ account, updateAccount }) => {
    const [name, setName] = useState(account.name || '');
    const [address, setAddress] = useState(account.address || '');
    const [email, setEmail] = useState(account.email || '');

    const handleSubmit = (event) => {
        event.preventDefault();
        updateAccount({ name, address, email });
        alert('Account updated successfully!');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="text-center mb-4">
                        <h2>{account.name ? 'Update Account Details' : 'Create Account'}</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">
                            {account.name ? 'Update Account' : 'Create Account'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Account;
