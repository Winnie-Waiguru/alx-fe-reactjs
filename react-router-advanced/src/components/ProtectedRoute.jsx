import { Navigate, Outlet } from "react-router-dom";

// Simulate authentication (replace with real auth later)
const useAuth = false; // change to true to access Profile

export default function ProtectedRoute() {
  return useAuth ? <Outlet /> : <Navigate to="/" />;
}
