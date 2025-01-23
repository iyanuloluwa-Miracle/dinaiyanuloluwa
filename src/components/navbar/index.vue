<template>
  <div class="w-full flex items-center justify-evenly p-2 my-6">
    <!-- Large screen navbar content -->
    <nav>
      <RouterLink to="/" class="flex items-center">
        <img
          src="/src/assets/iyanuloluwa.png"
          alt="@Dina Iyanuloluwa"
          class="rounded-full"
          width="40"
          height="40"
        />
        <div class="mx-2">
          <h3 class="font-bold text-[0.89rem]">Dina Iyanuloluwa</h3>
          <p class="text-[0.74rem] text-[#8e8e8e] py-0 md-1">
            Software Engineer
          </p>
        </div>
      </RouterLink>

      <!-- Navigation Links -->
      <div class="hidden lg:flex items-center justify-center gap-6">
        <RouterLink
          v-for="link in navigationLinks"
          :key="link.path"
          :to="link.path"
          :class="{
            'text-black font-bold': route.path === link.path,
            'text-gray-500': route.path !== link.path,
          }"
        >
          {{ link.name }}
        </RouterLink>
      </div>

      <!-- Social Links -->
      <div class="hidden lg:flex items-center justify-end gap-4">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.url"
          class="hover:text-gray-900 hover:scale-110 transition-transform duration-200 ease-in-out"
        >
          <component :is="social.icon" :stroke-width="1" />
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { Twitter, Linkedin, Github } from "lucide-vue-next";

const route = useRoute();

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Hall Of Fame", path: "/hall-of-fame" },
];

const socialLinks = [
  { name: "Twitter", url: "https://twitter.com", icon: Twitter },
  { name: "Github", url: "https://github.com", icon: Github },
  { name: "Linkedin", url: "https://linkedin.com", icon: Linkedin },
];
</script>
