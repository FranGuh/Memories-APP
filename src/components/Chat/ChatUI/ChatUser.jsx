import React from 'react';
import ReactMarkdown from 'react-markdown';
import './ChatUser.css';

const ChatUI = ({ name, text, isUser }) => {
  return (
    <div className={`ChatUI ${isUser ? 'user-message' : 'bot-message'}`}>
      {!isUser && (
        <img 
          className="ChatUI__img" 
          src="/UserImg/UserIcon.jpg" 
          alt="Bot" 
        />
      )}
      <div className="ChatUI__content">
        <p className='ChatUI__username'>{name}</p>
        <div className="ChatUI__message">
          <ReactMarkdown className="ChatUI__message__text">{text}</ReactMarkdown>
        </div>
      </div>
      {isUser && (
        <img 
          className="ChatUI__img" 
          src="/UserImg/UserIcon2.webp" 
          alt="User" 
        />
      )}
    </div>
  );
};

export default ChatUI;
