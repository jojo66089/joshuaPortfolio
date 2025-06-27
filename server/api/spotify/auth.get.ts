export default defineEventHandler(async (event) => {
  const CLIENT_ID = '8f11915d1d214a6fa525811ab83ea0e5'
  const CLIENT_SECRET = '40e7a4cc9162462eb811ce82954f80c9'
  
  try {
    // Get access token using Client Credentials flow
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')
      },
      body: 'grant_type=client_credentials'
    })
    
    if (!response.ok) {
      throw new Error('Failed to get access token')
    }
    
    const data = await response.json()
    
    return {
      access_token: data.access_token,
      token_type: data.token_type,
      expires_in: data.expires_in
    }
  } catch (error) {
    console.error('Spotify auth error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to authenticate with Spotify'
    })
  }
})