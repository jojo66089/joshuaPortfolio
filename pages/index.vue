<script setup lang="ts">
import headerTitle from '~/components/headerTitle.vue';
import LastFmRecentTracks from '~/components/LastFmRecentTracks.vue';
import ParallaxStars from '~/components/ParallaxStars.vue';
const route = useRoute()
</script>

<template>
  <header class="header">
    <LastFmRecentTracks></LastFmRecentTracks>
    <ParallaxStars />
    <headerTitle></headerTitle>
   <!--- 
    <div class="intro">
      <div class="right">
        <img src="~assets/1xx/1x/1x/1x/1x/Asset 26.png" alt="">

      </div>
      <div class="logo">
        <img src="~assets/1xx/1x/1x/1x/1x/Asset 3.png" alt="">
      </div>

    
      <div class="left">
        <img src="~assets/1xx/1x/1x/1x/1x/Asset 27.png" alt="">
      </div>

    </div>
-->
    <nav class="button-group" aria-label="Primary Navigation">
      <NuxtLink to="/projects" class="btn-row" aria-label="Projects">
        <img src="~/assets/1xx/1x/Asset 4.png" alt="Projects button" />
        <img src="~/assets/1xx/1x/1x/Asset 17.png" alt="" aria-hidden="true" />
      </NuxtLink>

      <NuxtLink to="/resume" class="btn-row" aria-label="Resume">
        <img src="~/assets/1xx/1x/Asset 41.png" alt="Resume button" />
        <img src="~/assets/1xx/1x/1x/Asset 20.png" alt="" aria-hidden="true" />
      </NuxtLink>

      <NuxtLink to="/contact" class="btn-row" aria-label="Contact">
        <img src="~/assets/1xx/1x/Asset 6.png" alt="Contact button" />
        <img src="~/assets/1xx/1x/1x/Asset 21.png" alt="" aria-hidden="true" />
      </NuxtLink>
    </nav>

  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
html, body, * {
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
}

.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 950px;
}

.btn-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.btn-row:hover {
  transform: translateY(-5px);
}

.btn-row img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .button-group {
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .btn-row img {
    max-width: 80%;
  }
}

@media (max-width: 480px) {
  .button-group {
    gap: 1rem;
    margin-top: 1rem;
  }

  .btn-row img {
    max-width: 70%;
  }
}
</style>