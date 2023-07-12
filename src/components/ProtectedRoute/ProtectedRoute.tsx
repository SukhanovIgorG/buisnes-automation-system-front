import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ loggedIn }: { loggedIn: boolean }) => {
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};