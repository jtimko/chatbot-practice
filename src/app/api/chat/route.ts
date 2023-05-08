"use server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {  
    const api = process.env.CHAT_API;
    const { data } = await req.json();
  

    const body = {
      model: "gpt-3.5-turbo",
      messages: [{
        role: "assistant",
        content: `${data}`,
      }]
    }

      const results = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/81.0',
            'Authorization': `Bearer ${api}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const d = await results.json();
      
      return NextResponse.json({"gpt": d.choices[0].message.content});
}
  
  