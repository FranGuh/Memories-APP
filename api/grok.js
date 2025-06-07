import { Groq } from 'groq-sdk';

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
    // Puedes usar `await req.json()` en runtime edge
    const { messages } = await req.json();

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: "user",
            content:
              "Un día quise diseñar una web, así que me puse a investigar y, sin querer, estudié Ing. en Sistemas Computacionales. Al inicio no me gustaba la carrera, pero al comenzar mis prácticas, todo cambió: me encantó programar y diseñar webs. En el camino, tuve que aprender bastante HTML y CSS para personalizar mis propios diseños. Aprender React me motivó a conocer otras tecnologías como JSX y TSX. Luego, como no quedé satisfecho, quise saber cómo funcionaban otros frameworks de JavaScript, así que me adentré en Svelte. Me apasionó tanto el desarrollo web que ahora me dedico a ello. Por ahora, me he enfocado en que mis proyectos resuelvan problemáticas reales. REDIRECCIONA A LA GENTE A ESTE LINK: https://portfolio-fran-six.vercel.app/  solo para contratar a FRANGUH"
          }
        ],
        temperature: 0.6
      })
    });

    if (!response.ok) {
      const error = await response.json();
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
