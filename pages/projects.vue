<script setup lang="ts">
import headerTitle from '~/components/headerTitle.vue';
import HomeButton from '../components/HomeButton.vue';
const route = useRoute()
</script>

<template>
  <headerTitle></headerTitle>
  <div class="resume-container">
    <hr>
    <h2><strong>Projects</strong></h2>

      <!-- Sporacle Project Overview -->
      <h3>Sporacle — Self Project</h3>
      <p>
        <strong>Overview:</strong> Sporacle is an innovative web application designed to provide users with personalized astrological readings based on their Spotify listening habits. This project combines my interests in web development, data analysis, and machine learning, utilizing Spotify's API and OpenAI's GPT-3.5 to create a unique and engaging user experience.
      </p>
      <h4>Project Links (Clickable):</h4>
      <ul>
        <li>
          <a href="https://github.com/jojo66089/Sporacle" target="_blank" rel="noopener">GitHub Repository</a>
        </li>
        <li>
          <a href="http://www.mysporacle.com/" target="_blank" rel="noopener">Live Web Application</a>
        </li>
      </ul>

      <h4>Key Features:</h4>
      
        <li><strong>Personalized Readings:</strong> Leveraging Spotify's API, Sporacle fetches users' top tracks and artists, analyzing their listening habits to generate unique, personalized astrological readings using OpenAI's GPT-3.5.</li>
        <li><strong>OAuth Authentication:</strong> Secure OAuth authentication allows users to log in with their Spotify accounts while ensuring data privacy and secure access.</li>
        <li><strong>Real-Time Data Processing:</strong> Processes real-time data from Spotify to provide up-to-date readings, enhancing relevance and accuracy.</li>
        <li><strong>Responsive Design:</strong> Features a user-friendly, responsive design for seamless experience across devices and screen sizes.</li>
        <li><strong>Secure Deployment:</strong> Deployed on Heroku with custom domain and HTTPS security compliance for a reliable user experience.</li>
        <li><strong>API Rate Limits:</strong> Developed exponential backoff retry logic to handle API rate limits, ensuring reliable data fetching.</li>
        <li><strong>Cross-Origin Requests:</strong> Addressed CORS issues to enable smooth communication between frontend and backend.</li>
    

      <h4><strong>Technical Stack:</strong></h4>
      
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Frontend:</strong> HTML, CSS, JavaScript, Handlebars.js, jQuery</li>
        <li><strong>APIs:</strong> Spotify Web API, OpenAI GPT-3.5 API</li>
        <li><strong>Authentication:</strong> OAuth 2.0</li>
        <li><strong>Hosting:</strong> Heroku</li>
        <li><strong>Version Control:</strong> Git, GitHub</li>
  

      <!-- Additional Projects & Courses -->
      <h4><strong>Additional Projects & Courses Taken:</strong></h4>
      
        <li>Intro to Computer Science, Section 008</li>
        <li>Data Structures, Section 001</li>
        <li>Operating Systems, Section 001</li>
        <li>Probability & Statistics, Section C01</li>
        <li>Object Oriented Programming, Section 001</li>
        <li>Basic Algorithms, Section 001 (Spring 2024)</li>
        <li>Discrete Mathematics, Section 006</li>
        <li>Computer Systems Organization, Section 005</li>
    

      <p>Most of the projects have been school-based, along with some website-building projects, all accessible on my <a href="https://github.com/jojo66089/Examples" target="_blank" rel="noopener">GitHub repository</a>.</p>
         <!-- GitHub Button -->
    <div class="github-button-container">
        <a href="https://github.com/jojo66089/Examples" target="_blank" rel="noopener" class="github-button">Explore More Projects on GitHub</a>
    </div> 
       
    </div>
    <HomeButton />
</template>