import { Groq } from 'groq-sdk';

// Esta función debe exportarse así para que Vercel la reconozca (ESM)
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { messages } = await req.json(); // Si usas Next.js, sería req.body
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const response = await groq.chat.completions.create({
      model: 'grok-2',
      messages,
      temperature: 0.7
    });

    return res.status(200).json({ response: response.choices[0].message.content });
  } catch (error) {
    console.error('Error en Groq API:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
