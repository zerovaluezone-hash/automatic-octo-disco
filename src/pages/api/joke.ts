import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  joke?: string
  error?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    // Primary: JokeAPI (supports single & twopart jokes)
    const r = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit');
    const data = await r.json();

    if (data && data.type) {
      if (data.type === 'single') {
        return res.status(200).json({ joke: data.joke })
      }
      if (data.type === 'twopart') {
        return res.status(200).json({ joke: `${data.setup}\n\n${data.delivery}` })
      }
    }

    // Fallback to official-joke-api if the above doesn't return expected shape
    const f = await fetch('https://official-joke-api.appspot.com/random_joke')
    const fj = await f.json()
    if (fj && fj.setup && fj.punchline) {
      return res.status(200).json({ joke: `${fj.setup}\n\n${fj.punchline}` })
    }

    return res.status(500).json({ error: 'No joke available' })
  } catch (err) {
    console.error('Joke API error', err)
    return res.status(500).json({ error: 'Failed to fetch joke' })
  }
}
