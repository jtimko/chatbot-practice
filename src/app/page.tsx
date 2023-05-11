"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  async function chatgpt() {
    const data = await fetch(`/api/chat`, {
      method: 'POST',
      body: JSON.stringify({
        data: response
      }),
    }).then((res) => res.json()).then((data) => { setAnswer(data.gpt); });
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <input
          type="text"
          name="content"
          onChange={(e) => setResponse(e.target.value)}
          style={{ padding: "10px"}}
          />
        <button onClick={() => chatgpt()}>Submit</button>
     {answer && <p>{answer}</p>}
    </main>
  )
}