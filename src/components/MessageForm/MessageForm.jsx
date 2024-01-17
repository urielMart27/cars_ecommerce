import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./MessageForm.css";

const MessageForm = ({ onSendMessage }) => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!subject || !content) {
      return;
    }

    try {
      await axios.post("https://localhost:5001/api/message/add", {
        subject,
        content,
      });

      setSubject("");
      setContent("");

      onSendMessage();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="message-form">
      <h2>Send a Message</h2>
      <form onSubmit={handleSubmit}>
        <label className="label">
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
        <label className="label">
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
