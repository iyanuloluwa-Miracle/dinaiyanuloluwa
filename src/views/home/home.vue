<!-- src/pages/index.vue -->
<template>
  <div>
    <Navbar />

    <div class="my-10">
      <div class="content-section">
        <h1 class="text-4xl lg:text-[50px]">
          Transforming Digital Landscapes Engineering
        </h1>
        <br />
        <br />
        <div class="text-base lg:text-[20px] mt-4">
          <p>
            Software engineer specializing in intelligent automation,
            user-friendly interfaces, and robust backend systems.
          </p>

          <div className="flex items-center gap-x-3 flex-wrap mt-4">
            <ColoredLink
              href="https://jamajama.com/"
            >
              JamaJama
            </ColoredLink>
            <ColoredLink
              href="https://github.com/Adedoyin-Emmanuel/ercaspay-js-sdk"
            >
              Ercaspay-SDK
            </ColoredLink>
            <ColoredLink href="https://www.medistorepro.com/">
                Medistorepro
            </ColoredLink>
            <ColoredLink href="https://link-magic.vercel.app/">
              LinkMagic
            </ColoredLink>
            <ColoredLink href="https://github.com/iyanuloluwa-Miracle/TEAM-6-PURPLE">
              Travel&Tourism API
            </ColoredLink>
            <ColoredLink href="https://gencode-sigma.vercel.app/">
              GenCode
            </ColoredLink>
          </div>

          <br />
          <p>
            My engineering mindset focuses on scalable, efficient solutions that
            push technical boundaries. I design solutions that address present
            requirements while foreseeing potential difficulties.
          </p>

          <br />
          <p class="italic text-gray-700">
            "Great achievements emerge not from grand resources, but from
            vision, dedication, and relentless innovation."
          </p>

          <br />
          <br />

          <a
            href="/Adedoyin-Emmanuel-Resume.pdf"
            target="_blank"
            class="inline-flex items-center gap-2 mt-4 px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-all"
          >
            View Resume <ArrowUpRight :stroke-width="1.5" />
          </a>
        </div>
      </div>
    </div>
    <br>

    <Footer />
  </div>
</template>
      
  <script setup>
import Navbar from "../../components/navbar/index.vue";
import { ArrowUpRight } from "lucide-vue-next";
import gsap from "gsap";
import ColoredLink from "../../components/link/link.vue";
import { onMounted } from "vue";
import Footer from "../../components/footer/index.vue";

onMounted(() => {
  gsap.fromTo(
    ".content-section",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
  );
});
</script>