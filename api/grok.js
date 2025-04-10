import { Groq } from 'groq-sdk';

export const config = {
  runtime: 'edge', // Esto indica que usarás el runtime Edge de Vercel
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método no permitido' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { messages } = await req.json();

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const response = await groq.chat.completions.create({
      model: 'qwen-qwq-32b',
      messages,
      temperature: 0.6
    });

    // Aquí limpiamos la respuesta de cualquier texto dentro de <think>...</think>
    const cleanedResponse = response.choices[0].message.content.replace(/<think>[\s\S]*?<\/think>/g, '').trim();

    return new Response(JSON.stringify({
      response: cleanedResponse
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error en Groq API:', error);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
