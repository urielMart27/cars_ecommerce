import React from "react";

const MessagesList = ({ messages }) => {
  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>From: {message.senderId}</strong>
            <p>Subject: {message.subject}</p>
            <p>{message.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessagesList;
