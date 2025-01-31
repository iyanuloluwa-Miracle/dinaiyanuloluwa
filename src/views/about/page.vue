<template>
  <div>
    <div class="px-4 sm:px-6 lg:px-8">
      <Navbar />

    </div>

    <div class="my-4 content-section">
      <br />
      <h1 class="lg:text-[50px] text-3xl text-center font-bold">
        Dina Iyanuloluwa Anuoluwapo
      </h1>
      <br />

      <div class="mx-auto flex items-center justify-center">
        <span class="text-gray-600 mx-1">B.sc degree </span> @
        <a
        href="https://web.oouagoiwoye.edu.ng/"
         target="_blank"
          class="underline flex items-end text-center mx-1 hover:text-orange-500 transition-colors duration-200"
        >
          Olabisi Onabanjo University <ArrowUpRight class="h-5 w-5" />
        </a>
      </div>

      <div class="flex items-center justify-center my-4">
        <div
          class="lg:flex items-start justify-center lg:gap-6 lg:w-[900px] my-5"
        >
          <img
            src="/src/assets/DinaIyanu.jpg"
            alt="Dina Iyanuloluwa Anuoluwapo"
            width="400"
            height="600"
            class="rounded-lg mx-auto lg:my-0 my-4 shadow-lg"
          />

          <div class="lg:my-0 my-3 px-4 md:px-0">
            <p class="text-lg leading-relaxed">
              I am a passionate and results-driven Software Engineer with over 2
              years of experience in building scalable and efficient solutions.
              As an alumnus of the
              <a
                href="https://hng.tech/"
                target="_blank"
                class="underline text-orange-500 hover:text-orange-600 transition-colors duration-200"
              >
                HNG Internship
              </a>
              and
              <a
              href="https://www.zuri.team/"
               target="_blank"
                class="underline text-orange-500 hover:text-orange-600 transition-colors duration-200"
              >
                Zuri Training
              </a>
              I have honed my skills in backend development, cloud
              infrastructure, and intelligent automation. I hold a Bachelor's
              degree in Mechanical Engineering, but my passion for technology
              led me to transition into software engineering, where I now focus
              on creating innovative solutions that solve real-world problems.
            </p>

            <hr class="border-t border-gray-300 my-5" />
            <br />

            <p class="text-lg leading-relaxed">
              Beyond backend development, I am proficient in building full-stack
              applications, including web apps and progressive web applications
              (PWAs). I prioritize creating fast, seamless, and user-friendly
              interfaces while ensuring the backend is equally scalable and
              reliable. My goal is to deliver end-to-end solutions that provide
              a seamless user experience.
            </p>

            <br />

            <p class="text-lg leading-relaxed">
              I am deeply passionate about open-source development and believe
              in the power of collaboration. Most of my side projects are
              publicly available on
              <a
              href="https://github.com/iyanuloluwa-Miracle"
               target="_blank"
                class="underline text-orange-500 hover:text-orange-600 transition-colors duration-200"
              >
                GitHub - @iyanuloluwa-Miracle
              </a>
              , where I share libraries, SDKs, and tools that I’ve built. These
              projects span various domains, including web frameworks, payment
              gateways, automation, and bot development. I aim to contribute to
              the developer community by providing resources that others can
              learn from and build upon.
            </p>

            <hr class="border-t border-gray-300 my-5" />

            <p class="text-lg leading-relaxed">
              When I’m not coding, I enjoy playing video games like PES, FIFA,
              and Chess. I’m also an avid football fan and proudly support FC
              Barcelona. These hobbies help me unwind and stay creative, which I
              believe is essential for maintaining a healthy work-life balance.
            </p>

            <RouterLink to="/projects">
              <button
                class="rounded-[30px] my-4 border hover:bg-black transition-all duration-400 ease-in hover:text-white border-black p-2 w-32 flex items-center justify-center"
              >
                Projects <ArrowUpRight :stroke-width="1.5" />
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>


    <div class="px-4 sm:px-6 lg:px-8">
      <Footer />

    </div>
    
   
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Navbar from "../../components/navbar/index.vue";
import { RouterLink } from "vue-router";
import { ArrowUpRight } from "lucide-vue-next";
import gsap from "gsap";
import Footer from "../../components/footer/index.vue";

onMounted(() => {
  gsap.fromTo(
    ".content-section",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
  );
});
</script>

