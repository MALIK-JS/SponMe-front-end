import React, { useState } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";

const getLocalStorage = () => {
  let isAuthenticated = localStorage.getItem("isAuthenticated");
  if (isAuthenticated) {
    return localStorage.getItem("isAuthenticated");
  } else {
    return false;
  }
};

function PrivateRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(getLocalStorage());

  return isAuthenticated ? children : <Navigate to="/register" />;
}

export default PrivateRoute;
