import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido. Usa POST.' });
  }

  try {
    //  Obtener los mensajes del frontend
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Formato de mensajes inválido' });
    }


    const chatCompletion = await groq.chat.completions.create({
      messages: messages,
      model: 'qwen/qwen3-32b', // Tu modelo elegido
      temperature: 0.6,
    });


    const rawContent = chatCompletion.choices[0]?.message?.content || "";


    const cleanedContent = rawContent.replace(/<think>[\s\S]*?<\/think>/g, '').trim();


    return res.status(200).json({ 
      response: cleanedContent 
    });

  } catch (error) {
    console.error('Error en Groq SDK:', error);
    

    if (error.status === 429 || (error.message && error.message.includes('Rate limit'))) {
       return res.status(429).json({ error: 'Has alcanzado el límite de peticiones. Intenta más tarde.' });
    }

    return res.status(500).json({ error: error.message || 'Error interno del servidor' });
  }
}