<script setup lang="ts">
import headerTitle from '~/components/headerTitle.vue';
import HomeButton from '../components/HomeButton.vue';
const route = useRoute()
</script>

<template>
  <headerTitle></headerTitle>
  
  <div class="contact-container">
    <div class="contact-content" style="animation: revealb 500ms; animation-delay: 0.5s; animation-fill-mode: forwards;">
      <h1 class="contact-title">Let's Connect</h1>
      <p class="contact-subtitle">Feel free to reach out through any of these channels</p>
      
      <div class="contact-links">
        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/joshua-guillen-07b388231/" 
           target="_blank" 
           class="contact-link linkedin">
          <div class="icon-container">
            <img src="~assets/1xx/1x/1x/1x/circle-linkedin-512.webp" alt="LinkedIn" class="contact-icon">
          </div>
          <span class="link-text">LinkedIn</span>
        </a>

        <!-- Email -->
        <a href="mailto:jg6949@nyu.edu" 
           class="contact-link email">
          <div class="icon-container">
            <img src="~assets/1xx/1x/1x/1x/Email_icon.png" alt="Email" class="contact-icon">
          </div>
          <span class="link-text">Email</span>
        </a>
      </div>
    </div>
  </div>

  <HomeButton />
</template>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 2rem;
  padding-bottom: 160px;
  max-width: auto;
  height: auto;
}

.contact-content {
  text-align: center;
  max-width: auto;
  width: auto;
  height: auto;
}

.contact-title {
  font-size: 2.5em;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #f8f9fa;
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: 0.7s;
}

.contact-subtitle {
  font-size: 2em;
  color: #f8f9fa;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: 0.9s;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  size: 4em;
}

.contact-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #000000;
  transition: transform 0.3s ease;
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: 1.1s;
}

.contact-link:hover {
  transform: translateY(-5px);
}

.icon-container {
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background: #f8f9fa;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.contact-link:hover .icon-container {
  background: #e9ecef;
}

.contact-icon {
  width: 100px;
  height: 100px;
  object-fit: fill;
}

.link-text {
  font-size: 1.1rem;
  font-weight: 500;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .contact-title {
    font-size: 2rem;
  }
  
  .contact-subtitle {
    font-size: 1rem;
  }
  
  .contact-links {
    gap: 2rem;
  }
  
  .icon-container {
    width: 60px;
    height: 60px;
  }
  
  .contact-icon {
    width: 30px;
    height: 30px;
  }
  
  .contact-container {
    padding-bottom: 100px;
  }
}
</style>