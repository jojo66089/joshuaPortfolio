<script setup lang="ts">
import headerTitle from '~/components/headerTitle.vue';
import HomeButton from '../components/HomeButton.vue';
import DownloadButton from '../components/DownloadButton.vue';
import ParallaxStars from '~/components/ParallaxStars.vue';
const route = useRoute()
</script>

<template>
  <headerTitle></headerTitle>
  <ParallaxStars />
  <div class="resume-container invisible" style="animation: revealb 500ms; animation-delay: 0.5s; animation-fill-mode: forwards;">
    <!-- Resume Header -->
    <div class="resume-header">
      <div class="contact-info">
        <span>New York, NY</span>
        <span class="separator">•</span>
        <span>(505) 550-6909</span>
        <span class="separator">•</span>
        <a href="mailto:jg6949@nyu.edu">jg6949@nyu.edu</a>
      </div>
    </div>

    <!-- Education Section -->
    <section class="resume-section">
      <h2 class="section-title">Education</h2>
      <div class="section-content">
        <div class="entry">
          <div class="entry-header">
            <h3>New York University (NYU)</h3>
            <span class="location">New York, NY</span>
          </div>
          <p class="degree" style="font-size: 1.0rem;">Bachelor of Arts in Computer Science</p>
          <p class="minor" style="font-size: 0.9rem;">Minors in Business Media Entertainment and Technology</p>
          <p class="details" style="font-size: 0.9rem; font-weight: 600;">Graduated: May 2025 • GPA: 3.74/4.00</p>
        </div>
        <div class="entry">
          <div class="entry-header">
            <h3>Animations On the Web Bootcamp</h3>
            <span class="location">New York, NY</span>
          </div>
          <p class="details" style="font-size: 0.9rem;">March 2025</p>
          <a href="https://drive.google.com/file/d/1YXWmz7STWWGzC12N3SxhM_oxjau__KMm/view?usp=drive_link" class="link" target="_blank" rel="noopener" style="font-size: 0.9rem; justify-items: center;">Certificate of Completion</a>
        </div>
      </div>
    </section>

    <!-- Technical/Project Experience -->
    <section class="resume-section">
      <h2 class="section-title">Technical Experience</h2>
      <div class="section-content">
        <div class="entry">
          <div class="entry-header">
            <h3>Product Design & Community Intern, Ubiq</h3>
            <span class="date">January 2025 - Present</span>
          </div>
          <ul class="achievement-list">
            <li>UX/UI design and QA testing of new app features. Support ideation, creation of product roadmaps, and data analysis to build a strong engaging user experience.</li>
            <li>Worked with engineers/senior developers in roadmap planning and execution, and contributed to sprint planning and review meetings as well as conducting 1:1 Product Review Interviews as a form of User Data Extraction.</li>
          </ul>
        </div>

        <div class="entry">
          <div class="entry-header">
            <h3>AI Text Authenticator</h3>
            <span class="date">NLP Capstone • NYU</span>
          </div>
          <ul class="achievement-list">
            <li>Built a production‑ready classifier that detects LLM‑generated text, achieving >92% F1 on 6 open‑source corpora using scikit‑learn (LR/SVM/RF)</li>
            <li>Engineered hybrid linguistic + TF‑IDF features; automated GridSearchCV hyper‑tuning and POS‑tag error analysis</li>
            <li>Containerised a Flask API + web demo, deployed to AWS EC2 with HTTPS, PyTest CI, and GitHub Actions</li>
            <li>GitHub: <a href="https://github.com/jojo66089/NLP_final_project" class="link" target="_blank" rel="noopener">https://github.com/jojo66089/NLP_final_project</a></li>
          </ul>
        </div>

        <div class="entry">
          <div class="entry-header">
            <h3>Full Stack Development Portfolio Website</h3>
            <span class="date">September 2024 - October 2024</span>
          </div>
          <ul class="achievement-list">
            <li>Designed and implemented all graphics and animations (CSS and Framer Motion) on Nuxt.js and React.js</li>
            <li>Deployed the site on Vercel for reliable hosting and optimized for wide distribution and zero-downtime updates</li>
          </ul>
        </div>

        <div class="entry">
          <div class="entry-header">
            <h3>Back-End Focused Development Sporacle</h3>
            <span class="date">January 2024 - June 2024</span>
          </div>
          <ul class="achievement-list">
            <li>Designed and implemented a web application using Javascript, Node.js, Express, and Spotify's API to provide users with personalized oracle readings based on their Spotify listening habits</li>
            <li>Integrated secure OAuth authentication to allow users to log in with their Spotify accounts, ensuring data privacy and secure access</li>
            <li>Utilized Spotify's API to fetch users' top tracks and artists, and employed OpenAI's GPT-3.5 wrapper for generating unique, engaging readings based on their music preferences</li>
            <li>GitHub: <a href="https://github.com/jojo66089/Sporacle" class="link" target="_blank" rel="noopener">https://github.com/jojo66089/Sporacle</a></li>
          </ul>
        </div>

        <div class="entry">
          <div class="entry-header">
            <h3>Atlantis</h3>
            <span class="date">Full‑Stack Capstone • Next.js 14 & React 18</span>
          </div>
          <ul class="achievement-list">
            <li>Built a music‑discovery web app with sub‑150 ms type‑ahead search (Discogs + Spotify APIs) and offline‑ready playlist caching; crafted responsive UI/UX with Tailwind CSS, Sass themes, and React Context state</li>
            <li>Added JWT‑based auth, React‑Hook‑Form + Yup validation, and CI/CD to Vercel via GitHub Actions (ESLint/Prettier); users can save, re‑order, and drag‑drop tracks across devices</li>
            <li>GitHub: <a href="https://github.com/jojo66089/AtlantisFinalProject" class="link" target="_blank" rel="noopener">https://github.com/jojo66089/AtlantisFinalProject</a></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Work Experience -->
    <section class="resume-section">
      <h2 class="section-title">Work Experience</h2>
      <div class="section-content">
        <div class="entry">
          <div class="entry-header">
            <h3>Barista, Starbucks</h3>
            <span class="date">June 2024 - Present</span>
          </div>
          <ul class="achievement-list">
            <li>Learned to craft beverages and memorize them; obtained espresso bar certification (Green Passport)</li>
          </ul>
        </div>

        <div class="entry">
          <div class="entry-header">
            <h3>Data Science Club, NYU</h3>
            <span class="date">September 2023 - Present</span>
          </div>
          <ul class="achievement-list">
            <li>Cultivated a vibrant community of data science enthusiasts, driving increased participation through organizing speaking engagements and competitive coding events</li>
          </ul>
        </div>

        <div class="entry">
          <div class="entry-header">
            <h3>HackNYU Participant</h3>
            <span class="date">November 2023</span>
          </div>
          <ul class="achievement-list">
            <li>Excelled in a 48-hour hackathon, developing a solution to address a global health challenge which was recognized in the top 10% of entries</li>
          </ul>
        </div>

        <div class="entry">
          <div class="entry-header">
            <h3>Line Cook, Hello Deli</h3>
            <span class="date">May 2023 - August 2023</span>
          </div>
          <ul class="achievement-list">
            <li>Prepared a wide array of sandwiches, soups, and breakfast items from scratch</li>
          </ul>
        </div>

        <div class="entry">
          <div class="entry-header">
            <h3>Cashier, Panda Express</h3>
            <span class="date">June 2023 - August 2023</span>
          </div>
          <ul class="achievement-list">
            <li>Cashiered food items to customers in a fast paced environment</li>
          </ul>
        </div>

        <div class="entry">
          <div class="entry-header">
            <h3>Sauté Cook, Flying Star Café</h3>
            <span class="date">May 2021 - August 2021</span>
          </div>
          <ul class="achievement-list">
            <li>Prepared breakfast items, sauces, entrée sides, from scratch in a fast paced environment</li>
          </ul>
        </div>

        <div class="entry">
          <div class="entry-header">
            <h3>Social Media Manager – Our Roots (Short-Film)</h3>
            <span class="date">October 2021 - May 2022</span>
          </div>
          <p class="location">NYU, New York, NY</p>
          <ul class="achievement-list">
            <li>Engineered a social media strategy that skyrocketed user engagement by 50%, leveraging analytics tools to track performance and guide marketing decisions</li>
          </ul>
        </div>

        <div class="entry">
          <div class="entry-header">
            <h3>McDonald's</h3>
            <span class="date">May 2017 - January 2021</span>
          </div>
          <p class="role">Crew Trainer/Crew Member</p>
          <ul class="achievement-list">
            <li>Cashiered Fast Food items, counted the safe, took monthly inventory, and got ServeSafe Certified</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Technical Skills -->
    <section class="resume-section">
      <h2 class="section-title">Technical Skills</h2>
      <div class="section-content">
        <div class="skills-grid">
          <div class="skill-category">
            <h4>Languages</h4>
            <p>Java, Python, C/C++, Swift, JavaScript, HTML, SQL, CSS, TailwindCSS</p>
          </div>
          <div class="skill-category">
            <h4>Databases & Tools</h4>
            <p>Neo4js, Figma, MongoDB</p>
          </div>
          <div class="skill-category">
            <h4>Systems</h4>
            <p>Linux x86, Windows</p>
          </div>
          <div class="skill-category">
            <h4>Languages</h4>
            <p>Spanish (fluent), English (fluent), French (intermediate)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Button -->
    <DownloadButton />
  </div>
  <HomeButton />
