import { Navigate, Outlet } from "react-router-dom";

// Simulate authentication (replace with real auth later)
const isAuthenticated = false; // change to true to access Profile

export default function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
