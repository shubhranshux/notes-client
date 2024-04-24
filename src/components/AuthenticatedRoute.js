import React from "react";
import { Route, Navigate } from "react-router-dom"; // Import Navigate
import { useAppContext } from "../libs/contextLib";

export default function AuthenticatedRoute({ element: Component, ...rest }) {
  const { isAuthenticated } = useAppContext();

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          <Component />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
}