</template>

<style scoped>
/* Base styles */
.resume-container {
  max-width: 70%;
  margin: 0 auto;
  padding: 2rem;
  padding-bottom: 150px;
  position: relative;
  z-index: 1;
}

/* Safari-specific fixes */
@supports (-webkit-touch-callout: none) {
  .resume-container {
    max-width: 800px !important;
    width: 100% !important;
    margin: 0 auto !important;
    padding: 2rem !important;
    padding-bottom: 100px !important;
    font-size: 16px !important;
    -webkit-text-size-adjust: 100%;
  }

  .section-title {
    font-size: 2rem !important;
    margin-bottom: 1.5rem !important;
  }

  .entry-header h3 {
    font-size: 1.25rem !important;
  }

  .entry p, .entry li {
    font-size: 1rem !important;
    line-height: 1.5 !important;
  }

  .achievement-list li {
    font-size: 1rem !important;
    line-height: 1.5 !important;
    margin-bottom: 0.5rem !important;
  }

  .skills-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
    gap: 1.5rem !important;
  }

  .skill-category h4 {
    font-size: 1.1rem !important;
    margin-bottom: 0.5rem !important;
  }

  .skill-category p {
    font-size: 1rem !important;
    line-height: 1.5 !important;
  }

  @media (max-width: 768px) {
    .resume-container {
      padding: 1rem !important;
    }

    .section-title {
      font-size: 1.8rem !important;
    }

    .entry-header h3 {
      font-size: 1.2rem !important;
    }
  }
}

