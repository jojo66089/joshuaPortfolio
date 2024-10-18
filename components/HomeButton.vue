<template>
    <div class="home-button-container">
      <NuxtLink to="/" class="projects-button">
        <button class="home-button">
          <img src="~assets/1xx/1x/1x/1x/Asset 25.png" alt="Home Button" />
        </button>
        <img src="~assets/1xx/1x/1x/Asset 17.png" alt="buttonpng" border="0" />
      </NuxtLink>
    </div>
  </template>
  
  <script setup lang="ts">
  // No additional script needed for simple navigation
  </script>
  
  <style scoped>
  .home-button-container {
    position: relative; /* Stays at the bottom even when scrolling */
  left: 50%; /* Center horizontally */
  bottom: 20px; /* Adjust distance from the bottom */
  transform: translateX(-50%); /* Offset to perfectly center */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px; /* Adjust width as needed */
  margin-top: 100px;
  }
  .home-button-container img{
    position: relative; /* Stays at the bottom even when scrolling */
    left: 50%; /* Center horizontally */
    bottom: 20px; /* Adjust distance from the bottom */
    transform: translateX(-50%); /* Offset to perfectly center */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px; /* Adjust width as needed */
    margin-top: 100px;
    transition: 0.3s ease-in-out;
  }
  .home-button-container:hover img{
    z-index: 3;
  animation: strobe 0.5s infinite alternate;
  filter: brightness(0) invert(1);
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
  max-width: 100px;
  max-height: 100px;
  transition: 0.3s ease;
  margin-top: 10px;
  }

  @keyframes strobe {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}
  </style>
  