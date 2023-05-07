async function content(formData: FormData) {
  "use server";

  const api = process.env.CHAT_API;

  if (api && formData.get("content")) {
    const data = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/81.0',
          'Authorization': `Bearer ${api}`,
          'Content-Type': 'application/json',
      },
      body: '{"model": "gpt-3.5-turbo", "message":[{"role": "assistant", "content": "How do I say blue in spanish?"}]}'
    }).then(d => console.log(d));
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={content} method="post">
        <input
          type="text"
          name="content"
          />
        <button type="submit">Submit</button>
      </form>
     
    </main>
  )
}
