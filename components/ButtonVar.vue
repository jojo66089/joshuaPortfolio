<template>
    <div class="image-container">
        <div class="button-container" :class="{ 'mobile-device': isMobile }">
            <!-- Projects Button -->
            <div class="button-row-container-bar">
                <NuxtLink to="/projects" class="projects-button" @click="handleMobileClick">
                    <img src="/assets/1xx/1x/1x/Asset 17.png" alt="buttonpng" border="0" />
                    <img src="/assets/1xx/1x/Asset 5.png" alt="buttonpng" border="0" />
                </NuxtLink>
            </div>

            <!-- Resume Button -->
            <div class="button-row-container-bar">
                <NuxtLink to="/resume" class="resume-button" @click="handleMobileClick">
                    <img src="/assets/1xx/1x/1x/Asset 20.png" alt="buttonpng" border="0" />
                    <img src="/assets/1xx/1x/Asset 9.png" alt="buttonpng" border="0" />
                </NuxtLink>
            </div>

            <!-- Contact Button -->
            <div class="button-row-container-bar">
                <NuxtLink to="/contact" class="contact-button3" @click="handleMobileClick">
                    <img src="/assets/1xx/1x/1x/Asset 21.png" alt="buttonpng" border="0" />
                    <img src="/assets/1xx/1x/Asset 7.png" alt="buttonpng" border="0" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDevice } from '~/composables/useDevice'

const { isMobile } = useDevice()

const handleMobileClick = (event: Event) => {
  if (isMobile.value) {
    // Add a brief flash effect for mobile taps
    const target = event.currentTarget as HTMLElement
    target.style.transform = 'scale(0.95)'
    setTimeout(() => {
      target.style.transform = 'scale(1)'
    }, 150)
  }
}
</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-row-container-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 200px;
}

.button-row-container-bar .projects-button,
.button-row-container-bar .resume-button,
.button-row-container-bar .contact-button3 {
  display: flex;
  flex-direction: row; 
  align-items: center;
  transition: transform 0.2s ease;
}

.button-row-container-bar img {
  display: block; 
  margin: 0;
  padding: 0;
  max-width: 70px;
  max-height: 70px;
  transition: 0.3s ease-in-out;
}

/* Desktop hover effects */
@media (hover: hover) and (pointer: fine) {
  .button-row-container-bar:hover img {
    animation: strobe 0.5s infinite alternate;
    filter: brightness(0) invert(1);
  }
}

/* Mobile tap effects */
.mobile-device .button-row-container-bar .projects-button:active,
.mobile-device .button-row-container-bar .resume-button:active,
.mobile-device .button-row-container-bar .contact-button3:active {
  transform: scale(0.95);
}

/* Mobile responsive */
@media (max-width: 768px) {
  .button-row-container-bar {
    gap: 100px;
  }
  
  .button-row-container-bar img {
    max-width: 60px;
    max-height: 60px;
  }
}

@media (max-width: 480px) {
  .button-row-container-bar {
    gap: 50px;
  }
  
  .button-row-container-bar img {
    max-width: 50px;
    max-height: 50px;
  }
}

@keyframes strobe {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}
</style>

