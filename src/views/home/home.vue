<template>
  <Navbar />
  <!-- <div class="my-4">
        <div class="content-section">
          <h1 class="text-4xl lg:text-[50px]">
            Engineering Seamless User Experiences.
          </h1>
          <div class="text-base lg:text-[20px] mt-4">
            <p>
              Software Engineer building scalable Backend Systems, Engaging User Interfaces,
              Intelligent Bots & Web Scrapers. Creator of
              <ColoredLink href="https://github.com/adedoyin-emmanuel/methane-cli">
                Methane-Cli
              </ColoredLink>
            </p>
  
            <p class="mt-4">You can do great things from a small place.</p>
  
            <a
              href="/Adedoyin-Emmanuel-Resume.pdf"
              target="_blank"
              class="inline-flex items-center gap-2 mt-4 px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-all"
            >
              Resume <ArrowUpRight :stroke-width="1.5" />
            </a>
          </div>
        </div>
      </div> -->








  <Footer/>
</template>




<script>
import Navbar from '../../components/navbar/index.vue';
import Footer from '../../components/footer/index.vue';


export default {
    components: {
        Navbar,
        Footer
    }
}
</script>
