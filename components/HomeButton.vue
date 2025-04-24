<template>
  <div class="home-button-container">
    <NuxtLink to="/" class="projects-button">
      <button class="home-button">
        <img src="~assets/1xx/1x/1x/1x/Asset 25.png" alt="Home Button" />
      </button>
      <img src="~assets/1xx/1x/1x/Asset 17.png" alt="buttonpng" class="secondary-img" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
// No additional script needed for simple navigation
</script>

<style scoped>
.home-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}

.projects-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
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
  margin-bottom: 20px;
}

.home-button img {
  max-width: 30%;
  height: 30%;
  transition: 0.3s ease;
}

.secondary-img {
  max-width: 30%;
  height: 30%;
  transition: 0.3s ease-in-out;
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
</style>