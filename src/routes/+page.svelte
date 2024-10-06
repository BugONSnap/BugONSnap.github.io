<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import { BugSolid } from 'flowbite-svelte-icons';
  import '../app.css'; 

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<div class="background-container">
  <div class="stars"></div>
  <div class="twinkling"></div>
  <div class="clouds"></div>
</div>

<!-- Header -->
<header class="welcome-container grid grid-cols-1 gap-4 p-5 border-2 border-pink-500 rounded-lg shadow-lg mx-auto my-8 bg-blur-500 backdrop-blur  ">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img src="src/Pics/smile-.png" alt="Profile picture of Xyrell Dave Pamintuan" class="profile-image rounded-full mx-auto">
  <h2 class="text-white text-2xl font-cambriafont-semibold text-center">
    Good Day! Everyone Im <br> 
    <span class="text-[3rem] font-cambria"> Xyrell Dave Pamintuan</span><br> 
    Im a <span class="text-blue-500">Gordon College</span> Student and a <span class="text-blue-500">Trial By Fire Enthusiast</span><br><br>
    <button class="text-blue-500" on:click={() => scrollToSection('profile-section')}> Wanna know more about me? </button><br> 
    <span class="text-white"> What are my </span>
    <button class="text-blue-500" on:click={() => scrollToSection('projects-section')}>Projects? </button><br> 
    <span class="text-white"> What are my </span>
    <button class="text-blue-500" on:click={() => scrollToSection('contacts-section')}>Contacts?</button> 
  </h2>
</header>

