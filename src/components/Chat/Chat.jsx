import React from 'react'
import ChatUI from './ChatUI/ChatUser'
import './Chat.css'
import { SendHorizonal } from 'lucide-react'

const Chat = () => {
  return (
    <section className='Chat'>
        <div className="Chat__header">
            <p className='Chat__title'>DeepSeek Bot</p>
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
        <div className="Chat__form">
              <form action="#" method="#" className="Chat__form-container">
                <textarea className="Chat__input" placeholder="Pregúntame algo!"></textarea>
                <button type="submit" className="Chat__send-btn"><SendHorizonal /></button>
              </form>
        </div>
          
    </section>
  )
}

export default Chat

