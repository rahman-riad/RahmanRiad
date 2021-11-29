import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../../images/error.PNG';

const NotFound = () => {
    return (
        <div className="container text-center">
            <img src={Error} width="300px" className="mt-4 pt-5 img-fluid" alt="Error" />
            <h1 className="fw-bold text-danger">404 Page Not Found</h1>
            <Link to="/">
                <button className="btn btn-dark mt-3">Back to the Home</button>
            </Link>
        </div>
    );
};

export default NotFound;