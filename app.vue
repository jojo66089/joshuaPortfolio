<template>
  <div class="app-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  overflow-x: hidden;
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
</style>
