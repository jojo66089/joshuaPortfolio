<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="image-container">
    <div id="header">
      <img src="~assets/1xx/1x/1x/1x/Asset 24.png">
      <div class="button-container">
    
        <div class="button-row-container">
          <NuxtLink to="/projects" class="projects-button">
          <button class="projects-button">
            <img src="~assets/1xx/1x/Asset 5.png" alt="buttonpng" border="0" />
          </button>
          <img src="~assets/1xx/1x/1x/Asset 17.png" alt="buttonpng" border="0" />
        </NuxtLink>
        </div>


        <div class="button-row-container">
          <NuxtLink to="/resume" class="resume-button">
          <button class="resume-button">
            <img src="~assets/1xx/1x/Asset 9.png" alt="buttonpng" border="0" />
          </button>
          <img src="~assets/Asset 20.png" alt="buttonpng" border="0" />
        </NuxtLink> 
        </div>

        <div class="button-row-container">
          <NuxtLink to="/contact" class="contact-button2">
          <button class="contact-butto2n">
            <img src="~assets/Asset 7.png" alt="buttonpng" border="0" />
          </button>
          <img src="~assets/Asset 21.png" alt="buttonpng" border="0" />
        </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>