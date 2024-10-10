<script lang="ts">
    import '../../app.css';
    import { GoogleSolid, GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';
  </script>

  <main class="flex flex-col p-4 " style="color:white; z-index: 3;">
    <a href="/profile" class="text-blue-500 text-[2rem]">← Profile</a>
    
    <!-- Contacts Section -->
    <section id="contacts-section" class="my-8 bg-transparent bg-opacity-80 p-8 rounded-lg shadow-lg">
      <h2 class="text-[4rem] mb-6 font-cambria font-semibold text-center">~CONTACTS~</h2>
      <p class="text-center text-[2rem] mb-8">You can contact me through my socials below!</p>
      <div class="flex justify-center items-center space-x-12">
        <div class="flex flex-col items-center">
          <GoogleSolid class="h-10 w-10 text-blue-500 mb-2" />
          <h1 class="text-white text-[2rem]">xyrdave4@gmail.com</h1>
        </div>
        
        <div class="flex flex-col items-center">
          <GithubSolid class="h-10 w-10 text-Grey-500 mb-2" />
          <a href="https://github.com/BugONSnap" class="text-blue-500 text-[2rem]">GitHub</a>
        </div>
        <div class="flex flex-col items-center">
          <LinkedinSolid class="h-10 w-10 text-White-500 mb-2" />
          <a href="https://www.linkedin.com/in/xyrell-dave-pamintuan-384885295/" class="text-blue-500 text-[2rem]">LinkedIn</a>
        </div>
      </div>
    </section>
    
    <a href="/projects" class="text-blue-500 text-[2rem]">Projects →</a>
  </main>