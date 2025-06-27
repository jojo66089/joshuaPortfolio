import crypto from 'crypto'

export default defineEventHandler(async (event) => {
  const API_KEY = 'a9ce580d492dc746be05a9cf9e57ec3b'
  const query = getQuery(event)
  const { user = 'jojo66089', limit = 10 } = query // Default to your username
  
  try {
    // Construct the API URL for Last.fm
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${API_KEY}&format=json&limit=${limit}`
    
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`Last.fm API error: ${response.status}`)
    }
    
    const data = await response.json()
    
    if (data.error) {
      throw new Error(`Last.fm error: ${data.message}`)
    }
    
    return {
      tracks: data.recenttracks?.track || [],
      user: data.recenttracks?.['@attr']?.user || user,
      total: data.recenttracks?.['@attr']?.total || 0
    }
    
  } catch (error) {
    console.error('Last.fm API error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch recent tracks from Last.fm'
    })
  }
})