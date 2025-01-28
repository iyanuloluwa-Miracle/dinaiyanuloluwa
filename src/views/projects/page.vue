<template>
    <Navbar />
    <div class="my-4 content-section">
    <h1 class="lg:text-[50px] text-3xl text-center font-bold">
      My Projects
    </h1>

    <div class="mx-auto flex items-center justify-center md:w-[600px] mb-4">
      <span class="text-gray-600 mx-1 my-10">
        "Innovation thrives where determination meets creativity." — 
        <RouterLink to="/projects" class="underline inline text-black">
          Dina Iyanuloluwa
        </RouterLink>
      </span>
    </div>

    <!-- Centered Input -->
    <div class="flex justify-center mb-4">
      <input
        v-model="searchQuery"
        placeholder="Search projects..."
        class="w-full max-w-md px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    <div class="flex flex-wrap justify-center mb-4">
      <button
        v-for="tag in tags"
        :key="tag"
        :class="[
          'px-4 py-2 m-2 text-sm rounded-full',
          selectedTag === tag ? 'bg-black text-white' : 'bg-gray-200',
        ]"
        @click="selectedTag = tag"
      >
        {{ tag }}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto p-2">
      <div
        v-for="project in filteredProjects"
        :key="project.name"
        class="border p-4 rounded-lg"
      >
        <h2 class="text-xl font-bold">{{ project.name }}</h2>
        <p class="text-sm text-gray-600">{{ project.description }}</p>

        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="language in project.languages"
            :key="language"
            class="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full"
          >
            {{ language }}
          </span>
        </div>

        <div class="mt-3">
          <a
            :href="project.url"
            target="_blank"
            class="text-black underline flex items-center"
          >
            Visit Project <ArrowUpRight :stroke-width="1.5" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>


<script setup>
import Navbar from '../../components/navbar/index.vue';
import { ref, computed, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { ArrowUpRight } from "lucide-vue-next";
import gsap from "gsap";
import Footer from "../../components/footer/index.vue";
// State
const selectedTag = ref("All");
const searchQuery = ref("");

// Projects Data
const projects = [
  {
    name: "WaterBuddy",
    tag: "Extension",
    description:
      "A vsc code extension that reminds developers to stay hydrated while coding",
    languages: ["TypeScript", "JavaScript", "Vsc Extension"],
    url: "https://github.com/iyanuloluwa-Miracle/WaterBuddy",
  },
  {
    name: "Ercaspay JS SDK",
    tag: "SDK",
    description:
      "Ercaspay JavaScript SDK provides a convenient interface for interacting with Ercaspay Payment Gateway in your applications.",
    languages: ["TypeScript"],
    url: "https://github.com/Adedoyin-Emmanuel/ercaspay-js-sdk",
  },
  {
    name: "Travel and Tourism API",
    tag: "API",
    description:
      "An award-winning Travel and Tourism API that offers comprehensive information on tourist attractions, hotels, and restaurants, recognized at the Test API Hackathon.",
    languages: ["JavaScript, NodeJs, Express"],
    url: "https://github.com/iyanuloluwa-Miracle/TEAM-6-PURPLE",
  },
  {
    name: "JAMJAMA API",
    tag: "API",
    description:
      "The backbone of the Jamajama web application, providing robust and scalable functionality.",
    languages: ["JavaScript, NodeJs, Express"],
    url: "https://documenter.getpostman.com/view/27074715/2s9Y5TyjMa",
  },
  {
    name: "Medistorepro API",
    tag: "API",
    description:
      "The backbone of the Medistorepro web application, providing robust and scalable functionality.",
    languages: ["JavaScript, NodeJs, Express"],
    url: "https://www.medistorepro.com/",
  },
  {
    name: "Event Management API(Unicon)",
    tag: "API",
    description:
      "A simple event management API that allows users to create, update, and delete events. It powered the frontend of Unicorn, which secured 4th position in the Squad Hackathon.",
    languages: ["Javascript, NodeJs, Express"],
    url: "https://github.com/iyanuloluwa-Miracle/UNICON-BACKEND",
  },
  {
    name: "Unicon",
    tag: "Web App",
    description:
      "Create and manage events with Unicon, a simple event management application that allows users to create, update, and delete events.",
    languages: ["TypeScript", "Reactjs", "tailwindcss"],
    url: "https://getunicon.vercel.app/",
  },
  {
    name: "LinkMagic",
    tag: "Web App",
    description:
      "A url shortening web app that allows users to shorten long urls and copy the shortened link.",
    languages: ["Vuejs", "tailwindcss", "Pinia (State Management)", "Fetch API"],
    url: "https://link-magic.vercel.app/",
  },
  
  {
    name: "Holmen Tech Consulting redesign ",
    tag: "Web App",
    description: "Website redesign for Holmen Tech Consulting Firm.",
    languages: ["Vuejs", "Tailwindcss"],
    url: "https://holmen-consulting-firm.vercel.app/",
  },
  {
    name: "Anime Verse",
    tag: "Web App",
    description:
      "Search destination for discovering new anime, manga, and light novels.",
    languages: ["Vuejs", "Tailwindcss","api.jikan.moe"],
    url: "https://github.com/iyanuloluwa-Miracle/anime_verse",
  },
  {
    name: "LinkMagic API",
    tag: "API",
    description:
      "A simple product API built with Nestjs and MongoDB for the LinkMagic web application.",
    languages: ["Nestjs", "MongoDB", "TypeScript"],
    url: "https://github.com/iyanuloluwa-Miracle/LINK_MAGIC_BACKEND",
  },
];

// Tags
const tags = ["All", ...new Set(projects.map((project) => project.tag))];

// Filtered Projects
const filteredProjects = computed(() => {
  return projects.filter((project) => {
    const matchesTag = selectedTag.value === "All" || project.tag === selectedTag.value;
    const matchesSearch = searchQuery.value
      ? project.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.value.toLowerCase())
      : true;
    return matchesTag && matchesSearch;
  });
});

// GSAP Animation
onMounted(() => {
  gsap.fromTo(
    ".content-section",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
  );
});
</script>


<!-- <script>



export default {
    components: {
        Navbar
    }
}
</script> -->