<template>
  <div class="px-4 sm:px-6 lg:px-8">
    
    <Navbar />

    <div class="my-8 content-section">
    <h1 class="lg:text-[50px] text-3xl text-center font-bold">Hall Of Fame</h1>
    <div class="text-center mt-4 text-gray-600">
      Celebrating milestones, achievements, and key contributions.
    </div>

    <hr class="border-t border-gray-300 my-6" />

    <!-- Academic Milestones -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Academic Milestones</h2>
      <div class="flex mb-4">
        <span class="text-gray-600 mr-1">Bsc degree </span> @
        <a
          href="https://web.oouagoiwoye.edu.ng/"
          target="_blank"
          class="underline flex items-end text-center mx-1"
        >
          Olabisi Onabanjo University <ArrowUpRight class="h-5 w-5" />
        </a>
      </div>
      <p class="text-gray-600">
        Progressed through core courses in software development, computer
        science, and engineering principles.
      </p>
    </section>

    <hr class="border-t border-gray-300 my-6" />

    <!-- Professional Achievements -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Professional Achievements</h2>
      <ul class="list-disc list-inside">
        <li>
          Graduated from the
          <a href="#" target="_blank" class="underline text-orange-500"
            >Uptick Software Engineering Program (Cohort 1)</a
          >, earning certification as a Software Engineer with a specialization
          in backend development.
        </li>

        <li>
          Collaborated with Adedoyin and Henry to secure the
          <strong>First Runner-Up</strong> position at the
          <a
            href="https://github.com/Adedoyin-Emmanuel/ercaspay-js-sdk"
            target="_blank"
            class="underline text-orange-500"
            >ERCASPAY Hackathon</a
          >, delivering innovative solutions under tight deadlines.
        </li>

        <li>
          Collaborated with Adedoyin on
          <a
            href="https://github.com/iyanuloluwa-Miracle/UNICON-BACKEND"
            target="_blank"
            class="underline text-orange-500"
            >Unicon</a
          >
          project, achieving a <strong>4th Place</strong> finish in the
          <a
            href="https://squadco.com/hackathon/"
            target="_blank"
            class="underline text-orange-500"
            >Squad 2024 Hackathon by GTBank</a
          >.
        </li>

        <li>
          Led a team of 4 to a <strong>First Place</strong> finish at the
          <a
            href="https://x.com/testfest_?lang=en"
            target="_blank"
            class="underline text-orange-500"
            >TestFest2024</a
          >
          API hackathon, showcasing exceptional problem-solving skills and
          teamwork.
        </li>

        <li>
          Collaborated with Tobi to achieve First Place in the
          <a
            href="https://www.hiil.org/"
            target="_blank"
            class="underline text-orange-500"
          >
            HiiL Justice Hackathon
          </a>
          for developing solutions to address domestic violence
        </li>

        <li>
          Graduated from the
          <a
            href="https://www.zuri.team/"
            target="_blank"
            class="underline text-orange-500"
            >Zuri Training Program</a
          >, specializing in backend development.
        </li>

        <li>
          <a
            href="https://hng.tech/"
            target="_blank"
            class="underline text-orange-500"
            >HNG9 Finalist</a
          >, ranked among the top 300 out of 11,000 participants in an internship program.
        </li>
      </ul>
    </section>

    <hr class="border-t border-gray-300 my-6" />

    <!-- Hackathon Showcase -->
    <section class="mb-8 ml-4">
  <h2 class="text-2xl font-bold mb-4">Hackathon Showcase</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <!-- Image 1 -->
    <div class="bg-gray-100 p-4 rounded-lg">
      <div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
        <img
          src="../../assets/hackathon-showcase/ercaspayhackathon.jpg"
          alt="Hackathon Image 1"
          class="w-full h-48 object-cover"
        />
      </div>
      <p class="text-gray-600 mt-2">ERCASPAY HACKATHON</p>
    </div>

    <!-- Image 2 -->
    <div class="bg-gray-100 p-4 rounded-lg">
      <div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
        <img
          src="../../assets/hackathon-showcase/testapihackathon.jpg"
          alt="Hackathon Image 2"
          class="w-full h-48 object-cover"
        />
      </div>
      <p class="text-gray-600 mt-2">Test Api Hackathon 2024</p>
    </div>

    <!-- Image 3 -->
    <div class="bg-gray-100 p-4 rounded-lg">
      <div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
        <img
          src="../../assets/hackathon-showcase/hilhackathon.jpg"
          alt="Hackathon Image 3"
          class="w-full h-48 object-cover"
        />
      </div>
      <p class="text-gray-600 mt-2">TestFest2024</p>
    </div>

    <!-- Image 4 -->
    <div class="bg-gray-100 p-4 rounded-lg">
      <div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
        <img
          src="../../assets/hackathon-showcase/testnet.jpg"
          alt="Hackathon Image 4"
          class="w-full h-48 object-cover"
        />
      </div>
      <p class="text-gray-600 mt-2">HiiL Justice Hackathon</p>
    </div>

    <!-- Image 5 -->
    <div class="bg-gray-100 p-4 rounded-lg">
      <div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
        <img
          src="../../assets/hackathon-showcase/squadcohackahon.jpg"
          alt="Hackathon Image 5"
          class="w-full h-48 object-cover"
        />
      </div>
      <p class="text-gray-600 mt-2">Hackathon 5</p>
    </div>

    <!-- Image 6 -->
    <div class="bg-gray-100 p-4 rounded-lg">
      <div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
        <img
          src="../../assets/hackathon-showcase/sqadco.jpg"
          alt="Hackathon Image 6"
          class="w-full h-48 object-cover"
        />
      </div>
      <p class="text-gray-600 mt-2">Hackathon 6</p>
    </div>
  </div>
</section>
  </div>

  </div>
 
  
</template>

<script setup>
import Navbar from "../../components/navbar/index.vue";
import { onMounted } from "vue";
import { ArrowUpRight } from "lucide-vue-next";
import gsap from "gsap";

// GSAP Animation
onMounted(() => {
  gsap.fromTo(
    ".content-section",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
  );
});
</script>