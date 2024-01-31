import React from "react";
import MessageItem from "../MessageItem/MessageItem";

const MessagesList = ({ messages = [] }) => {
  const messageItems = messages.map((message) => (
    <MessageItem
      key={message.id}
      subject={message.subject}
      content={message.content}
    />
  ));
  return (
    <div>
      <h2>Messages</h2>
      <div>{messageItems}</div>
    </div>
  );
};

export default MessagesList;
