<template>
    <div class="intro">
      <div class="right">
        <img src="~assets/1xx/1x/1x/1x/1x/Asset 26.png" alt="">
      </div>
      <NuxtLink to="/" class="logo">
        <img src="~assets/1xx/1x/1x/1x/1x/Asset 3.png" alt="Home">
      </NuxtLink>
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
    margin-bottom: 1%;
    margin-top: 0%;
    padding-bottom: 2%;
    position: relative;
    z-index: 10;
  }
  
  .intro .left {
    transform: translateX(-190%);
    overflow: visible;
    animation: xTranslate 450ms ease-in-out;
    animation-iteration-count: 1;
    animation-direction: alternate;
    animation-delay: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  
  .intro .right {
    transform: translateX(190%);
    overflow: visible;
    animation: xrTranslate 450ms ease-in-out;
    animation-iteration-count: 1;
    animation-direction: alternate;
    animation-delay: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  
  .intro .logo {
    flex-grow: 1;
    transform: translateX(250);
    clip-path: inset(0% 50% 0% 50%);
    animation: reveal 350ms ease-in-out;
    animation-delay: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    cursor: pointer; /* Add pointer cursor to indicate it's clickable */
    display: block; /* Ensure NuxtLink retains the proper display */
  }
  
  .intro img {
    max-width: 100%;
    height: auto;
  }
  
  @media (max-width: 768px) {
    .intro {
      transform: scale(2.5) translateY(50%);
      margin-bottom: 0;
      padding-bottom: 0;
    }
  
    .intro .left {
      transform: translateX(-150%);
    }
  
    .intro .right {
      transform: translateX(150%);
    }
  
    .intro .logo img {
      max-width: 90px;
    }
  
    .intro .left img,
    .intro .right img {
      max-width: 70px;
    }
  }
  
  @media (max-width: 480px) {
    .intro {
      transform: scale(2) translateY(50%);
    }
  
    .intro .left {
      transform: translateX(-120%);
    }
  
    .intro .right {
      transform: translateX(120%);
    }
  
    .intro .logo img {
      max-width: 70px;
    }
  
    .intro .left img,
    .intro .right img {
      max-width: 50px;
    }
  }
  
  @keyframes scaleLogo {
    0% {
      transform: scale(3) translateY(50%);
      transition-timing-function: ease-in-out;
    }
    100% {
      transform: scale(1) translateY(0%);
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
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
      visibility: visible;
      opacity: 1;
    }
  }
  </style>
