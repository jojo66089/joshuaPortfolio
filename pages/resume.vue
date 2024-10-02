<script setup lang="ts">
const route = useRoute()
</script>

<template>
 
    <div id="header">
    

        <div class="resume-container">
        <!-- Resume Header -->

        <div class="resume-header">

        <h2><img src="~assets/1xx/1x/1x/1x/Asset 24.png"></h2>
        <p>New York, NY | (505) 550-6909 | <a href="mailto:jg6949@nyu.edu">jg6949@nyu.edu</a> | <a href="http://www.joshua-guillen.com">Portfolio</a></p>
        </div>

        <!-- Education Section -->
        <div class="resume-section">
        <h2>EDUCATION</h2>
        <p><strong>New York University (NYU), New York, NY</strong></p>
        <p>Bachelor of Arts in Computer Science, Minors in Data Science & French</p>
        <p>Expected Graduation: May 2025</p>
        <p>Cumulative GPA: 3.53/4.00</p>
        </div>

        <!-- Technical/Project Experience -->
        <div class="resume-section">
        <h2>TECHNICAL/PROJECT EXPERIENCE</h2>
        <p><strong>STEAM Experience (Student Helper/Volunteer)</strong></p>
        <p>June 2023 - July 2023</p>
        <ul>
            <li>Developed a short-hand curriculum on Java and other OOP concepts for low-income students.</li>
            <li>Helped students create a Snake game using Java’s AWT API.</li>
        </ul>
        <a href="https://drive.google.com/file/d/1Tktjxqm9MWBrxVWNcuPfGT3sVyTT_wZL/view?usp=sharing">Link to curriculum</a>

        <p><strong>Sporacle - Self-Project</strong></p>
        <p>January 2024 - June 2024</p>
        <ul>
            <li>Full-stack development using JavaScript, Node.js, Express, and Spotify’s API.</li>
            <li>Implemented OAuth authentication and real-time data processing with Spotify’s API.</li>
            <li><a href="https://github.com/jojo66089/Sporacle">GitHub</a> | <a href="http://www.mysporacle.com/">WebApp</a></li>
        </ul>
        </div>

        <!-- Work Experience Section -->
        <div class="resume-section">
        <h2>WORK EXPERIENCE</h2>
        <p><strong>Starbucks (Barista)</strong></p>
        <p>June 2024 - Present</p>
        <p>Barista and espresso bar certified.</p>

        <p><strong>Our Roots (Social Media Manager)</strong></p>
        <p>October 2021 - May 2022</p>
        <p>Engineered a social media strategy that increased user engagement by 50%.</p>
        </div>

        <!-- Technical Skills Section -->
        <div class="resume-section">
        <h2>TECHNICAL SKILLS AND PROFESSIONAL INTERESTS</h2>
        <p>Languages: Java, Python, C/C++, Swift, JavaScript, SQL, MongoDB</p>
        <p>Databases: Neo4j</p>
        <p>Tools & Frameworks: Git, XGBoost, Data Analysis, Machine Learning</p>
        <p>Spoken Languages: Spanish (fluent), English (fluent), French (intermediate)</p>
        </div>
          <!-- Button to Download Resume as PDF -->
        <div class="download-button-container">
        <a href="/path/to/Joshua Guillen Resume.pdf" download class="download-button">Download PDF</a>
        </div>
        <div class="button-row-container4">
                    <NuxtLink to="/" class="projects-button">
                        <button class="home-button">
                            <img src="~assets/1xx/1x/1x/1x/Asset 25.png" alt="buttonpng" border="0" />
                        </button>
                        <img src="~assets/1xx/1x/1x/Asset 17.png" alt="buttonpng" border="0" />
                    </NuxtLink>
            </div>

        </div>
    </div>
</template>

