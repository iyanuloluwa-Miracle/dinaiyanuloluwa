<template>
  <div class="w-full sticky top-0 bg-white z-40">
    <div class="container mx-auto p-2 my-6">
      <nav class="flex items-center justify-between">
        <!-- Logo and Name Section -->
        <RouterLink to="/" class="flex items-center space-x-3">
          <img
            src="/src/assets/iyanuloluwa.png"
            alt="@Dina Iyanuloluwa"
            class="rounded-full w-10 h-10 object-cover"
          />
          <div>
            <h3 class="font-bold text-sm">Dina Iyanuloluwa</h3>
            <p class="text-xs text-gray-500">Software Engineer</p>
          </div>
        </RouterLink>

        <!-- Desktop Navigation Links -->
        <div class="hidden lg:flex items-center space-x-6">
          <RouterLink
            v-for="link in navigationLinks"
            :key="link.path"
            :to="link.path"
            :class="{
              'text-black font-semibold': route.path === link.path,
              'text-gray-600 hover:text-black': route.path !== link.path,
            }"
            class="transition-colors duration-200"
          >
            {{ link.name }}
          </RouterLink>
        </div>

        <!-- Social Links -->
        <div class="hidden lg:flex items-center space-x-4">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            class="text-gray-600 hover:text-black hover:scale-110 transition-all duration-200"
          >
            <component :is="social.icon" :size="20" :stroke-width="1.5" />
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <div class="lg:hidden">
          <button 
            @click="toggleMobileMenu" 
            class="text-gray-600 hover:text-black focus:outline-none"
          >
            <Menu v-if="!isMobileMenuOpen" :size="24" />
            <X v-else :size="24" />
          </button>
        </div>
      </nav>

      <!-- Mobile Menu with Transition -->
      <transition name="slide">
        <div 
          v-if="isMobileMenuOpen" 
          class="lg:hidden fixed inset-0 bg-white z-50 mt-16 overflow-y-auto"
        >
          <div class="flex flex-col">
            <RouterLink
              v-for="link in navigationLinks"
              :key="link.path"
              :to="link.path"
              :class="{
                'text-black font-semibold': route.path === link.path,
                'text-gray-600': route.path !== link.path,
              }"
              class="px-6 py-4 hover:bg-gray-100 transition-colors duration-200"
              @click="toggleMobileMenu"
            >
              {{ link.name }}
            </RouterLink>
          </div>
          <div class="flex justify-center space-x-6 py-6 border-t border-gray-200">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="text-gray-600 hover:text-black hover:scale-110 transition-all duration-200"
            >
              <component :is="social.icon" :size="20" :stroke-width="1.5" />
            </a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { Twitter, Linkedin, Github, Menu, X } from "lucide-vue-next";

const route = useRoute();
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  document.body.classList.toggle("overflow-hidden", isMobileMenuOpen.value);
};

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Hall Of Fame", path: "/hall-of-fame" },
  { name: "Projects", path: "/projects" },

];

const socialLinks = [
  { name: "Twitter", url: "https://twitter.com", icon: Twitter },
  { name: "Github", url: "https://github.com", icon: Github },
  { name: "Linkedin", url: "https://linkedin.com", icon: Linkedin },
];
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>