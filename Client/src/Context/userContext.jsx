import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [zipcode, setZipcode] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("token")) return;

    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    fetch("http://localhost:3001/api/auth/profile", fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          return;
        }
        setUser(data);
        setZipcode(data.zipcode);
        setCity(data.city);
      })
      .catch((err) => console.log(err));
  }, []);

  const signIn = (userCredentials) => {
    fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          return;
        }
        localStorage.setItem("token", data.token);
        setUser(data.user);
        setZipcode(data.user.zipcode);
        setCity(data.user.city);
      })
      .catch((err) => console.log(err));
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    setZipcode(null);
    setCity(null);
  };

  const values = {
    user,
    signIn,
    signOut,
    zipcode,
    city,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
