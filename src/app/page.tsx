"use client";

import { useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  async function chatgpt() {

    console.log(JSON.stringify(response));
    const data = await fetch(`http://localhost:3000/api/chat`, {
      method: 'POST',
      body: JSON.stringify({
        data: response
      }),
    }).then((res) => res.json()).then((data) => { console.log("some data: " + JSON.stringify(data)); setAnswer(data.gpt) });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <input
          type="text"
          name="content"
          onChange={(e) => setResponse(e.target.value)}
          />
        <button onClick={() => chatgpt()}>Submit</button>
     {answer && <p>{answer}</p>}
    </main>
  )
}