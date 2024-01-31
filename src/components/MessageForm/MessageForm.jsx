import React, { useState } from "react";
import axios from "axios";
import "./MessageForm.css";

const MessageForm = ({ onNewMessage }) => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      content,
      subject,
    };

    try {
      const response = await axios.post(
        "https://localhost:5001/api/message/add",
        formData
      );

      if (response.status === 201) {
        onNewMessage(formData);
        setSubject("");
        setContent("");
      }
    } catch (error) {
      console.warn("Error sending message:", error);
    }
  };

  return (
    <div className="message-form">
      <form onSubmit={handleSubmit}>
        <h2>Send a Message</h2>
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
          <input value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
