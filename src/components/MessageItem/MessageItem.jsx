import "./MessageItem.css";

const MessageItem = ({ subject, content }) => {
  return (
    <div className="message-item">
      <span>{subject}</span>
      <span>{content}</span>
    </div>
  );
};

export default MessageItem;
