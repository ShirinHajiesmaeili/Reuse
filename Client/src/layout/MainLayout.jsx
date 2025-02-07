import { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import CartTab from "../components/CartTab";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

const Layout = () => {
  const { statusTab, setStatusTab } = useContext(CartContext);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Hello! Thank you for your message!" },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        (document.documentElement.scrollHeight - window.innerHeight) / 2;
      const rawProgress = (window.scrollY / totalScroll) * 100;
      const easedProgress = Math.min(easeOutQuad(rawProgress / 100) * 100, 100);
      setScrollProgress(easedProgress);
    };

    const easeOutQuad = (t) => {
      return t * (2 - t);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundColor = `rgb(
    ${233 + ((255 - 233) * scrollProgress) / 100},
    ${239 + ((255 - 239) * scrollProgress) / 100},
    ${236 + ((255 - 236) * scrollProgress) / 100}
  )`;

  const handleChatSend = () => {
    if (chatInput.trim()) {
      setChatMessages((prev) => [...prev, { sender: "user", text: chatInput }]);
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          { sender: "bot", text: "How can I assist you today?" },
        ]);
      }, 1000);
      setChatInput("");
    }
  };

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor,
        willChange: "background-color",
      }}
    >
      {statusTab && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setStatusTab(false)}
        />
      )}
      <main
        className={`w-full mx-auto transform transition-transform duration-500 ${
          statusTab ? "-translate-x-48" : ""
        }`}
      >
        <Navbar />
        <Outlet />
      </main>
      <CartTab />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;
