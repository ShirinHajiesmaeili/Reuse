import React, { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import CartTab from "../components/CartTab";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  const { statusTab } = useContext(CartContext);
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
      // Add easing function for smoother transition
      const easedProgress = Math.min(
        Math.easeOutQuad(rawProgress / 100) * 100,
        100
      );
      setScrollProgress(easedProgress);
    };

    // Easing function
    Math.easeOutQuad = function (t) {
      return t * (2 - t);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundColor = `rgb(
    ${233 + ((255 - 255) * scrollProgress) / 100},
    ${239 + ((255 - 255) * scrollProgress) / 100},
    ${236 + ((255 - 255) * scrollProgress) / 100}
  )`;
  <div className="min-h-screen bg-white transition-colors duration-300"></div>;

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
      {/* Overlay when cart is open */}
      {statusTab && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setStatusTab(false)}
        />
      )}
      <main
        className={`w-full max-w-[1200px] mx-auto p-5 transform transition-transform duration-500
        ${statusTab ? "-translate-x-48" : ""}`}
      >
        <Navbar />
        <Outlet />
      </main>
      <CartTab />
      <Footer />

      {/* Chatbot Integration - Left Side */}
      {!isChatOpen ? (
        <div
          className="fixed bottom-5 left-5 w-30 h-10 p-4 flex items-center justify-center bg-tertiary text-white rounded-full cursor-pointer shadow-lg"
          onClick={() => setIsChatOpen(true)}
        >
          <span className="text-2xl text-white">Chat 💬</span>
        </div>
      ) : (
        <div className="fixed bottom-5 left-5 w-80 border rounded-lg shadow-lg bg-white flex flex-col">
          {/* Header with close icon */}
          <div className="flex justify-between items-center p-3 border-b border-gray-300 bg-gray-100">
            <h3 className="text-secondary font-bold">Reuse bot</h3>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
          </div>
          {/* Chat Box */}
          <div className="flex-1 p-4 overflow-y-auto">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 max-w-xs p-2 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "self-end text-right text-primary"
                    : "self-start text-left text-secondary"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          {/* Input Box */}
          <div className="flex items-center p-2 border-t border-gray-300">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary text-primary"
            />
            <button
              onClick={handleChatSend}
              className="ml-2 px-4 py-2 bg-tertiary text-white font-semibold rounded-lg hover:bg-tertiary focus:ring-2 focus:ring-primary"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
