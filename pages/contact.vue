<script setup lang="ts">
import headerTitle from '~/components/headerTitle.vue';
import HomeButton from '../components/HomeButton.vue';
const route = useRoute()
</script>

<template>

   <headerTitle></headerTitle>

  

      <!-- LinkedIn Button -->
      <div class="flex flex-row justify-center invisible" style = "animation: revealb 500ms; animation-delay:0.5s; animation-fill-mode:forwards;">
        <a href="https://www.linkedin.com/in/joshua-guillen-07b388231/" target="_blank" class="p-8 items-center">
          <img src="~assets/1xx/1x/1x/1x/circle-linkedin-512.webp" class="content-center"> <i class="fab fa-linkedin"></i> LinkedIn 
        </a>
      
        <a href="mailto:jg6949@nyu.edu" class="contact-button">
          <img src="~assets/1xx/1x/1x/1x/Email_icon.png"><i class="fas fa-envelope"></i> Email
        </a>

      </div>
 <HomeButton />
</template>