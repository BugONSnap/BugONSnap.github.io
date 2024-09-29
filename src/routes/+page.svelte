<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import '../app.css'; // Ensure TailwindCSS is imported

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
<header class="relative left-[25%] flex justify-between items-center w-[50%] p-2 bg-transparent text-white" style="z-index: 3;">
  <div>
    <h1 class="text-3xl font-cambriafont-semibold">Xyrell Dave Pamintuan</h1>
  </div>
  <div>
    <Button class="bg-black text-white py-2 px-4 rounded-full mx-2" on:click={() => scrollToSection('profile-section')}>Profile</Button>
    <Button class="bg-black text-white py-2 px-4 rounded-full mx-2" on:click={() => scrollToSection('projects-section')}>Projects</Button>
    <Button class="bg-black text-white py-2 px-4 rounded-full mx-2" on:click={() => scrollToSection('contacts-section')}>Contacts</Button>
  </div>
</header>

<!-- Welcome Section -->
<section class="welcome-container mx-auto my-8 p-5 bg-blur backdrop-blur rounded-lg shadow-lg flex items-center" style="width: 850px; height: 20rem;">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img src="src/Pics/prof.png" alt="Profile Image" class="relative right-[-60vh] h-[30vh] w-[25vh] rounded-full mr-4">
  <h2 class="text-white text-2xl font-cambriafont-semibold relative right-[25vh] top-[-10vh]">Welcome to My Portfolio <br> <span class="text-[3rem] font-cambria  ">Hello I'm Xyrell Dave</span><br></h2>


</section>

<!-- Main Content -->
<main class="grid-container p-4" style="z-index: 3;">
  <!-- Profile Section -->
  <section id="profile-section" class=" grid-item my-8 bg-transparent bg-opacity-80 p-4 rounded-lg shadow-lg">
    <h2 class="text-3xl mb-4 font-cambriafont-semibold">Profile</h2>
    <p>Details about the profile...</p>
  </section>

  <!-- Projects Section -->
  <section id="projects-section" class="grid-item my-8 bg-transparent bg-opacity-80 p-4 rounded-lg shadow-lg">
    <h2 class="bg-transparent text-3xl mb-4 font-cambriafont-semibold">Projects</h2>
    <p>Details about the projects...</p>
  </section>

  <!-- Contacts Section -->
  <section id="contacts-section" class="grid-item my-8 bg-transparent bg-opacity-80 p-4 rounded-lg shadow-lg">
    <h2 class="text-3xl mb-4 font-semibold">Contacts</h2>
    <p>Details about the contacts...</p>
  </section>
</main>


