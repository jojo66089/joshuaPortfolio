<script setup lang="ts">
import headerTitle from '~/components/headerTitle.vue';
const route = useRoute()
</script>

<template>
  <header class="header">
    <headerTitle></headerTitle>
   <!--- 
    <div class="intro">
      <div class="right">
        <img src="~assets/1xx/1x/1x/1x/1x/Asset 26.png" alt="">

      </div>
      <div class="logo">
        <img src="~assets/1xx/1x/1x/1x/1x/Asset 3.png" alt="">
      </div>

    
      <div class="left">
        <img src="~assets/1xx/1x/1x/1x/1x/Asset 27.png" alt="">
      </div>

    </div>
-->
    <nav class="button-group" aria-label="Primary Navigation">
      <NuxtLink to="/projects" class="btn-row" aria-label="Projects">
        <img src="~/assets/1xx/1x/Asset 5.png" alt="Projects button" />
        <img src="~/assets/1xx/1x/1x/Asset 17.png" alt="" aria-hidden="true" />
      </NuxtLink>

      <NuxtLink to="/resume" class="btn-row" aria-label="Resume">
        <img src="~/assets/1xx/1x/Asset 9.png" alt="Resume button" />
        <img src="~/assets/1xx/1x/1x/Asset 20.png" alt="" aria-hidden="true" />
      </NuxtLink>

      <NuxtLink to="/contact" class="btn-row" aria-label="Contact">
        <img src="~/assets/1xx/1x/Asset 7.png" alt="Contact button" />
        <img src="~/assets/1xx/1x/1x/Asset 21.png" alt="" aria-hidden="true" />
      </NuxtLink>
    </nav>

  </header>
</template>

<script setup lang="ts">

</script>

<style src="~/assets/css/main.scss"></style>