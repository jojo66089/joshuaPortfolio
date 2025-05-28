<script setup lang="ts">
import headerTitle from '~/components/headerTitle.vue';
import HomeButton from '../components/HomeButton.vue';
const route = useRoute()
</script>

<template>
  <headerTitle></headerTitle>
  <div class="projects-container invisible" style="animation: revealb 500ms; animation-delay: 0.5s; animation-fill-mode: forwards;">
    <h2 class="section-title">Projects</h2>

    <!-- Sporacle Project -->
    <section class="project-section">
      <div class="project-header">
        <h3>Sporacle</h3>
        <span class="project-type">Self Project</span>
      </div>

      <div class="project-content">
        <p class="project-description">
          Sporacle is a web application designed to provide users with personalized astrological readings based on their Spotify listening habits. This project combines my interests in web development, data analysis, and machine learning, utilizing Spotify's API and OpenAI's GPT-3.5 to create a unique and engaging user experience.
        </p>

        <div class="project-links">
          <a href="https://github.com/jojo66089/Sporacle" target="_blank" rel="noopener" class="project-link">
            GitHub Repository
          </a>
          <a href="http://www.mysporacle.com/" target="_blank" rel="noopener" class="project-link">
            Live Web Application
          </a>
        </div>

        <div class="features-section">
          <h4>Key Features</h4>
          <ul class="feature-list">
            <li>
              <strong>Personalized Readings:</strong> Leveraging Spotify's API, Sporacle fetches users' top tracks and artists, analyzing their listening habits to generate unique, personalized astrological readings using OpenAI's GPT-3.5.
            </li>
            <li>
              <strong>OAuth Authentication:</strong> Secure OAuth authentication allows users to log in with their Spotify accounts while ensuring data privacy and secure access.
            </li>
            <li>
              <strong>Real-Time Data Processing:</strong> Processes real-time data from Spotify to provide up-to-date readings, enhancing relevance and accuracy.
            </li>
            <li>
              <strong>Responsive Design:</strong> Features a user-friendly, responsive design for seamless experience across devices and screen sizes.
            </li>
            <li>
              <strong>Secure Deployment:</strong> Deployed on Heroku with custom domain and HTTPS security compliance for a reliable user experience.
            </li>
          </ul>
        </div>

        <div class="tech-stack">
          <h4>Technical Stack</h4>
          <div class="tech-grid">
            <div class="tech-category">
              <h5>Backend</h5>
              <p>Node.js, Express.js</p>
            </div>
            <div class="tech-category">
              <h5>Frontend</h5>
              <p>HTML, CSS, JavaScript, Handlebars.js, jQuery</p>
            </div>
            <div class="tech-category">
              <h5>APIs</h5>
              <p>Spotify Web API, OpenAI GPT-3.5 API</p>
            </div>
            <div class="tech-category">
              <h5>Authentication</h5>
              <p>OAuth 2.0</p>
            </div>
            <div class="tech-category">
              <h5>Hosting</h5>
              <p>Heroku</p>
            </div>
            <div class="tech-category">
              <h5>Version Control</h5>
              <p>Git, GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AI‑Generated Text Detector -->
    <section class="project-section">
      <div class="project-header">
        <h3>AI Text Authenticator</h3>
        <span class="project-type">Academic Capstone · NLP @ NYU</span>
      </div>

      <div class="project-content">
        <p class="project-description">
          AI Text Authenticator is a production‑ready detector that flags whether a passage
          was written by a human or a large‑language model.  
          I designed the full ML pipeline — from feature engineering to a Flask web demo —
          and achieved >92 % F1 across six public corpora.  
          The project demonstrates my ability to translate cutting‑edge research into an
          accessible tool for editors, educators, and policy makers.
        </p>

        <div class="project-links">
          <a href="https://github.com/jojo66089/NLP_final_project" target="_blank" rel="noopener" class="project-link">
            GitHub Repository
          </a>
          <a href="https://github.com/jojo66089/NLP_final_project/blob/main/Detection%20of%20AI%20generated%20Text%20through%20Supervised%20Learning.pdf" target="_blank" rel="noopener" class="project-link">
            Research Paper (PDF)
          </a>
        </div>

        <div class="features-section">
          <h4>Key Highlights</h4>
          <ul class="feature-list">
            <li><strong>Hybrid Feature Set.</strong> Engineered 5 linguistic statistics
                (e.g., entropy, repetitive‑word ratio) and fused them with TF‑IDF vectors
                for richer signal.</li>
            <li><strong>Robust Evaluation.</strong> Trained & tuned LR, SVM, and RF models
                on 30 k examples (balanced human / machine) and reported precision, recall,
                and F‑measure on held‑out test splits.</li>
            <li><strong>Error Analysis.</strong> Built custom scripts to surface the 30 most
                misclassified POS tags, guiding future feature work.</li>
            <li><strong>Scalable Web Demo.</strong> Containerised a Flask front‑end so
                stakeholders can upload text or CSVs and get instant authenticity scores.</li>
            <li><strong>Security‑First DevOps.</strong> Added GitHub Actions for linting /
                unit tests; deployed the demo on an AWS EC2 instance with HTTPS.</li>
          </ul>
        </div>

        <div class="tech-stack">
          <h4>Technical Stack</h4>
          <div class="tech-grid">
            <div class="tech-category">
              <h5>Modeling</h5>
              <p>scikit‑learn (LR · SVM · RF), GridSearchCV, Pandas</p>
            </div>
            <div class="tech-category">
              <h5>Feature Eng.</h5>
              <p>NLTK, SpaCy, custom statistical scripts</p>
            </div>
            <div class="tech-category">
              <h5>Serving</h5>
              <p>Flask, Gunicorn, Docker</p>
            </div>
            <div class="tech-category">
              <h5>Testing & CI</h5>
              <p>PyTest, GitHub Actions</p>
            </div>
            <div class="tech-category">
              <h5>Hosting</h5>
              <p>AWS EC2 (HTTPS via Nginx + Certbot)</p>
            </div>
            <div class="tech-category">
              <h5>Collaboration</h5>
              <p>Git, GitHub Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Atlantis — Music Discovery Web App -->
    <section class="project-section">
      <div class="project-header">
        <h3>Atlantis</h3>
        <span class="project-type">Full‑Stack Capstone</span>
      </div>

      <div class="project-content">
        <p class="project-description">
          Atlantis is a Next.js + React web app that helps listeners unearth hidden‑gem
          tracks and build playlists centred on artistic merit rather than charts.
          I architected the UI, API layer, and local‑storage caching so sessions stay
          lightning‑fast—even offline.
        </p>

        <div class="project-links">
          <a href="https://github.com/jojo66089/AtlantisFinalProject" target="_blank" rel="noopener" class="project-link">
            GitHub Repository
          </a>
        </div>

        <div class="features-section">
          <h4>Key Highlights</h4>
          <ul class="feature-list">
            <li><strong>Instant Discovery.</strong> Type‑ahead search pings the Discogs
                API in < 150 ms, returning songs, albums, and artwork with debounced calls.</li>
            <li><strong>Playlist Builder.</strong> One‑click "Add to Atlantis" bookmarks
                a track in browser storage; re‑ordering and drag‑drop deletion feel native.</li>
            <li><strong>Auth & Profiles.</strong> Mock login with hashed passwords and
                JWT cookies lays the foundation for multi‑device sync.</li>
            <li><strong>Adaptive Theming.</strong> Tailwind + Sass variables snap between
                dark "ocean" mode and light "coral" mode based on system preference.</li>
            <li><strong>Form Guardrails.</strong> React‑Hook‑Form validates inputs
                client‑side; errors render inline for full a11y compliance.</li>
          </ul>
        </div>

        <div class="tech-stack">
          <h4>Technical Stack</h4>
          <div class="tech-grid">
            <div class="tech-category">
              <h5>Frontend</h5>
              <p>React 18, Next.js 14 (App Router), Tailwind CSS, Sass modules</p>
            </div>
            <div class="tech-category">
              <h5>Backend / API</h5>
              <p>Next.js API Routes, Node.js, Discogs REST, Spotify Web API</p>
            </div>
            <div class="tech-category">
              <h5>State & Storage</h5>
              <p>React Context, localStorage (playlists), JWT cookies</p>
            </div>
            <div class="tech-category">
              <h5>Validation</h5>
              <p>React‑Hook‑Form, Yup</p>
            </div>
            <div class="tech-category">
              <h5>Tooling</h5>
              <p>Vite, Webpack, ESLint, Prettier</p>
            </div>
            <div class="tech-category">
              <h5>Deployment</h5>
              <p>Vercel (CI/CD from GitHub)</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Projects & Courses -->
    <section class="courses-section">
      <h3>Additional Projects & Courses</h3>
      <div class="courses-grid">
        <div class="course-item">Intro to Computer Science, Section 008</div>
        <div class="course-item">Data Structures, Section 001</div>
        <div class="course-item">Operating Systems, Section 001</div>
        <div class="course-item">Probability & Statistics, Section C01</div>
        <div class="course-item">Object Oriented Programming, Section 001</div>
        <div class="course-item">Basic Algorithms, Section 001 (Spring 2024)</div>
        <div class="course-item">Discrete Mathematics, Section 006</div>
        <div class="course-item">Computer Systems Organization, Section 005</div>
        <div class="course-item">Special Topics in Programming Languages</div>
        <div class="course-item">Data Science Club (Project Coordinator), NYU</div>
        <div class="course-item">Natural Language Processing, Section 003</div>
        <div class="course-item">Machine Learning, Section 001</div>
        <div class="course-item">Applied Internet Technologies, Section 001</div>
        <div class="course-item">Special Topics: Computer Graphics, Section 002</div>
        <div class="course-item">Animations On the Web (Web Design Course), Emil Kowalski</div>
      </div>

      <div class="github-section">
        <p>Most of the projects have been school-based, along with some website-building projects, all accessible on my GitHub repository.</p>
        <a href="https://github.com/jojo66089/Examples" target="_blank" rel="noopener" class="github-button">
          Explore More Projects on GitHub
        </a>
      </div>
    </section>
  </div>
  <HomeButton />
