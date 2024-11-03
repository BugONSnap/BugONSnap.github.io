<script lang="ts">
    import '../../app.css';
    import { BugSolid } from 'flowbite-svelte-icons';
  </script>

  <main class="flex flex-col p-4 " style="color:white; z-index: 3;">
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
          <a href="https://github.com/BugONSnap/Zenlibrary" class=" text-blue-500 text-[1.5rem] mt-4 inline-block">Go to →</a>
        </div>
      </div>
    </section>
    <a href="/Contact" class="text-blue-500 text-[2rem]">← Contacts</a>
    <a href="/" class=" text-pink-500 text-[2rem] ">Back to Home</a>

    <a href="/About" class="text-blue-500 text-[2rem]">Profile →</a>
  </main>