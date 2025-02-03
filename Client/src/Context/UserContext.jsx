import { createContext, useState, useEffect } from "react";

// Create a UserContext
export const UserContext = createContext();

// Provider component to wrap around the app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user info

  // Simulate user authentication (replace with real logic)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Function to log in the user and save to localStorage
  // TODO: don't use localStorage something else like Cookie would be great
  const logInUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Function to log out the user
  // TODO: don't use localStorage something else like Cookie would be great
  const logOutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Fake

  return (
    <UserContext.Provider value={{ user, logInUser, logOutUser }}>
      {children}
    </UserContext.Provider>
  );
};
