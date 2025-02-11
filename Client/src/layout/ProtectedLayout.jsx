import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProtectedLayout = () => {
  const { user } = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate to="/auth" />;
};

export default ProtectedLayout;
