<template>
  <div class="home-button-container" :class="{ 'show-button': isAtBottom }">
    <NuxtLink to="/" class="projects-button" @click="scrollToTop">
      <button class="home-button">
        <img src="~assets/1xx/1x/1x/1x/Asset 42.png" alt="Home Button" />
      </button>
      <img src="~assets/1xx/1x/1x/Asset 17.png" alt="buttonpng" class="secondary-img" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isAtBottom = ref(false);

const checkScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  // Show button when within 100px of bottom
  isAtBottom.value = documentHeight - scrollPosition < 100;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  // Check initial position
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });
};
</script>

<style scoped>
.home-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.show-button {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.projects-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  width: auto;
}

.home-button {
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:  0px;
  margin-top: -15px;
  width: auto;
}

.home-button img {
  max-width: 30%;
  max-height: 30%;
  width: auto;
  height: auto;
  object-fit: contain;
  -webkit-transform: translateZ(0); /* Safari fix */
  transform: translateZ(0);
}

.secondary-img {
  max-width: 30%;
  height: auto;
  width: auto;
  object-fit: contain;
  -webkit-transform: translateZ(0); /* Safari fix */
  transform: translateZ(0);
  transition: 0.3s ease-in-out;
}

/* Safari-specific fixes */
@supports (-webkit-touch-callout: none) {
  .home-button img,
  .secondary-img {
    width: 30%;
    height: auto;
    aspect-ratio: 1;
    object-fit: contain;
  }

  .projects-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}

.projects-button:hover .secondary-img {
  z-index: 3;
  animation: strobe 0.5s infinite alternate;
  filter: brightness(0) invert(1);
}

@keyframes strobe {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

@media (max-width: 480px) {
  .home-button-container {
    bottom: 0;
    padding-bottom: 0;
  }

  .home-button img {
    max-width: 25%;
    max-height: 25%;
    width: auto;
    height: auto;
    object-fit: contain;
  }

  .secondary-img {
    max-width: 25%;
    max-height: 25%;
    width: auto;
    height: auto;
    object-fit: contain;
  }

  .projects-button {
    transform: scale(0.8);
  }

  /* Safari mobile fixes */
  @supports (-webkit-touch-callout: none) {
    .home-button img,
    .secondary-img {
      width: 25%;
      height: auto;
      aspect-ratio: 1;
    }
  }
}

@media (max-width: 320px) {
  .home-button img,
  .secondary-img {
    max-width: 20%;
    max-height: 20%;
  }

  /* Safari mobile fixes */
  @supports (-webkit-touch-callout: none) {
    .home-button img,
    .secondary-img {
      width: 20%;
      height: auto;
      aspect-ratio: 1;
    }
  }
}
</style>