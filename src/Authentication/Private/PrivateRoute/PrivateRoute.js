import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <Spinner animation="border" />
    }

    if (user.email) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }}></Navigate >

};

export default PrivateRoute;