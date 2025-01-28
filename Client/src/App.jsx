import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Searchbar from "./Components/Searchbar";
import Chatbot from "./Components/Chatbot";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchbar" element={<Searchbar />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Chatbot />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