<!-- Main Content -->
<main class="flex flex-col p-4 " style="color:white; z-index: 3;">
  <!-- Profile Section -->
  <section id="profile-section" class=" mb-[20rem] relative top-[30vh] my-8 bg-transparent bg-opacity-80 p-4 rounded-lg shadow-lg">
    <h2 class="text-[4rem] mb-4 font-cambria font-semibold text-center">~PROFILE~</h2>
    <p class="text-center text-[5rem] font-cambriafont-bold text-pink-500 ">~1~</p>
    <p class="text-center text-[1.5rem] font-cambria">My name is <span class="text-pink-500 text-[2rem] font-bold font-cambria underline">Xyrell Dave Pamintuan</span>, and over the past few years, I have immersed myself in various programming languages and frameworks, ranging from <span class="text-pink-500 text-[2rem] font-bold font-cambria "> HTML and CSS to PHP, Angular, Type Script, Java Script, and Python</span>. I began my coding journey through online tutorials and crash courses, constantly seeking to expand my knowledge. I have taken numerous online courses that provided me with practical skills in web development and software engineering. This hands-on learning approach has allowed me to continuously develop and refine my abilities, driven by a passion for technology and innovation.</p>
    <p class="text-center text-[5rem] font-cambriafont-bold text-pink-500 ">~2~</p>

    <p class="text-center text-[2rem]"> I specialize in Front-End Development, with experience working with technologies like <span class="text-pink-500 text-[2rem] font-bold font-cambria underline">HTML, CSS, JavaScript, TypeScript, and frameworks such as Angular</span>. I am passionate about creating dynamic and responsive web applications that provide excellent user experiences. While my focus is on front-end technologies, I also have a background in backend development. Recently, I worked on a project that involved integrating a backend system, allowing me to gain hands-on experience with RESTful APIs and basic server-side logic. Currently, I'm working on projects that push my expertise in front-end development while exploring backend functionality.</p>
    <p class="text-center text-[5rem] font-cambriafont-bold text-pink-500 ">~3~</p>

    <p class="text-center text-[2rem]">I am a dedicated and detail-oriented Front-End Developer with a strong foundation in web development. I thrive on turning complex design concepts into clean, efficient code and have a passion for creating user-friendly applications. I am committed to continuous learning and staying up-to-date with the latest technologies and best practices in the field. I am eager to bring my skills and enthusiasm to a dynamic team and contribute to the development of innovative web applications.</p>
    <p class="text-center text-[5rem] font-cambriafont-bold text-pink-500 ">~4~</p>
    <p class="text-center text-[2rem]">Outside of development, I'm passionate about Souls games and Souls-like titles, with Dark Souls and Elden Ring being some of my favorites. I enjoy the challenge and depth these games offer. I'm also deeply into competitive gaming, always striving to improve and compete at higher levels. Alongside gaming, I'm an avid music addict, constantly exploring new genres and sounds that fuel my creativity and relaxation.</p>
  </section>

  <!-- Projects Section -->
  <section id="projects-section" class="my-8 bg-transparent bg-opacity-80 p-4 rounded-lg shadow-lg">
    <h2 class="text-[4rem] mb-4 font-cambria font-semibold text-center">~PROJECTS~</h2>
    <p class="text-center text-[2rem]">I have worked on several projects that have allowed me to apply my skills in real-world scenarios. Here are some of the key projects I've undertaken</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      <div class="bg-blur-500 p-6 rounded-lg shadow-lg text-center">
        <BugSolid class="mx-auto mb-4 h-12 w-12 text-pink-500" />
        <h3 class="text-3xl font-semibold text-white">Zentre Blog</h3>
        <p class="text-white text-[1.5rem] mt-2">Zentre Blog is a Blogging Project that lets you create blogs and share it to your friends and family. It utilizes <span class="text-blue-500">Angular Framework</span>, <span class="text-blue-500">RestApi PHP</span> & <span class="text-blue-500">MySQL</span> to create a blog app.</p>
        <a href="https://github.com/BugONSnap/projectt" class=" text-blue-500 text-[1.5rem] mt-4 inline-block">Go to →</a>
      </div>
      <div class="bg-blur-500 p-6 rounded-lg shadow-lg text-center">
        <BugSolid class="mx-auto mb-4 h-12 w-12 text-pink-500" />
        <h3 class="text-3xl font-semibold text-white">Zentre Movies</h3>
        <p class="text-white text-[1.5rem] mt-2">Zentre Movies is a movie app that allows a user to search for their favorite movies and tv shows. It utilizes <span class="text-blue-500">Vanilla HTML, CSS, & JavaScript</span> & <span class="text-blue-500">The Movie Database</span>.</p>
        <a href="https://github.com/BugONSnap/HCI-Final-Project" class=" text-blue-500 text-[1.5rem] mt-4 inline-block">Go to →</a>
      </div>
      <div class="bg-blur-500 p-6 rounded-lg shadow-lg text-center">
        <BugSolid class="mx-auto mb-4 h-12 w-12 text-pink-500" />
        <h3 class="text-3xl font-semibold text-white">ZenLibrary</h3>
        <p class="text-white text-[1.5rem] mt-2">ZenLibrary is a Library Management System that allows a user to manage their library. It utilizes  <span class="text-blue-500">Vanilla HTML, CSS, & JavaScript</span> & <span class="text-blue-500">PHP</span> & <span class="text-blue-500">MySQL</span>.With a <span class="text-blue-500">CRUD</span> Functionality.</p>
        <a href="https://github.com/BugONSnap/ZenLibrary" class=" text-blue-500 text-[1.5rem] mt-4 inline-block">Go to →</a>
      </div>
    </div>
  </section>

  <!-- Contacts Section -->
  <section id="contacts-section" class="my-8 bg-transparent bg-opacity-80 p-4 rounded-lg shadow-lg">
    <h2 class="text-[4rem] mb-4 font-cambria font-semibold text-center">~CONTACTS~</h2>
    <p class="text-center text-[2rem]">You can contact me through my socials below!</p>
    <div class="flex justify-center mt-8">
      <BugSolid class="h-8 w-8 text-blue-500" />
      <span class="text-white"> | </span>
      <span class="text-white"> | </span>
      <div class="flex flex-col items-center mx-4">
        

       
        <a href="https://github.com/BugONSnap" class="text-blue-500 text-[2rem] mx-2 inline-block">GitHub</a>
      </div>
      <span class="text-white"> | </span>
      <div class="flex flex-col items-center mx-4">

       
        <a href="https://www.instagram.com/xyrell_dave/" class="text-blue-500 text-[2rem] mx-2 inline-block">Instagram</a>
      </div>
      <span class="text-white"> | </span>
      <div class="flex flex-col items-center mx-4">
        

        <a href="https://www.facebook.com/profile.php?id=100010366622228" class="text-blue-500 text-[2rem] mx-2 inline-block">Facebook</a>
      </div>
      <span class="text-white"> | </span>
      <span class="text-white"> | </span>
      <BugSolid class="h-8 w-8 text-blue-500" />
    </div>
  </section>
</main>