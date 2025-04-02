import React from 'react'
import ChatUI from './ChatUI/ChatUser'
import './Chat.css'

const Chat = () => {
  return (
    <section className='Chat'>
        <div className="Chat__header">
            <p className='Chat__title'>{name}</p>
        </div>
        <div className='Chat__messages'>
            <ChatUI
              name="Bot Deepseek"
              text="Soy DeepSeek Chat, tu asistente de inteligencia artificial creado por DeepSeek.
               Estoy aquí para ayudarte con cualquier pregunta que tengas, desde información general, consejos,
              ayuda con estudios, hasta curiosidades y mucho más."
            />
            <ChatUI
              name="Bot Deepseek"
              text="Soy DeepSeek Chat, tu asistente de inteligencia artificial creado por DeepSeek.
               Estoy aquí para ayudarte con cualquier pregunta que tengas, desde información general, consejos,
              ayuda con estudios, hasta curiosidades y mucho más."
            />
        </div>
        
    </section>
  )
}

export default Chat

