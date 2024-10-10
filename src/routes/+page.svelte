<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import { BugSolid, GithubSolid, GoogleSolid, LinkedinSolid } from 'flowbite-svelte-icons';
  import '../app.css'; 
  import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';
  import { ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid, BullhornSolid } from 'flowbite-svelte-icons';

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
<header class="welcome-container grid grid-cols-1 gap-4 p-5 border-2 border-pink-500 rounded-lg shadow-lg mx-auto my-8 bg-blur-500 backdrop-blur ">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img src="smile-.png" alt="Profile picture of Xyrell Dave Pamintuan" class="profile-image rounded-full mx-auto">
  <h2 class="text-white text-2xl font-cambriafont-semibold text-center">
    Good Day! Everyone Im <br> 
    <span class="text-[3rem] font-cambria"> Xyrell Dave Pamintuan</span><br> 
    Im a <span class="text-blue-500">Gordon College</span> Student and a <span class="text-blue-500">Trial By Fire Enthusiast</span><br><br>
    <button class="text-blue-500">
      <a href="/profile">Wanna know more about me?</a>
    </button><br> 
    <span class="text-white"> What are my </span>
    <button class="text-blue-500">
      <a href="/projects">Projects?</a>
    </button><br> 
    <span class="text-white"> What are my </span>
    <button class="text-blue-500">
      <a href="/contacts">Contacts?</a>
    </button>
  </h2>
</header>