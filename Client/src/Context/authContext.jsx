import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/auth/me", {
          withCredentials: true,
        });

        setUser(data.signedInUser);
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
