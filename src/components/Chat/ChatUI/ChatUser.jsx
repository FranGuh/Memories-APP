import React from 'react';
import './ChatUser.css';

const ChatUI = ({name, text}) => {
  return (
    <>
        <div className="ChatUI">
            <img className="ChatUI__img" src="/UserImg/UserIcon.jpg" alt="Usuario" />
            <p className='ChatUI__username'>{name}</p>
            <div className="ChatUI__message">
              <p className='ChatUI__message__text'>{text}</p>
            </div>
        </div>
    </>
  )
}

export default ChatUI
