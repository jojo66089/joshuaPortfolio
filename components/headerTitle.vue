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
    align-items: center;
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
    padding-bottom: 0.5%;
    position: relative;
    z-index: 10;
    width: 100%;
  }
  
  .intro .left {
    transform: translateX(-190%);
    left: 50%;
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
    right: 50%;
    overflow: visible;
    animation: xrTranslate 450ms ease-in-out;
    animation-iteration-count: 1;
    animation-direction: alternate;
    animation-delay: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  
  .intro .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(250);
    clip-path: inset(0% 50% 0% 50%);
    animation: reveal 350ms ease-in-out;
    animation-delay: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    cursor: pointer;
  }
  
  .intro .logo img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  
  .intro img {
    max-width: 100%;
    height: auto;
  }
  
  @media (max-width: 768px) {
    .intro {
      transform: none !important;
      animation: none !important;
      align-items: center;
    }
  
    .intro .left,
    .intro .right {
      transform: none !important;
      animation: none !important;
      align-items: center;
    }
  
    .intro .logo {
      transform: none !important;
      animation: none !important;
      clip-path: none !important;
      max-width: auto;
      max-height: fit-content;
    }
  
    .intro .logo img {
      max-width: auto;
    }
  
    .intro .left img,
    .intro .right img {
      max-width: auto;
    }
  }
  
  @media (max-width: auto) {
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
      max-width: auto;
    }
  
    .intro .left img,
    .intro .right img {
      max-width: auto;
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
  
  /* Safari-specific fixes */
  @supports (-webkit-touch-callout: none) {
    .intro {
      transform: none !important;
      animation: none !important;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  
    .intro .logo {
      transform: none !important;
      animation: none !important;
      clip-path: none !important;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .intro .logo img {
      width: auto;
      height: auto;
      max-width: 100%;
      margin: 0 auto;
    }
  }
  </style>
