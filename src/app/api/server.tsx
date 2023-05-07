"use server";

import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    const api = process.env.CHAT_API;

    const body = req.body;

    if (!body.content)
        res.status(404).json({data: "Error"});
    else {
        const data = await fetch(`https://api.openai.com/v1/chat/completions`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${api}`,
                'Content-Type': 'application/json',
            },
            body: `{"model": "gpt-3.5-turbo", "message":{"role": "assistant", "content": ${body.content}}]}`
        }).then(d => console.log(d));
    }
}