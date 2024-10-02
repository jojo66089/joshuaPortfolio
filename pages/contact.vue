<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div id="header">
    <img src="/Users/joshuaguillen/Desktop/website_portfolio/joshuaPortfolio/joshuaPortfolio/1xx/1x/1x/1x/Asset 24.png" alt="Logo">

    <div class="contact-page">
      <h2>Contact Me</h2>

      <!-- LinkedIn Button -->
      <div class="button-container">
        <a href="https://www.linkedin.com/in/joshua-guillen-07b388231/" target="_blank" class="contact-button">
          <img src="/Users/joshuaguillen/Desktop/website_portfolio/joshuaPortfolio/joshuaPortfolio/1xx/1x/1x/1x/circle-linkedin-512.webp"> <i class="fab fa-linkedin"></i> LinkedIn 
        </a>
      </div>

      <!-- Email Button -->
      <div class="button-container">
        <a href="mailto:jg6949@nyu.edu" class="contact-button">
          <img src="/Users/joshuaguillen/Desktop/website_portfolio/joshuaPortfolio/joshuaPortfolio/1xx/1x/1x/1x/Email_icon.png"><i class="fas fa-envelope"></i> Email
        </a>
      </div>
        <div class="button-row-container3">
              <NuxtLink to="/" class="projects-button">
                  <button class="home-button">
                      <img src="/Users/joshuaguillen/Desktop/website_portfolio/joshuaPortfolio/joshuaPortfolio/1xx/1x/1x/1x/Asset 25.png" alt="buttonpng" border="0" />
                  </button>
                  <img src="/Users/joshuaguillen/Desktop/website_portfolio/joshuaPortfolio/joshuaPortfolio/1xx/1x/1x/Asset 17.png" alt="buttonpng" border="0" />
              </NuxtLink>
    </div>
  </div>
</div>

</template>