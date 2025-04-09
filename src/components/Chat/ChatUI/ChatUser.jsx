import React from 'react';
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
          <p className='ChatUI__message__text'>{text}</p>
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
  )
}

export default ChatUI;