</template>

<style scoped>
.projects-container {
  max-width: 800px;
  margin: 1.5rem auto;
  padding: 1.5rem;
  padding-bottom: 130px;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
}

.project-section {
  margin-bottom: 2rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.75rem;
}

.project-header h3 {
  font-size: 1.1rem;
  font-weight: 600;
}

.project-type {
  font-size: 0.9rem;
  opacity: 0.8;
}

.project-content {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
}

.project-description {
  font-size: 0.95rem;
  line-height: 1.4;
  margin-bottom: 1.25rem;
}

.project-links {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.project-link {
  padding: 0.6rem 1.25rem;
  border-radius: 4px;
  text-decoration: none;
  transition: opacity 0.2s;
  font-size: 0.9rem;
}

.project-link:hover {
  opacity: 0.8;
}

.features-section h4,
.tech-stack h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.feature-list {
  list-style-type: none;
  padding-left: 0;
}

.feature-list li {
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  font-size: 0.9rem;
}

.feature-list li::before {
  content: "•";
  position: absolute;
  left: 0;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 0.75rem;
}

.tech-category h5 {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
}

.tech-category p {
  line-height: 1.4;
  font-size: 0.85rem;
}

.courses-section {
  margin-top: 2rem;
}

.courses-section h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.course-item {
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  text-align: center;
  font-size: 0.9rem;
}

.github-section {
  text-align: center;
  margin-top: 1.5rem;
}

.github-section p {
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
}

.github-button {
  display: inline-block;
  padding: 0.6rem 1.25rem;
  border-radius: 4px;
  text-decoration: none;
  transition: opacity 0.2s;
  font-size: 0.9rem;
}

.github-button:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .projects-container {
    margin: 1rem;
    padding: 1rem;
    padding-bottom: 100px;
  }

  .project-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .project-type {
    margin-top: 0.15rem;
  }

  .project-links {
    flex-direction: column;
  }

  .tech-grid {
    grid-template-columns: 1fr;
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }
}
</style>