.resume-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.name {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.contact-info {
  font-size: 0.95rem;
}

.separator {
  margin: 0 0.5rem;
}

.resume-section {
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid;
}

.entry {
  margin-bottom: 1.25rem;
}

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
}

.entry-header h3 {
  font-size: 1rem;
  font-weight: 600;
}

.date {
  font-size: 0.85rem;
}

.role, .location {
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.achievement-list {
  list-style-type: none;
  padding-left: 0;
}

.achievement-list li {
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.35rem;
  line-height: 1.4;
  font-size: 0.9rem;
}

.achievement-list li::before {
  content: "•";
  position: absolute;
  left: 0;
}

.link {
  text-decoration: none;
  transition: opacity 0.2s;
}

.link:hover {
  opacity: 0.8;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.skill-category h4 {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
}

.skill-category p {
  line-height: 1.4;
  font-size: 0.85rem;
}

.download-container {
  text-align: center;
  margin-top: 1.5rem;
}

.download-button {
  display: inline-block;
  padding: 0.6rem 1.25rem;
  text-decoration: none;
  border-radius: 4px;
  transition: opacity 0.2s;
  font-size: 0.9rem;
}

.download-button:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .resume-container {
    margin: 1rem;
    padding: 1rem;
    padding-bottom: 100px;
  }

  .name {
    font-size: 2rem;
  }

  .entry-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .date {
    margin-top: 0.15rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
