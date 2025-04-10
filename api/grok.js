import { Groq } from 'groq-sdk';

export default async function handler(req, res) {
  // Configura CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Content-Type', 'application/json');

  // Solo aceptar solicitudes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    // Verifica que el body exista y sea JSON
    if (!req.body || typeof req.body !== 'object') {
      return res.status(400).json({ error: 'Cuerpo de solicitud inválido' });
    }

    const { messages } = req.body;
    
    // Validación adicional
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Formato de mensajes inválido' });
    }

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    });

    const response = await groq.chat.completions.create({
      model: "mixtral-8x7b-32768",
      messages,
      temperature: 0.7,
    });

    return res.status(200).json({ 
      response: response.choices[0].message.content 
    });
    
  } catch (error) {
    console.error("Error en Groq API:", error);
    return res.status(500).json({ 
      error: error.message || "Error al procesar la solicitud" 
    });
  }
}