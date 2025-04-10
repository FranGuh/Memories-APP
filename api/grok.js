// api/grok.js (para Vercel)
const { Groq } = require('groq-sdk');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Solo se permite POST' });
  }

  try {
    const { messages } = req.body;

    const response = await groq.chat.completions.create({
      model: 'grok-2',
      messages,
      temperature: 0.7,
    });

    res.status(200).json({ response: response.choices[0].message.content });
  } catch (error) {
    console.error('Error en Groq API:', error);
    res.status(500).json({ error: 'Error al conectar con Groq' });
  }
};
