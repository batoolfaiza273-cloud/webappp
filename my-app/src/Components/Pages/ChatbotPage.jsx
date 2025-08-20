import React, { useState } from "react";
import axios from "axios";
import "./ChatbotPage.css";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { text: "Hello!  How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const handleSend = async () => {
    if (input.trim() === "") return;
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });
      setMessages([
        ...newMessages,
        { text: res.data.reply, sender: "bot" },
      ]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { text: " Server not responding.", sender: "bot" },
      ]);
    }
    setInput("");
  };

  return (
    

    <div className="chatbot-container">
      <div className="chat-header">HealSync Chatbot </div>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${
              msg.sender === "user" ? "user-msg" : "bot-msg"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-footer">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatbotPage;
