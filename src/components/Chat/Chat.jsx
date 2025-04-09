import React, { useState, useRef, useEffect } from 'react';
import ChatUI from './ChatUI/ChatUser';
import './Chat.css';
import { SendHorizonal } from 'lucide-react';

const Chat = () => {
  const [messages, setMessages] = useState([ 
    {
      name: "Bot Deepseek",
      text: "Soy DeepSeek Chat, tu asistente de inteligencia artificial creado por DeepSeek. Estoy aquí para ayudarte con cualquier pregunta que tengas, desde información general, consejos, ayuda con estudios, hasta curiosidades y mucho más.",
      isUser: false
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      name: "Tú",
      text: inputValue,
      isUser: true
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = {
        name: "Bot Deepseek",
        text: "Gracias por tu mensaje. Estoy procesando tu pregunta...", // In a real app, this would be an API call
        isUser: false
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <section className='Chat'>
      <div className="Chat__header">
        <p className='Chat__title'>DeepSeek Bot</p>
      </div>
      <div className='Chat__messages'>
        {messages.map((message, index) => (
          <ChatUI
            key={index}
            name={message.name}
            text={message.text}
            isUser={message.isUser}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="Chat__form">
        <form onSubmit={handleSubmit} className="Chat__form-container">
          <textarea 
            className="Chat__input" 
            placeholder="Pregúntame algo!"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <button type="submit" className="Chat__send-btn">
            <SendHorizonal />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Chat;