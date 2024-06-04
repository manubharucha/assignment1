import React from 'react';

const UserInfo = ({ account, editAccount }) => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="text-center mb-4">
                        <h2>User Information</h2>
                    </div>
                    <div>
                        <p><strong>Name:</strong> {account.name}</p>
                        <p><strong>Address:</strong> {account.address}</p>
                        <p><strong>Email:</strong> {account.email}</p>
                        <button className="btn btn-primary btn-block" onClick={editAccount}>Edit Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
