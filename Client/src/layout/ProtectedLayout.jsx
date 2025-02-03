import { UserContext } from "../context/userContext";
import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedLayout = () => {
  const { user } = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedLayout;
