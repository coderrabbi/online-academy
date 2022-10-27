import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Common/Loader/Loader';
import { AuthContext } from '../../context/Auth/AuthProvider';

const LoggedInRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) {
        return <Loader />;
    }

    if (user) {
        return <Navigate to="/" state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default LoggedInRoute;
