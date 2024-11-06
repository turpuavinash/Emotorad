import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
    const user = JSON.parse(localStorage.getItem('user')); // Get the user from local storage

    return user ? element : <Navigate to="/" />; // Redirect to login if no user
};

export default PrivateRoute;
