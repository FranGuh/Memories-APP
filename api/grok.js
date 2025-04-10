// api/grok.js
const { Groq } = require('groq-sdk');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
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
    console.error('❌ Error al llamar a la API de Groq:', error);
    res.status(500).json({ error: 'Error interno en el servidor' });
  }
};
