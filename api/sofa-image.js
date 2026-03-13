// api/sofa-image.js
// Proxy para imágenes de Sofascore — evita bloqueo CORS en producción
export default async function handler(req, res) {
  const { type, id } = req.query

  if (!type || !id) {
    return res.status(400).json({ error: 'Missing type or id' })
  }

  const validTypes = ['team', 'player']
  if (!validTypes.includes(type)) {
    return res.status(400).json({ error: 'Invalid type' })
  }

  try {
    const url = `https://api.sofascore.com/api/v1/${type}/${id}/image`
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://www.sofascore.com/',
        'Accept': 'image/webp,image/png,image/*',
      },
    })

    if (!response.ok) {
      return res.status(response.status).end()
    }

    const contentType = response.headers.get('content-type') || 'image/png'
    const buffer = await response.arrayBuffer()

    res.setHeader('Content-Type', contentType)
    res.setHeader('Cache-Control', 'public, max-age=86400') // cache 24h
    res.send(Buffer.from(buffer)) // eslint-disable-line no-undef
  } catch {
    res.status(500).end()
  }
}