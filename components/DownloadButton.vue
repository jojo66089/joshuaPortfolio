<template>
  <div class="download-button-container">
    <NuxtLink
      to="/resume/Joshua_Guillen_Resume.pdf"
      download
      class="download-button"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <span class="button-text" :class="{ 'hovered': isHovered }">
        Download PDF Resume
      </span>
      <span class="download-icon" :class="{ 'hovered': isHovered }">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      </span>
      <div class="button-gradient" :class="{ 'hovered': isHovered }"></div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const isHovered = ref(false)
</script>

<style scoped>
.download-button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  font-size: 1rem;
  height: auto;
  width: auto;
  padding: 1rem;
}

.download-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: white;
  color: #1f2937;
  font-weight: 600;
  border-radius: 9999px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  text-decoration: none;
}

.download-button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.download-button:active {
  transform: scale(0.98);
}

.button-text {
  position: relative;
  z-index: 10;
  transition: transform 0.3s ease;
}

.button-text.hovered {
  transform: translateX(4px);
}

.download-icon {
  position: relative;
  z-index: 10;
  transition: all 0.3s ease;
}

.download-icon.hovered {
  opacity: 1;
  transform: translateX(-4px);
}

.button-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, white, #f9fafb);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.button-gradient.hovered {
  opacity: 1;
}
</style> 