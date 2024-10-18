<script setup lang="ts">
import HomeButton from '../components/HomeButton.vue';
const route = useRoute();
</script>

<template>
    <div class="resume-container">
    <!-- Resume Header -->
    <div class="resume-header">
        <h2><img src="~assets/1xx/1x/1x/1x/Asset 24.png"></h2>
        <p>New York, NY | (505) 550-6909 | <a href="mailto:jg6949@nyu.edu">jg6949@nyu.edu</a> | <a href="http://www.joshua-guillen.com">Portfolio</a></p>
    </div>

    <!-- Education Section -->
    <div class="resume-section">
        <h2>EDUCATION</h2>
        <hr>
        <p><strong>New York University (NYU), New York, NY</strong></p>
        <p>Bachelor of Arts in Computer Science, Minors in Business Media Entertainment and Technology</p>
        <p>Expected Graduation: May 2025</p>
        <p>Cumulative GPA: 3.34/4.00</p>
    </div>

    <!-- Technical/Project Experience -->
    <div class="resume-section">
        <h2>TECHNICAL/PROJECT EXPERIENCE</h2>
        <hr>

        <p style="text-align:left;"><strong>Portfolio Website - Self-Project</strong>
            <span style="float:right;">September 2024 - October 2024</span>
        </p>
        <ul>
            <li>Designed and developed a professional portfolio using Nuxt.js, showcasing a diverse skill set across front-end and back-end technologies.</li>
            <li>Utilized a component-based architecture for scalability and maintainability, tailored to provide a seamless user experience with dedicated sections for projects, resume, and contact information.</li>
            <li>Built with responsive design principles to ensure compatibility across devices, particularly iPhones and other mobile platforms.</li>
            <li>Deployed the site on Vercel for fast, reliable hosting, optimized for global distribution and zero-downtime updates.</li>
            <li>Website link: <a href="http://www.joshua-guillen.com">www.joshua-guillen.com</a></li>
        </ul>

        <p style="text-align:left;"><strong>Sporacle - Self-Project</strong>
            <span style="float:right;">January 2024 - June 2024</span>
        </p>
        <ul>
            <li>Full-stack development using JavaScript, Node.js, Express, and Spotify’s API to provide users with personalized astrological readings based on their Spotify listening habits.</li>
            <li>Implemented OAuth authentication and real-time data processing with Spotify’s API.</li>
            <li>Deployed the application on Heroku, configured custom domains, and ensured HTTPS security compliance to provide a seamless user experience.</li>
            <li>GitHub: <a href="https://github.com/jojo66089/Sporacle">https://github.com/jojo66089/Sporacle</a></li>
            <li>WebApp: <a href="http://www.mysporacle.com/">http://www.mysporacle.com/</a></li>
        </ul>
    </div>

    <!-- Work Experience Section -->
    <div class="resume-section">
        <h2>WORK EXPERIENCE</h2>
        <hr>

        <p style="text-align:left;"><strong>Starbucks (Barista)</strong>
            <span style="float:right;">June 2024 - Present</span>
        </p>
        <p>Barista and espresso bar certified (Green Passport).</p>

        <p style="text-align:left;"><strong>Social Media Manager - Our Roots (Short-Film), NYU, New York, NY</strong>
            <span style="float:right;">October 2021 - May 2022</span>
        </p>
        <p>Engineered a social media strategy that skyrocketed user engagement by 50%, leveraging analytics tools to track performance and guide marketing decisions.</p>

        <p style="text-align:left;"><strong>Data Science Club, NYU</strong>
            <span style="float:right;">September 2023 - Present</span>
        </p>
        <p>Cultivated a vibrant community of data science enthusiasts, driving increased participation through organizing speaking engagements and competitive coding events.</p>

        <p style="text-align:left;"><strong>HackNYU Participant</strong>
            <span style="float:right;">November 2023</span>
        </p>
        <p>Excelled in a 48-hour hackathon, developing a solution to address a global health challenge which was recognized in the top 10% of entries.</p>

        <p style="text-align:left;"><strong>Hello Deli (Line Cook)</strong>
            <span style="float:right;">May 2023 - August 2023</span>
        </p>
        <p>Prepared a wide array of sandwiches, soups, and breakfast items from scratch.</p>

        <p style="text-align:left;"><strong>Panda Express (Cashier)</strong>
            <span style="float:right;">June 2023 - August 2023</span>
        </p>
        <p>Cashiered food items to customers in a fast-paced environment.</p>

        <p style="text-align:left;"><strong>Flying Star Café (Sauté Cook)</strong>
            <span style="float:right;">May 2021 - August 2021</span>
        </p>
        <p>Prepared breakfast items, sauces, entrée sides, from scratch in a fast-paced environment.</p>

        <p style="text-align:left;"><strong>McDonald’s (Crew Trainer/Crew Member)</strong>
            <span style="float:right;">May 2017 - January 2021</span>
        </p>
        <p>Cashiered fast food items, counted the safe, took monthly inventory, and got ServeSafe certified.</p>
    </div>

    <!-- Technical Skills Section -->
    <div class="resume-section">
        <h2>TECHNICAL SKILLS AND PROFESSIONAL INTERESTS</h2>
        <hr>
        <p>Languages: Java, Python, C/C++, Swift, JavaScript, HTML, SQL, MongoDB</p>
        <p>Databases: Neo4j</p>
        <p>Tools & Frameworks: Git, XGBoost, Data Analysis, Machine Learning</p>
        <p>Systems: Linux x86, Windows</p>
        <p>Spoken Languages: Spanish (fluent), English (fluent), French (intermediate)</p>
    </div>

    <!-- Button to Download Resume as PDF -->
    <div class="download-button-container">
        <a href="~/assets/resume/Joshua Guillen Resume.pdf" download class="download-button">Download PDF</a>
    </div>
</div>
<HomeButton />
</template>
