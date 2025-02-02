import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! Thank you for your message!" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { sender: "user", text: input }]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: " How can I assist you today?" },
        ]);
      }, 1000);

      setInput("");
    }
  };

  if (!isOpen) {
    return (
      <div
        className="fixed bottom-5 right-5 w-30 h-10 p-4 flex items-center justify-center text-white rounded-full cursor-pointer shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <span className="text-2xl text-white">Chat 💬</span>
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 w-80 border rounded-lg shadow-lg bg-white flex flex-col">
      {/* Header with close icon */}
      <div className="flex justify-between items-center p-3 border-b border-gray-300 bg-gray-100 font-family:Rethink Sans, serif">
        <h3 className="text-secondary font-bold font-family:Rethink Sans, serif">
          Reuse bot
        </h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
      </div>

      {/* Chat Box */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 max-w-xs p-2 rounded-lg text-sm ${
              msg.sender === "user"
                ? "self-end text-right text-primary"
                : "self-start text-left text-tertiary"
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
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-tertiary"
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-secondary font-semibold rounded-lg hover:bg-secondary focus:ring-2 focus:ring-secondary"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
