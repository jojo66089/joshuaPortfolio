<script setup lang="ts">
const route = useRoute();
</script>

<template>
 <div id="header">
    <img src="~assets/1xx/1x/1x/1x/Asset 24.png" alt="Logo">

    <div class="contact-page">

      <!-- LinkedIn Button -->
      <div class="button-container">
        <a href="https://www.linkedin.com/in/joshua-guillen-07b388231/" target="_blank" class="contact-button">
          <img src="~assets/1xx/1x/1x/1x/circle-linkedin-512.webp"> <i class="fab fa-linkedin"></i> LinkedIn 
        </a>
      </div>

      <!-- Email Button -->
      <div class="button-container">
        <a href="mailto:jg6949@nyu.edu" class="contact-button">
          <img src="~assets/1xx/1x/1x/1x/Email_icon.png"><i class="fas fa-envelope"></i> Email
        </a>
      </div>
  </div>
</div>
 <HomeButton />
</template>