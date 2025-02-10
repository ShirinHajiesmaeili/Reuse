import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log("user in context ", user);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/auth/me", {
          withCredentials: true,
        });
        setUser(response.data);
      } catch {
        setUser(null);
      }
    };

    getUser();
  }, []);

  const values = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
