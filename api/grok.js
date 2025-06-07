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
      model: 'llama-3.3-70b-versatile',
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
  
    const errorMessage = error?.error?.error?.message || '';
  
    if (errorMessage.includes('Request too large')) {
      return new Response(JSON.stringify({
        error: 'Gracias por usar el chatbot. Has alcanzado el límite de tokens en esta sesión demo. Por favor, inicia un nuevo chat para continuar.'
      }), {
        status: 413,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
}
