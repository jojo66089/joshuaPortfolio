<template>
    <div class="image-container">
        <div class="button-container">
            <!-- Projects Button -->
            <div class="button-row-container-bar">
                <NuxtLink to="/projects" class="projects-button">
                    <img src="/assets/1xx/1x/1x/Asset 17.png" alt="buttonpng" border="0" />
                    <img src="/assets/1xx/1x/Asset 5.png" alt="buttonpng" border="0" />
                </NuxtLink>
            </div>

            <!-- Resume Button -->
            <div class="button-row-container-bar">
                <NuxtLink to="/resume" class="resume-button">
                    <img src="/assets/1xx/1x/1x/Asset 20.png" alt="buttonpng" border="0" />
                    <img src="/assets/1xx/1x/Asset 9.png" alt="buttonpng" border="0" />
                </NuxtLink>
            </div>

            <!-- Contact Button -->
            <div class="button-row-container-bar">
                <NuxtLink to="/contact" class="contact-button3">
                    <img src="/assets/1xx/1x/1x/Asset 21.png" alt="buttonpng" border="0" />
                    <img src="/assets/1xx/1x/Asset 7.png" alt="buttonpng" border="0" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
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
  flex-direction: row; /* Arrange images in a row */
  align-items: center;
  gap: 200px;
}

.button-row-container-bar .projects-button,
.button-row-container-bar .resume-button,
.button-row-container-bar .contact-button3 {
  display: flex;
  flex-direction: row; 
  align-items: center;
}

.button-row-container-bar img {
  display: block; 
  margin: 0;
  padding: 0;
  max-width: 70px;
  max-height: 70px;
  transition: 0.3s ease-in-out;
}

.button-row-container-bar:hover img {
  animation: strobe 0.5s infinite alternate;
  filter: brightness(0) invert(1);
}

</style>

