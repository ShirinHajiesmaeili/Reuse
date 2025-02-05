import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const ProtectedLayout = () => {
  const { user } = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate to="/signup" />;
};

export default ProtectedLayout;
