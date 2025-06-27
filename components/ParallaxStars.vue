<template>
  <div class="parallax-stars-container">
    <!-- Left side stars -->
    <div 
      v-for="(star, index) in leftStars" 
      :key="`left-${index}`"
      class="parallax-star left-star"
      :class="{ 'star-revealed': star.isRevealed }"
      :style="{
        top: star.top,
        left: star.left,
        transform: `translateY(-${scrollY * star.speed}px)`,
        zIndex: star.zIndex
      }"
    >
      <img 
        :src="star.src" 
        :alt="`Star ${star.id}`" 
        class="star-image"
        :class="`twinkle-${star.twinkleDirection}`"
        :style="{ animationDelay: star.animationDelay }"
      />
    </div>

    <!-- Right side stars -->
    <div 
      v-for="(star, index) in rightStars" 
      :key="`right-${index}`"
      class="parallax-star right-star"
      :class="{ 'star-revealed': star.isRevealed }"
      :style="{
        top: star.top,
        right: star.right,
        transform: `translateY(-${scrollY * star.speed}px)`,
        zIndex: star.zIndex
      }"
    >
      <img 
        :src="star.src" 
        :alt="`Star ${star.id}`" 
        class="star-image"
        :class="`twinkle-${star.twinkleDirection}`"
        :style="{ animationDelay: star.animationDelay }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Import star images
import Star1 from '~/assets/1xx/1x/Star1.png'
import Star2 from '~/assets/1xx/1x/Star2.png'
import Star3 from '~/assets/1xx/1x/Star3.png'
import Star4 from '~/assets/1xx/1x/Star4.png'

const scrollY = ref(0)

// Define star configurations for left side (zig-zag pattern)
const leftStars = ref([
  {
    id: 1,
    src: Star1,
    top: '28%',
    left: '2%',
    speed: 0.3,
    zIndex: -1,
    twinkleDirection: 'right', // moves from left to original to right
    animationDelay: '0s',
    isRevealed: false,
    revealDelay: 750 // Base delay
  },
  {
    id: 3,
    src: Star2,
    top: '48%',
    left: '1%',
    speed: 0.5,
    zIndex: -1,
    twinkleDirection: 'left', // moves from right to original to left
    animationDelay: '0.35s',
    isRevealed: false,
    revealDelay: 950 // 200ms after first
  },
  {
    id: 2,
    src: Star3,
    top: '75%',
    left: '3%',
    speed: 0.2,
    zIndex: -1,
    twinkleDirection: 'right', // moves from left to original to right
    animationDelay: '0.7s',
    isRevealed: false,
    revealDelay: 1750 // 200ms after second
  }
])

// Define star configurations for right side (zig-zag pattern)
const rightStars = ref([
  {
    id: 4,
    src: Star4,
    top: '28%',
    right: '2%',
    speed: 0.4,
    zIndex: -1,
    twinkleDirection: 'left', // moves from right to original to left
    animationDelay: '0.2s',
    isRevealed: false,
    revealDelay: 750 // 100ms after first left star
  },
  {
    id: 1,
    src: Star1,
    top: '55%',
    right: '1%',
    speed: 0.6,
    zIndex: -1,
    twinkleDirection: 'right', // moves from left to original to right
    animationDelay: '0.5s',
    isRevealed: false,
    revealDelay: 1080 // 200ms after first right star
  },
  {
    id: 3,
    src: Star3,
    top: '85%',
    right: '3%',
    speed: 0.3,
    zIndex: -1,
    twinkleDirection: 'left', // moves from right to original to left
    animationDelay: '0.1s',
    isRevealed: false,
    revealDelay: 1850 // 200ms after second right star
  }
])

// Handle scroll event for parallax effect
const handleScroll = () => {
  scrollY.value = window.scrollY
}

// Reveal stars with staggered timing
const revealStars = () => {
  // Reveal left stars
  leftStars.value.forEach((star, index) => {
    setTimeout(() => {
      star.isRevealed = true
    }, star.revealDelay)
  })

  // Reveal right stars
  rightStars.value.forEach((star, index) => {
    setTimeout(() => {
      star.isRevealed = true
    }, star.revealDelay)
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Start the reveal animation after 450ms
  setTimeout(() => {
    revealStars()
  }, 450)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.parallax-stars-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.parallax-star {
  position: fixed;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.3);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.parallax-star.star-revealed {
  opacity: 0.7;
  transform: scale(1);
}

.parallax-star:hover {
  opacity: 0.9;
}

.star-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
  filter: drop-shadow(10px 10px 10px rgba(255, 255, 255, 0.3));
}

/* Responsive sizing */
@media (max-width: 768px) {
  .star-image {
    width: 90px;
    height: 90px;
  }
  
  .left-star {
    left: 1% !important;
  }
  
  .right-star {
    right: 1% !important;
  }
}

@media (max-width: 480px) {
  .star-image {
    width: 190px;
    height: 190px;
  }
}

/* Ensure stars stay behind content */
.left-star,
.right-star {
  z-index: -1 !important;
}

/* Twinkle animations */
.twinkle-left {
  animation: twinkleLeft 0.7s  infinite alternate;
  animation-timing-function: steps(2, end);
}

.twinkle-right {
  animation: twinkleRight 0.7s  infinite alternate;
  animation-timing-function: steps(2, end);
}

@keyframes twinkleLeft {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(15deg);
  }
}

@keyframes twinkleRight {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(15deg);
  }
}

/* Responsive twinkle adjustments */
@media (max-width: 768px) {
  @keyframes twinkleLeft {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-12deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes twinkleRight {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(12deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
}

@media (max-width: 480px) {
  @keyframes twinkleLeft {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes twinkleRight {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
}
</style>