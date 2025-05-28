<template>
  <div class="app-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const resetZoom = () => {
  // Reset zoom level to 100%
  if (document.body.style.zoom) {
    document.body.style.zoom = "100%";
  }
  // For Safari
  if (window.safari) {
    document.body.style.transform = "scale(1)";
    document.body.style.transformOrigin = "0 0";
  }
  // Force a reflow
  document.body.offsetHeight;
};

// Watch for route changes
watch(() => route.path, () => {
  // Small delay to ensure the page transition has started
  setTimeout(resetZoom, 100);
});

// Reset zoom on initial load
onMounted(() => {
  resetZoom();
});
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  overflow-x: hidden;
  font-size: 16px;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

.app-container {
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
}

/* Ensure pages don't create extra scroll space */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Safari-specific fixes */
@supports (-webkit-touch-callout: none) {
  body {
    -webkit-text-size-adjust: 100%;
    transform-origin: 0 0;
  }
}
</style>
