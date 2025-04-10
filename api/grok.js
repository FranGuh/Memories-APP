// api/grok.js
import { Groq } from 'groq-sdk';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const groq = new Groq({
  apiKey: process.env.VITE_GROQ_API_KEY || process.env.GROQ_API_KEY
});

// Para uso con Vercel Serverless Functions
export default async function handler(req, res) {
  try {
    const { messages } = req.body;
    const response = await groq.chat.completions.create({
      model: "grok-2",
      messages,
      temperature: 0.7,
    });

    res.status(200).json({ response: response.choices[0].message.content });
  } catch (error) {
    console.error("Error en Groq API:", error);
    res.status(500).json({ error: error.message });
  }
}

// Solo para pruebas locales (opcional)
if (process.env.NODE_ENV === 'development') {
  (async () => {
    const testResponse = await groq.chat.completions.create({
      model: "grok-2",
      messages: [{ role: "user", content: "Hola, ¿cómo estás?" }],
    });
    console.log(testResponse.choices[0].message.content);
  })();
}