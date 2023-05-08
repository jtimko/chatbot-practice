"use server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const api = process.env.CHAT_API;
  const { data } = await req.json();

  const body = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "assistant",
        content: `${data}`,
      },
    ],
  };

  const results = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${api}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const d = await results.json();

  return NextResponse.json({ gpt: d.choices[0].message.content });
}
