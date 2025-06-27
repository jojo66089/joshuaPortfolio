export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { q, type = 'track', limit = 10 } = query
  
  if (!q) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Search query is required'
    })
  }
  
  try {
    // Get access token first
    const authResponse = await $fetch('/api/spotify/auth')
    
    // Search Spotify
    const searchResponse = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(q as string)}&type=${type}&limit=${limit}`,
      {
        headers: {
          'Authorization': `Bearer ${authResponse.access_token}`
        }
      }
    )
    
    if (!searchResponse.ok) {
      throw new Error('Failed to search Spotify')
    }
    
    const data = await searchResponse.json()
    return data
    
  } catch (error) {
    console.error('Spotify search error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to search Spotify'
    })
  }
})