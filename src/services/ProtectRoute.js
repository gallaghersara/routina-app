import React from 'react';
import { Navigate } from 'react-router-dom';

const useAuth = () => {
  const token = localStorage.getItem('jwt');
  return !!token;
};

const ProtectedRoute = ({ component: Component }) => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;
