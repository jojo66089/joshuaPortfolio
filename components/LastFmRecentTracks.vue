<template>
  <div class="music-container" v-if="showMusic">
    <div class="music-tracks invisible" style="animation: revealb 500ms; animation-delay: 1.2s; animation-fill-mode: forwards;">
      <div v-if="loading" class="loading-state">
        <div class="loading-spinner"></div>
      </div>
      
      <div v-else-if="error" class="error-state">
        <button @click="fetchTracks" class="retry-button">Retry</button>
      </div>
      
      <div v-else-if="tracks.length > 0" class="tracks-container">
        <!-- Transparent marquee container -->
        <div class="tracks-marquee">
          <div class="tracks-scroll">
            <div 
              v-for="(track, index) in [...tracks, ...tracks]" 
              :key="`${index}-${track.name}-${track.artist['#text'] || track.artist}`"
              class="track-item"
              :style="{ animationDelay: `${1.4 + (index % tracks.length) * 0.1}s` }"
            >
              <div class="track-image">
                <img 
                  :src="getTrackImage(track)" 
                  :alt="track.album['#text'] || 'Album cover'"
                  @error="handleImageError"
                />
              </div>
              <div class="track-info">
                <h4 class="track-name">{{ track.name }}</h4>
                <p class="track-artist">{{ track.artist['#text'] || track.artist }}</p>
                <p class="track-album" v-if="track.album && track.album['#text']">{{ track.album['#text'] }}</p>
                <p class="played-at" v-if="track.date">{{ formatPlayedAt(track.date.uts) }}</p>
                <p class="now-playing" v-else-if="track['@attr'] && track['@attr'].nowplaying">Now Playing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Reactive data
const tracks = ref([])
const loading = ref(false)
const error = ref(null)
const showMusic = ref(true)

// Fetch recent tracks from Last.fm
const fetchTracks = async () => {
  try {
    loading.value = true
    error.value = null
    
    const data = await $fetch('/api/lastfm/recent-tracks?user=jojo66089&limit=12')
    tracks.value = data.tracks || []
    
  } catch (err) {
    console.error('Error fetching Last.fm tracks:', err)
    error.value = 'Failed to load recent tracks'
  } finally {
    loading.value = false
  }
}

// Get track image with fallback
const getTrackImage = (track) => {
  if (track.image && Array.isArray(track.image)) {
    // Last.fm provides images in different sizes, get the medium or large one
    const largeImage = track.image.find(img => img.size === 'large')
    const mediumImage = track.image.find(img => img.size === 'medium')
    return largeImage?.['#text'] || mediumImage?.['#text'] || ''
  }
  return ''
}

// Format played at time
const formatPlayedAt = (timestamp) => {
  if (!timestamp) return ''
  
  const date = new Date(parseInt(timestamp) * 1000)
  const now = new Date()
  const diffMs = now - date
  const diffMins = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)
  
  if (diffMins < 60) {
    return `${diffMins}m ago`
  } else if (diffHours < 24) {
    return `${diffHours}h ago`
  } else if (diffDays < 7) {
    return `${diffDays}d ago`
  } else {
    return date.toLocaleDateString()
  }
}

// Handle image loading errors
const handleImageError = (event) => {
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik0yMCAxNkMxOC4zNDMxIDE2IDE3IDE3LjM0MzEgMTcgMTlDMTcgMjAuNjU2OSAxOC4zNDMxIDIyIDIwIDIyQzIxLjY1NjkgMjIgMjMgMjAuNjU2OSAyMyAxOUMyMyAxNy4zNDMxIDIxLjY1NjkgMTYgMjAgMTZaIiBmaWxsPSIjOWNhM2FmIi8+CjxwYXRoIGQ9Ik0yMCAyNEMxNi42ODYzIDI0IDE0IDI2LjY4NjMgMTQgMzBIMjZDMjYgMjYuNjg2MyAyMy4zMTM3IDI0IDIwIDI0WiIgZmlsbD0iIzljYTNhZiIvPgo8L3N2Zz4K'
}

// Initialize component
onMounted(() => {
  // Delay to avoid conflicts with header animation
  setTimeout(() => {
    fetchTracks()
  }, 800)
})
</script>

<style scoped>
.music-container {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
}

.music-tracks {
  background: transparent;
  border-radius: 0;
  padding: 0.25rem 0;
  margin: 0.25rem 0;
  position: relative;
  overflow: hidden;
}

.loading-state, .error-state {
  text-align: center;
  padding: 1rem;
  opacity: 0.7;
}

.loading-spinner {
  width: 30px;
  height: 30px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-top: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

.retry-button {
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.retry-button:hover {
  background: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.9);
}

.tracks-container {
  position: relative;
  overflow: hidden;
  width: 100vw;
  border-top: 9px solid #1916e1df;
  border-bottom: 9px solid #1916e1df;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}

.tracks-marquee {
  overflow: visible;
  white-space: wrap;
  width: 100%;
  padding: 0;
}

.tracks-scroll {
  display: inline-flex;
  gap: 1.5rem;
  animation: marquee 30s linear infinite;
  animation-iteration-count: infinite;
}

.tracks-scroll:hover {
  animation-play-state: paused;
}

.track-item {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0px;
  padding: 0.35rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: all 0.3s ease-in-out;
  animation: slideInUp 0.6s ease-in-out forwards;
  opacity: 0;
  transform: translateY(20px);
  backdrop-filter: blur(50px);
  border: 2px solid rgba(0, 0, 0, 0.05);
  min-width: 280px;
  flex-shrink: 0;
  white-space: normal;
  box-shadow: 0 2px 8px rgba(86, 81, 81, 0.05);
}

.track-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.95);
}

.track-image {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 0px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(64, 62, 62, 0.1);
}

.track-image img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.track-info {
  flex: 1;
  min-width: 0;
}

.track-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #fafafa;
  margin: 0 0 0.2rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.track-artist {
  font-size: 0.8rem;
  color: #ffffff;
  margin: 0 0 0.2rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.track-album {
  font-size: 0.75rem;
  color: #ffffff;
  margin: 0 0 0.2rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.played-at {
  font-size: 0.7rem;
  color: #000000;
  margin: 0;
  font-weight: 500;
}

.now-playing {
  font-size: 0.7rem;
  color: #b30808;
  margin: 0;
  font-weight: 600;
  animation: pulse 2s infinite;
}

.invisible {
  opacity: 0;
  visibility: hidden;
}

@keyframes revealb {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
    visibility: visible;
    opacity: 1;
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

@media (max-width: 768px) {
  .music-tracks {
    padding: 0.5rem 0;
    margin: 0.5rem 0;
  }
  
  .tracks-scroll {
    gap: 1rem;
  }
  
  .track-item {
    padding: 0.5rem;
    min-width: 240px;
  }
  
  .track-image {
    width: 40px;
    height: 40px;
  }
  
  .track-name {
    font-size: 0.8rem;
  }
  
  .track-artist, .track-album {
    font-size: 0.7rem;
  }
}

@media (max-width: 480px) {
  .music-container {
    padding: 0 0.5rem;
  }
  
  .track-item {
    min-width: 200px;
    padding: 0.4rem;
  }
  
  .track-image {
    width: 35px;
    height: 35px;
  }
  
  .track-name {
    font-size: 0.75rem;
  }
  
  .track-artist, .track-album {
    font-size: 0.65rem;
  }
}
</style>