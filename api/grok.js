export const config = {
  runtime: 'edge',
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

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'qwen-qwq-32b', // ✅ modelo corregido
        messages,                          // ✅ recibe desde el frontend
        temperature: 0.6
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Groq API error:', error); // 👈 importante para debug
      throw new Error(error?.error?.message || 'Error desconocido de Groq');
    }

    const data = await response.json();
    const cleaned = data.choices[0].message.content.replace(/<think>[\s\S]*?<\/think>/g, '').trim();

    return new Response(JSON.stringify({ response: cleaned }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error en Groq API:', error);

    if (error.message?.includes('Request too large')) {
      return new Response(JSON.stringify({
        error: 'Gracias por usar el chatbot. Has alcanzado el límite de tokens en esta sesión demo. Por favor, inicia un nuevo chat para continuar.'
      }), {
        status: 413,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ error: error.message || 'Error interno del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
