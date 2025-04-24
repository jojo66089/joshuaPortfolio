<template>
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
</template>
<style scoped>
.intro {
  display: flex;
  justify-content: center;
  align-items: baseline;
  max-width: auto;
  max-height: auto;
  overflow: visible;
  transform: scale(3) translateY(50%);
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  animation: scaleLogo 450ms ease-in-out;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  margin-bottom: 5%;
  margin-top: 5%;
  padding-top: 5%;
  padding-bottom:5%;


  .left {
    transform: translateX(-190%);
    overflow: visible;
    animation: xTranslate 450ms ease-in-out;
    animation-iteration-count: 1;
    animation-direction: alternate;
    animation-delay: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

  }
  .right {
    transform: translateX(190%);
    overflow: visible;
    animation: xrTranslate 450ms ease-in-out;
    animation-iteration-count: 1;
    animation-direction: alternate;
    animation-delay: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

  }
  .logo {
    transform: translateX(250);
    clip-path: inset(0% 50% 0% 50%);
    animation: reveal 350ms ease-in-out;
    animation-delay: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

  }
}
@keyframes scaleLogo {
  0% {
    transform: scale(3) translateY(50%);;
    transition-timing-function: ease-in-out;
  }
  100% {
    transform: scale(1) translateY(0%);;
    transition-timing-function: ease-in-out;
  }
}

@keyframes xTranslate {
  0% {
    transform: translateX(-190%);
    transition-timing-function: ease-in-out;
   
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes xrTranslate {
  0% {
    transform: translateX(190%);
    transition-timing-function: ease-in-out;
    transition-duration: 0.5s;
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes reveal {
  to {
    clip-path: inset(0 0 0 0);
  }
}
@keyframes revealb {
  from{
    opacity: 0;
    transform: translateY(100%);

  }
  to{
    transform: translateY(0%);
    visibility: visible;
    opacity: 1;

  }
}
</style>