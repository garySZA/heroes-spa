import React, { useContext } from 'react'
import { AuthContext } from '../auth'
import { AuthProviderProps } from '../types';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute: React.FC<AuthProviderProps> = ({ children }) => {
    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

    return ( logged )
        ? children
        : <Navigate  to='/login'/>
}
