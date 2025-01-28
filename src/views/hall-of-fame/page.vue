<template>
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
          Graduate of Uptick Software Engineering Program Cohort 1
          <a
            href="#"
            target="_blank"
            class="underline text-blue-500"
          >
             Uptick
          </a>
          , certified as a Software Engineer graduate, specialized in backend
          development.
        </li>

        <li>
          Led team
          <a
            href="https://taikai.network/hackbox/hackathons/webfusionlagos/projects/clpk6l8s300bi0z01tim9nv28/idea"
            target="_blank"
            class="underline text-blue-500"
          >
            KEGHA
          </a>
          to secure First position in the
          <a
            href="taikai.network/hackbox/hackathons/webfusionlagos/projects"
            target="_blank"
            class="underline text-blue-500"
          >
            NEAR Web Fusion 2023 Hackathon
          </a>
          , developing innovative solutions under tight deadlines.
        </li>

        <li>
          Led team
          <a
            href="https://github.com/iyanuloluwa-Miracle/UNICON-BACKEND"
            target="_blank"
            class="underline text-blue-500"
          >
            Unicon
          </a>
          to a 4th place finish in the
          <a
            href="https://squadco.com/hackathon/"
            target="_blank"
            class="underline text-blue-500"
          >
            Squad 2024 Hackathon by GTBank
          </a>
        </li>

        <li>
          Received a
          <a
            href="https://devpost.com/software/caresync-melncs"
            target="_blank"
            class="underline text-blue-500"
          >
            honorary award
          </a>
          at
          <a
            href="https://lec-hacks-2023.devpost.com/"
            target="_blank"
            class="underline text-blue-500"
          >
            NorCal Hacks 2023
          </a>
          for building an innovative solution.
        </li>

        <li>
          <a
            href="https://hng.tech"
            target="_blank"
            class="underline text-blue-500"
          >
            HNGX Finalist
          </a>
          specialized as a Backend Engineer, ranked among the top 300 out of
          11,000 participants in an internship program.
        </li>

        <li>
          <a
            href="https://www.zuri.team/"
            target="_blank"
            class="underline text-blue-500"
          >
            Zuri Training
          </a>
          graduate, specialized in backend development,
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
          <img
            src="https://via.placeholder.com/400x300"
            alt="Hackathon Image 1"
            class="w-full h-auto rounded-lg"
          />
          <p class="text-gray-600 mt-2">NEAR Web Fusion 2023 Hackathon</p>
        </div>

        <!-- Image 2 -->
        <div class="bg-gray-100 p-4 rounded-lg">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Hackathon Image 2"
            class="w-full h-auto rounded-lg"
          />
          <p class="text-gray-600 mt-2">Squad 2024 Hackathon by GTBank</p>
        </div>

        <!-- Image 3 -->
        <div class="bg-gray-100 p-4 rounded-lg">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Hackathon Image 3"
            class="w-full h-auto rounded-lg"
          />
          <p class="text-gray-600 mt-2">NorCal Hacks 2023</p>
        </div>

        <!-- Image 4 -->
        <div class="bg-gray-100 p-4 rounded-lg">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Hackathon Image 4"
            class="w-full h-auto rounded-lg"
          />
          <p class="text-gray-600 mt-2">Hackathon 4</p>
        </div>

        <!-- Image 5 -->
        <div class="bg-gray-100 p-4 rounded-lg">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Hackathon Image 5"
            class="w-full h-auto rounded-lg"
          />
          <p class="text-gray-600 mt-2">Hackathon 5</p>
        </div>

        <!-- Image 6 -->
        <div class="bg-gray-100 p-4 rounded-lg">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Hackathon Image 6"
            class="w-full h-auto rounded-lg"
          />
          <p class="text-gray-600 mt-2">Hackathon 6</p>
        </div>
      </div>
    </section>
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