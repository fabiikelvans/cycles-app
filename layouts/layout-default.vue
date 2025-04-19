<script setup lang="ts">

import Header from "~/components/layouts/home/Header.vue";
import Footer from "~/components/layouts/home/Footer.vue";
import PageLoader from  "~/components/PageLoader.vue"
</script>

<template>
 <div class="bg-[#07090D] text-white min-h-screen home">
   <PageLoader/>
   <Header/>
   <main class="max-w-7xl pt-24 mx-auto px-6">
     <slot></slot>
   </main>
   <Footer/>
 </div>
</template>

<style scoped>
.home {
  font-family: 'Inter', sans-serif;
}
</style>
