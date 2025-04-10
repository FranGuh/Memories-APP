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
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!inputValue.trim()) return;

  const userMessage = {
    name: "Tú",
    text: inputValue,
    isUser: true
  };
  setMessages(prev => [...prev, userMessage]);
  setInputValue('');
  setIsLoading(true);

  try {
    const response = await fetch('/api/grok', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          ...messages.map(msg => ({
            role: msg.isUser ? "user" : "assistant",
            content: msg.text
          })),
          { 
            role: "user", 
            content: inputValue 
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    setMessages(prev => [...prev, {
      name: "Bot Deepseek",
      text: data.response,
      isUser: false
    }]);
    
  } catch (error) {
    console.error("Error:", error);
    setMessages(prev => [...prev, {
      name: "Bot Deepseek",
      text: "❌ Error al conectar con la API, recarga el chat",
      isUser: false
    }]);
  } finally {
    setIsLoading(false);
  }
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
        {isLoading && (
          <ChatUI
            name="Bot Deepseek"
            text="Escribiendo..."
            isUser={false}
          />
        )}
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
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="Chat__send-btn"
            disabled={isLoading}
          >
            {isLoading ? "..." : <SendHorizonal />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Chat;