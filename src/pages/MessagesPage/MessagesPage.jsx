import React, { useState, useEffect } from "react";
import MessagesList from "../../components/MessagesList/MessagesList";
import MessageForm from "../../components/MessageForm/MessageForm";
import axios from "axios";

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("https://localhost:5001/api/message");
      setMessages(response.data);
    } catch (error) {
      console.error("Error Fetching Messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSendMessage = () => {
    fetchMessages();
  };

  return (
    <div>
      <h1>Messages Page</h1>
      <MessagesList messages={messages} />
      <MessageForm onSendMessage={handleSendMessage} />
    </div>
  );
};

export default MessagesPage;
